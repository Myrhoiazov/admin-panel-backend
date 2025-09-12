import prisma from '../prisma-client';

const Appointment = prisma.appointment;

export interface CreateAppointmentDto {
    clientId: number;
    procedureId: number;
    note?: string;
    image?: string;
}

export interface GetAppoimentsParams {
    _sortBy?: 'firstName' | 'createdAt';
    _order?: 'asc' | 'desc';
    _q?: string,
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

export const getAllAppoiments = async (params: GetAppoimentsParams) => {

    const { _sortBy = 'createdAt', _order = 'desc', _q } = params;

    const whereClause = {
        ...(!!_q && {
            client: {
                OR: [
                    { firstName: { contains: _q, } },
                    { lastName: { contains: _q } }, // если хочешь искать и по фамилии
                ],
            },
        }),
    };

    const appoiments = await Appointment.findMany({
        where: whereClause,
        include: {
            client: true,
            procedure: true,
        },
        orderBy: {
            [_sortBy]: _order.toLowerCase() === 'asc' ? 'asc' : 'desc',
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





