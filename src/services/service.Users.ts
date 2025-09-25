import { IUserAttributes } from '../models/user/model/user.types';
import prisma from '../prisma-client'
import { UserRole } from '../../generated/prisma';

const User = prisma.user
const Session = prisma.session

export const getAllUsers = async () => await User.findMany({
    select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        isActive: true,
        role: true,
    },
});

export const getUserById = async (id: number) => {
    const user = await User.findUnique({
        where: { id },
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            isActive: true,
            role: true,
        },
    });

    if (!user) return null;
    return user;
};
export const createUser = async (userData: Omit<IUserAttributes, 'id'>) => {
    return await User.create({
        data: {
            ...userData,
            role: userData?.role as UserRole || UserRole.MANAGER,
        },
    });
};

export const updateUser = async (id: number, userData: Pick<IUserAttributes, 'email' | 'firstName' | 'lastName' | 'role'>) => {

    const updatedUser = await User.update({
        where: { id },
        data: {
            ...userData,
            role: userData?.role as UserRole || UserRole.MANAGER,
        },
    });

    return updatedUser;
};
export const deleteUserById = async (id: number) => {
    const user = await User.findUnique({
        where: { id },
    });

    if (!user) return null;

    await prisma.user.delete({ where: { id } });
    return user;
};
export const getUserByEmail = async (email: string) => await User.findUnique({ where: { email } });

export const getUserBySessionToken = async (refreshToken: string) => {
    const session = await Session.findUnique({
        where: { refreshToken },
        include: { user: true },
    });

    if (!session) return null;

    return session;
};