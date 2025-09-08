import { LoyaltyLevel } from '../../generated/prisma';
import prisma from '../prisma-client'
import { IClientAttributes } from './service.Clients';

const ClientStatus = prisma.clientStatus

export const createClientStatus = async (status: LoyaltyLevel, client: IClientAttributes) => {

    if (!Object.values(LoyaltyLevel).includes(status as LoyaltyLevel)) {
        throw new Error(`Invalid loyalty level: ${status}`);
    }

    return await ClientStatus.create({
        data: {
            clientId: client.id,
            loyaltyLevel: status,
        }
    });
};