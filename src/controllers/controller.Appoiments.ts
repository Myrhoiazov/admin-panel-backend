import { Request, Response } from 'express';
import { createClient, deleteClient, getAllClients, getClientById } from '../services/service.Clients';
import { Appointment } from '../../generated/prisma';
import { imageUpload } from '../services/service.Files';
import { createAppointment, CreateAppointmentDto, getAllAppoiments, getAppointmentsByClientId } from '../services/service.Appoiments';


export const getAllAppoimentsontroller = async (req: Request, res: Response) => {

    const appoiments = await getAllAppoiments(req.query)
    try {
        return res.status(200).json([...appoiments]);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createAppoimentController = async (req: Request<{}, {}, CreateAppointmentDto>, res: Response) => {

    const appoimentData = req.body;
    let filePath = null

    if (req.file) {
        filePath = await imageUpload(req.file, 'appoiments')
        appoimentData.image = filePath
    }

    try {
        const appointment = await createAppointment(appoimentData)
        return res.status(200).json(appointment);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getAppoimentsByClientController = async (req: Request, res: Response) => {
    try {
        const { clientId } = req.params;
        console.log("clientId: ", clientId);

        if (!clientId) {
            return res.status(400).json({ message: "clientId is required" });
        }

        const appoiments = await getAppointmentsByClientId(Number(clientId));
        return res.status(200).json(appoiments);
    } catch (error) {
        console.error("Error fetching appointments by client:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getAppoimentByIdController = async (req: Request, res: Response) => {
    const appoimentId = Number(req.params.id);

    // if (!appoimentId) {
    //     return res.status(400).json({ message: 'Appoiment ID is required' });
    // }

    // try {
    //     const appoiment = await getAppoimentById(appoimentId);
    //     if (!appoiment) {
    //         return res.status(404).json({ message: 'Appoiment not found' });
    //     }
    //     return res.status(200).json(appoiment);
    // } catch (error) {
    //     console.error('Error deleting Appoiment:', error);
    //     return res.status(500).json({ message: 'Internal server error' });
    // }

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