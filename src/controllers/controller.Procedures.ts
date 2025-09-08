import { Request, Response } from 'express';
import { Procedure } from '../../generated/prisma';
import { imageUpload } from '../services/service.Files';
import { createProcedure, getAllProcedures, getProcedureById } from '../services/service.Procedures';

export const fetchAllProceduresController = async (req: Request<Procedure[], {}, {}>, res: Response) => {

    const procedures = await getAllProcedures()
    try {
        return res.status(200).json([...procedures]);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createProcedureController = async (req: Request, res: Response) => {

    const procedureData = req.body;
    let filePath = null


    if (req.file) {
        filePath = await imageUpload(req.file, 'procedures')
        procedureData.image = filePath
    }
    try {
        const procedure = await createProcedure(procedureData)
        return res.status(201).json(procedure)
    } catch (error) {
        console.error('Error creating procedure:', error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

export const getProcedureByIdController = async (req: Request, res: Response) => {
    const clientId = Number(req.params.id);

    if (!clientId) {
        return res.status(400).json({ message: 'Client ID is required' });
    }

    try {
        const procedure = await getProcedureById(clientId);
        if (!procedure) {
            return res.status(404).json({ message: 'Procedure not found' });
        }
        return res.status(200).json(procedure);
    } catch (error) {
        console.error('Error fetching Procedure:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

}