import { Procedure as TProcedure } from '../../generated/prisma';
import prisma from '../prisma-client'
// import { ProcedureDTO } from '../types/ProcedureDTO';

const Procedure = prisma.procedure

type FullProcedure = TProcedure & {
    injectionZones?: string[];
    rehabilitations?: string[];
    contraindications?: string[];
    preparations?: string[];
    results?: string[];
    price?: [string, string][];
};

export const createProcedure = async (data: FullProcedure) => {

    const formattedData = {
        name: data.name,
        description: data.description,
        image: data.image,
        injectionZones: {
            create: data.injectionZones?.map((z: string) => ({ text: z }))
        },
        preparations: {
            create: data.preparations?.map((p: string) => ({ text: p }))
        },
        rehabilitations: {
            create: data.rehabilitations?.map((r: string) => ({ text: r }))
        },
        contraindications: {
            create: data.contraindications?.map((c: string) => ({ text: c }))
        },
        results: {
            create: data.results?.map((r: string) => ({ text: r }))
        },
        prices: {
            create: data.price?.map(([zone, price]: [string, string]) => ({
                zone,
                price: parseFloat(price)
            }))
        }
    };

    return await Procedure.create({
        data: formattedData
    });
};

export const getAllProcedures = async () => {
    const procedures = await Procedure.findMany({
        include: {
            injectionZones: true,
            preparations: true,
            rehabilitations: true,
            contraindications: true,
            results: true,
            prices: true,
        },
    });

    const frontendProcedures = procedures.map((p) => ({
        id: p.id.toString(),
        name: p.name ?? '',
        description: p.description ?? '',
        image: p.image ?? '',
        createdAt: p.createdAt.toISOString(),
        blocks: {
            injectionZones: {
                type: 'list',
                items: p.injectionZones.map(z => z.text),
            },
            rehabilitations: {
                type: 'list',
                items: p.rehabilitations.map(r => r.text),
            },
            contraindications: {
                type: 'list',
                items: p.contraindications.map(c => c.text),
            },
            results: {
                type: 'list',
                items: p.results.map(r => r.text),
            },
            prices: {
                type: 'price-table',
                items: p.prices.map(pr => ({
                    zone: pr.zone,
                    price: pr.price.toString(),
                })),
            },
        },
    }));

    return frontendProcedures;

};

export const getProcedureById = async (id: number) => {
    const procedure = await Procedure.findUnique({
        where: { id },
        include: {
            injectionZones: true,
            preparations: true,
            rehabilitations: true,
            contraindications: true,
            results: true,
            prices: true,
        },
    });

    if (!procedure) return null;

    const dto = {
        id: procedure.id,
        name: procedure.name,
        description: procedure.description,
        image: procedure.image,
        blocks: {
            injectionZones: {
                type: 'injectionZones',
                blocks: procedure.injectionZones.map(z => z.text),
            },
            preparations: {
                type: 'preparations',
                blocks: procedure.preparations.map(p => p.text),
            },
            rehabilitations: {
                type: 'rehabilitations',
                blocks: procedure.rehabilitations.map(r => r.text),
            },
            contraindications: {
                type: 'contraindications',
                blocks: procedure.contraindications.map(c => c.text),
            },
            results: {
                type: 'results',
                blocks: procedure.results.map(r => r.text),
            },
            prices: {
                type: 'price',
                blocks: procedure.prices.map(pr => ({
                    zone: pr.zone,
                    price: pr.price.toString(),
                })),
            },
        },
        createdAt: procedure.createdAt.toISOString(),
        updatedAt: procedure.updatedAt.toISOString(),
    };

    return dto;
};

export const updateProcedure = async (id: number, data: any) => {
    return Procedure.update({
        where: { id },
        data,
    });
};

export const deleteProcedure = async (id: number) => {
    return Procedure.delete({
        where: { id },
    });
};
