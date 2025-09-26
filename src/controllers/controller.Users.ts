import { NextFunction, Request, Response } from 'express';
import { createUser, deleteUserById, getAllUsers, getUserByEmail, getUserById, updateUser } from '../services/service.Users';
import ApiError from '../helpers/ApiError';

import { authentication, generateSalt } from '../helpers';

/**
 * Controller to fetch all users.
 * @param req - Express request object
 * @param res - Express response object
 * @returns JSON response with users or error message
 */
export const gettAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
/**
 * Controller to delete a user by ID.
 * @param req - Express request object
 * @param res - Express response object
 * @returns JSON response with status or error message
 */
export const deleteUserByIdController = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    try {
        const deleteUser = await deleteUserById(userId);
        if (!deleteUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(deleteUser);
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateUserController = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const { firstName, role, email } = req.body;


    if (!userId || !firstName || !email) {
        return res.status(400).json({ message: 'User ID, name, and email are required' });
    }

    try {
        const updatedUser = await updateUser(userId, { firstName, email, role });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getUserByIdController = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    try {
        const User = await getUserById(userId);
        if (!User) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(User);
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

}

export const createUserController = async (req: Request, res: Response) => {
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
        // next(error)
    }
}