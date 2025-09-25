import { Request, Response } from 'express';
import { get } from "lodash";
import { IUserAttributes } from 'models/user/model/user.types';
import { updateUser } from '../services/service.Users';

type ProfileResponse = Omit<IUserAttributes, 'password' | 'salt'> & { token: string };

export const getProfile = async (req: Request, res: Response) => {
    const currentUser = get(req, "user", null);

    if (!currentUser) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = get(req, "token", null);

    const { id, firstName, lastName, email, role, isActive, lastLogin } = currentUser;

    const data: ProfileResponse = {
        id,
        firstName,
        lastName,
        email,
        role,
        isActive,
        lastLogin,
        token,
    };

    return res.json(data);
}

export const updateProfileController = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const { firstName, lastName, email, role } = req.body;

    if (!userId || !firstName || !email) {
        return res.status(400).json({ message: 'User ID, name, and email are required' });
    }

    try {
        const updatedUser = await updateUser(userId, { firstName, email, role, lastName });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}