import prisma from '../prisma-client';

const Appointment = prisma.appointment;

export interface CreateAppointmentDto {
    clientId: number;
    procedureId: number;
    note?: string;
    image?: string;
}

export const createAppointment = async (data: CreateAppointmentDto) => {
    const newAppointment = await Appointment.create({
        data: {
            clientId: Number(data.clientId),
            procedureId: Number(data.procedureId),
            note: data.note,
            image: data.image,
        }
    });

    return newAppointment;
};

export const getAllAppoiments = async () => {

    const appoiments = await Appointment.findMany({
        include: {
            client: true,
            procedure: true,
        },
    });

    return appoiments;
};

export const getAppointmentsByClientId = async (clientId: number) => {
    const appointments = await Appointment.findMany({
        where: {
            clientId: Number(clientId),
        },
        include: {
            client: true,
            procedure: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    return appointments;
};

// export const getAppoimentById = async (id: number) => {
//     const appoiment = await Appoiment.findUnique({
//         where: { id },
//     });

//     if (!appoiment) return null;


//     return {
//         ...appoiment,
//     };
// };





