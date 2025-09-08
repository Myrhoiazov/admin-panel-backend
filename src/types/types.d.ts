import { User } from '../../generated/prisma';

declare global {
    namespace Express {
        interface Request {
            user?: User;  // или более точный тип, если есть
            token?: string;
        }
    }
}
