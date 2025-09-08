import { UserRole } from "../../../../generated/prisma";

export interface IUserAttributes {
    id: number;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    salt: string;
    role?: UserRole;
    isActive?: boolean;
    lastLogin?: Date;
}