import { LoyaltyLevel, Client as TClient } from '../../generated/prisma';
import prisma from '../prisma-client'
import { createClientStatus } from './service.ClientStatus';

const Client = prisma.client

export interface IClientAttributes {
    id: number;
    firstName?: string;
    lastName?: string;
    birthday?: string;
    phoneNumber?: string;
    email?: string;
    image_3d?: boolean;
    document?: boolean;
    anamnesis?: string;
    description?: string;
    status?: LoyaltyLevel | null;
    image?: string;
}

export interface GetClientsParams {
    _sortBy?: 'firstName' | 'createdAt';
    _order?: 'asc' | 'desc';
    _q?: string,
    _status?: LoyaltyLevel
}


export const createClient = async (data: TClient) => {
    console.log("data: ", data);

    let status = '';

    if ('status' in data) {
        status = data.status as LoyaltyLevel;
        delete data.status;
    }

    if (data.image_3d) {
        data.image_3d = Boolean(data.image_3d)
    }

    if (data.document) {
        data.document = Boolean(data.document)
    }

    const newClient = await Client.create({
        data: {
            ...data
        }
    });

    await createClientStatus(status as LoyaltyLevel, newClient)

    return newClient;
};

export const getAllClients = async (params: GetClientsParams) => {

    const { _sortBy = 'createdAt', _order = 'desc', _q, _status } = params;

    const whereClause = {
        ...(!!_q && {
            firstName: {
                contains: _q,
            },
        }),
        ...(!!_status && {
            statuses: {
                some: {
                    loyaltyLevel: _status.toUpperCase() as LoyaltyLevel,
                },
            },
        }),
    }

    const clients = await Client.findMany({
        where: whereClause,
        orderBy: {
            [_sortBy]: _order,
        },
        include: {
            statuses: {
                select: {
                    loyaltyLevel: true,
                    notes: true,
                },
            },
            visitHistory: true,
        },
    });

    return clients?.map(({ statuses, ...rest }) => ({
        ...rest,
        status: statuses[0]?.loyaltyLevel || null,
    }));
};

export const getClientById = async (id: number) => {
    const client = await Client.findUnique({
        where: { id },
        include: {
            statuses: {
                select: {
                    loyaltyLevel: true,
                    notes: true,
                },
            },
            appoinments: {
                select: {
                    id: true,
                    note: true,
                    image: true,
                    createdAt: true,
                    procedure: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
            visitHistory: true,
        },
    });

    if (!client) return null;

    const { statuses, ...rest } = client;

    return {
        ...rest,
        status: statuses[0]?.loyaltyLevel || null,
    };
};

export const updateClient = async (id: number, data: any) => {
    return Client.update({
        where: { id },
        data,
    });
};

export const deleteClient = async (id: number) => {
    return Client.delete({
        where: { id },
    });
};

export const findClientByEmailOrPhone = async (email: string, phoneNumber: string) => {
    return Client.findFirst({
        where: {
            OR: [
                { email },
                { phoneNumber },
            ],
        },
    });
};





