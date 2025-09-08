import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { Jimp } from 'jimp';


export const imageUpload = async (file: Express.Multer.File, folderNaam: string) => {

    if (!file) return null;

    const originalName = file.originalname;
    const newClientName = `${uuidv4()}-${originalName}`;

    const uploadDir = path.resolve(__dirname, '..', 'public', 'upload', folderNaam);

    try {
        await fs.mkdir(uploadDir, { recursive: true });

        const newPath = path.join(uploadDir, newClientName);

        await fs.rename(file.path, newPath);

        const img = await Jimp.read(newPath);
        img.resize({ w: 450 });
        // await img.write(newPath as `${string}.${string}`);

        const clientFileURL = `${process.env.CLIENT_URL}:${process.env.PORT}/upload/${folderNaam}/${newClientName}`;
        return clientFileURL;

    } catch (error) {
        console.error('Ошибка при загрузке и обработке изображения:', error);
        await fs.unlink(newClientName);
        throw error;
    }
}
