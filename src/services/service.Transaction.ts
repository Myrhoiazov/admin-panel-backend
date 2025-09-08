import { ExpenseCategory, PaymentMethod, TransactionType, Transaction as TTransaction } from '../../generated/prisma';

import prisma from '../prisma-client'

const Transaction = prisma.transaction

export interface ITransactionsAttributes {
    id?: number;
    type?: string;
    amount?: string;
    category?: string;
    description?: string;
}

export interface GetTransactionsParams {
    _sortBy?: 'category' | 'createdAt';
    _order?: 'asc' | 'desc';
    _q?: string,
    _type?: TransactionType,
    month?: number;
    year?: number;
}

export const getAllTransactions = async (params: GetTransactionsParams) => {
    let { _sortBy = 'createdAt', _q, _type } = params;

    const order = (params._order?.toLowerCase() === 'asc' || params._order?.toLowerCase() === 'desc')
        ? params._order.toLowerCase()
        : 'desc';

    let matchingCategories: ExpenseCategory[] | undefined = undefined;
    if (_q) {
        const normalizedQ = _q.toLowerCase();
        matchingCategories = Object.values(ExpenseCategory).filter((category) =>
            category.toLowerCase().includes(normalizedQ)
        ) as ExpenseCategory[];
    }

    const whereClause = {
        ...(matchingCategories?.length && {
            category: {
                in: matchingCategories,
            },
        }),
        ...(!!_type && {
            type: _type.toLocaleLowerCase() === 'приход' ? TransactionType.INCOME : TransactionType.EXPENSE,
        }),
    }

    const transactions = await Transaction.findMany({
        where: whereClause,
        orderBy: {
            [_sortBy]: order,
        },
    })

    return transactions;
};

export const createTransaction = async (data: TTransaction) => {

    return Transaction.create({
        data: {
            ...data,
            amount: typeof data.amount === 'string' ? parseFloat(data.amount) : data.amount,
            date: data.date ? new Date(data.date) : new Date(),
            paymentMethod: PaymentMethod[data?.paymentMethod.toLocaleUpperCase() as keyof typeof PaymentMethod],
        },
    });
};

export const getTransactionsSummary = async (params: GetTransactionsParams) => {
    const { _q, _type, month, year } = params;

    const whereClause: any = {
        ...(!!_q && {
            category: {
                contains: _q,
            },
        }),
        ...(!!_type && {
            type: _type.toLowerCase() === 'приход' ? 'INCOME' : 'EXPENSE',
        }),
    };

    if (month && year) {
        whereClause.date = {
            gte: new Date(year, month - 1, 1),
            lte: new Date(year, month, 0, 23, 59, 59),
        };
    }

    const transactions = await Transaction.findMany({ where: whereClause });

    const income = transactions
        .filter((t) => t.type === 'INCOME')
        .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
        .filter((t) => t.type === 'EXPENSE')
        .reduce((sum, t) => sum + t.amount, 0);

    return {
        income,
        expense,
        balance: income - expense,
    };
};
