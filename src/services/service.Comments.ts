import prisma from '../prisma-client'
import { Comment as TComment, User } from '../../generated/prisma';

const Comment = prisma.comment

export type CommentWithAuthor =
    TComment & {
        author?: User | null;
    };

export interface FindCommentsParams {
    entityType: 'client' | 'appointment';
    entityId: number | string;
    expandUser?: boolean;
}


export const findManyComments = async (data: FindCommentsParams): Promise<CommentWithAuthor[]> => {

    const whereClause: Record<string, number> =
        data.entityType === 'client'
            ? { clientId: Number(data.entityId) }
            : { appointmentId: Number(data.entityId) };

    const comments = await Comment.findMany({
        where: whereClause,
        orderBy: { createdAt: 'desc' },
        include: {
            author: data.expandUser
                ? {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                    },
                }
                : false,
        },
    });

    return comments

}


export const createComment = async (data: TComment) => {

    return await Comment.create({
        data: {
            text: data?.text,
            userId: Number(data.userId),
            clientId: data.clientId ? Number(data.clientId) : undefined,
            appointmentId: data.appointmentId ? Number(data.appointmentId) : undefined,
        },
        include: {
            author: true,
            client: true,
            appointment: true,
        },
    });
};




