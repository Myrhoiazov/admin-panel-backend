import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';
import prisma from '../prisma-client'
import ApiError from '../helpers/ApiError';
import { getUserById } from './service.Users';

const Session = prisma.session

export interface JwtUserPayload {
    id: string;
    email: string;
    isActive: boolean;
}

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export const generateTokens = (payload: JwtUserPayload): Tokens => {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, { expiresIn: '15m' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, { expiresIn: '15d' });
    return {
        accessToken,
        refreshToken
    };
};

export const validateAccessToken = (token: string): JwtUserPayload | null => {
    try {
        return jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as JwtUserPayload;
    } catch (error) {
        console.log("error: ", error);
        return null;
    }
};

export const validateRefreshToken = (token: string): JwtUserPayload | null => {
    try {

        const data = jwt.verify(token, process.env.JWT_REFRESH_SECRET) as JwtUserPayload;
        return data;
    } catch (error) {
        console.log("error: ", error);
        return null;
    }
};

export const saveToken = async (userId: number, refreshToken: string, ipAddress: string, userAgent: string | null) => {
    const existingSession = await Session.findUnique({
        where: { refreshToken: refreshToken },
        include: { user: true },
    });

    if (existingSession) {
        await Session.update({
            where: { refreshToken },
            data: { refreshToken },
        });
    }
    return Session.create({
        data: {
            userId,
            refreshToken,
            ipAddress,
            userAgent,
            expiresAt: dayjs().add(7, 'days').toDate(),
        },
    });
}

export const removeToken = async (refreshToken: string) => {
    const tokenData = await Session.delete({ where: { refreshToken } })
    return tokenData;
}

export const findToken = async (refreshToken: string) => {
    const tokenData = await Session.findUnique({ where: { refreshToken } })
    return tokenData;
}

export const refreshToken = async (token: string) => {

    if (!token) {
        throw ApiError.UnauthorizedError()
    }

    const userData = validateRefreshToken(token)
    const findDataSession = await findToken(token)

    if (!userData || !findDataSession) {
        throw ApiError.UnauthorizedError()
    }

    const user = await getUserById(Number(userData.id))

    const newTokens = generateTokens({
        id: String(user.id),
        email: user.email,
        isActive: user.isActive
    });

    return { newTokens, user }

}