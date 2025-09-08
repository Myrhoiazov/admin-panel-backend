
import { NextFunction, Request, Response } from 'express';
import prisma from '../prisma-client'
import { createUser, getUserByEmail } from '../services/service.Users';
import { authentication, generateSalt } from '../helpers';
import { generateTokens, refreshToken, removeToken, saveToken } from '../services/service.Token';
import ApiError from '../helpers/ApiError';
import { loginType } from '../schemas/schema.auth';

export const registration = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !email || !password) {
        throw ApiError.BadRequest('All fields are required');
    }

    try {
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            throw ApiError.BadRequest('User already exists');
        }

        const salt = generateSalt();
        const hashedPassword = authentication(salt, password);
        const newUser = await createUser({ firstName, lastName, salt, email, password: hashedPassword });

        return res.status(201).json(newUser);
    } catch (error) {
        console.error('Registration error:', error);
        next(error)
    }
}

export const login = async (req: Request<{}, {}, loginType>, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw ApiError.BadRequest('All fields are required');
    }

    try {
        const user = await getUserByEmail(email);
        if (!user) {
            throw ApiError.BadRequest('Invalid email');
        }

        const expectedHash = authentication(user.salt, password);

        if (expectedHash !== user.password) {
            throw ApiError.BadRequest('Invalid email or password 2');
        }

        const { accessToken,
            refreshToken } = generateTokens({
                id: String(user.id),
                email: user.email,
                isActive: user.isActive
            });

        await saveToken(user.id, refreshToken, req.ip, req.headers['user-agent']);

        await prisma.user.update({
            where: { id: user.id },
            data: { isActive: true },
        });

        const userData = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            token: accessToken
        }

        res.cookie(process.env.COOKIE_NAME, refreshToken, {
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(200).json(userData);
    } catch (error) {
        console.error('Login error:', error);
        next(error)
    }
}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies[process.env.COOKIE_NAME];

    try {
        await removeToken(refreshToken);
        res.clearCookie(process.env.COOKIE_NAME);
        return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        next(error)
    }
}

export const refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies[process.env.COOKIE_NAME];
        console.log("token: ", token);

        const { newTokens, user } = await refreshToken(token);
        await saveToken(user.id, newTokens.refreshToken, req.ip, req.headers['user-agent']);

        res.cookie(process.env.COOKIE_NAME, newTokens.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000
        })

        const userData = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            token: newTokens.accessToken
        }

        return res.json(userData);
    } catch (error) {
        next(error)
    }
}