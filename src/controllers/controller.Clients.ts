import { Request, Response } from 'express';
import { createClient, deleteClient, getAllClients, getClientById } from '../services/service.Clients';
import { Client } from '../../generated/prisma';
import { imageUpload } from '../services/service.Files';



export const fetchAllClientsController = async (req: Request, res: Response) => {

    const clients = await getAllClients(req.query)
    try {
        return res.status(200).json([...clients]);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createClientsController = async (req: Request<{}, {}, Client>, res: Response) => {

    const clientData = req.body;
    let filePath = null

    if (req.file) {
        filePath = await imageUpload(req.file, 'clients')
        clientData.image = filePath
    }

    try {
        const client = await createClient(clientData)
        return res.status(200).json(client);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getClientByIdController = async (req: Request, res: Response) => {
    const clientId = Number(req.params.id);

    if (!clientId) {
        return res.status(400).json({ message: 'Client ID is required' });
    }

    try {
        const Client = await getClientById(clientId);
        if (!Client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        return res.status(200).json(Client);
    } catch (error) {
        console.error('Error deleting Client:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

}

export const deleteClientByIdController = async (req: Request, res: Response) => {
    const clientId = Number(req.params.id);

    if (!clientId) {
        return res.status(400).json({ message: 'Client ID is required' });
    }

    try {
        const deletedClient = await deleteClient(clientId);

        if (!deletedClient) {
            return res.status(404).json({ message: 'Client not found or already deleted' });
        }

        return res.status(200).json({ message: 'Client successfully deleted', client: deletedClient });
    } catch (error) {
        console.error('Error deleting client:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};