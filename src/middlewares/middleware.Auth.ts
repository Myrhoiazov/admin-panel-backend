import { NextFunction, Request, Response } from "express";
import { get, merge } from "lodash";
import { getUserBySessionToken } from "../services/service.Users";
import { validateAccessToken } from "../services/service.Token";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies[process.env.COOKIE_NAME];

    if (!refreshToken) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const session = await getUserBySessionToken(refreshToken)
        if (!session.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        merge(req, { user: session.user, token: refreshToken });

        return next();
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const asyncHandler = (fn: any) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);


export const isOwner = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ message: "User ID is required" });
    }
    const userId = get(req, "params.id", null);
    const currentUser = get(req, "user", null);

    if (!currentUser || !userId || String(currentUser.id) !== String(userId)) {
        return res.status(403).json({ message: "Forbidden" });
    }

    next();
}

export const isToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization = '' } = req.headers;
        const [bearer, sessionToken] = authorization.split(' ');

        if (bearer !== 'Bearer') {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (!sessionToken) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const user = await validateAccessToken(sessionToken)
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        merge(req, { user, token: sessionToken });
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};