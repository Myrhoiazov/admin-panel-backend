import { ExpenseCategory, PaymentMethod, TransactionType, Transaction as TTransaction } from '../../generated/prisma';

import prisma from '../prisma-client'
import dayjs from 'dayjs';

const Transaction = prisma.transaction


export interface ITransactionsAttributes {
    id?: number;
    type?: string;
    amount?: string;
    category?: string;
    description?: string;
}

export enum Month {
    ALL = 'all',
    JANUARY = 'january',
    FEBRUARY = 'february',
    MARCH = 'march',
    APRIL = 'april',
    MAY = 'may',
    JUNE = 'june',
    JULY = 'july',
    AUGUST = 'august',
    SEPTEMBER = 'september',
    OCTOBER = 'october',
    NOVEMBER = 'november',
    DECEMBER = 'december',
}
export interface GetTransactionsParams {
    _sortBy?: 'category' | 'createdAt';
    _order?: 'asc' | 'desc';
    _month?: Month;
    _year?: string | number;
    _q?: string,
    _type?: TransactionType,
    month?: number;
    year?: number;
}

export const getAllTransactions = async (params: GetTransactionsParams) => {
    let { _sortBy = 'createdAt', _q, _type, _month = Month.ALL, _year = dayjs().year() } = params;

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

    const whereClause: any = {
        ...(matchingCategories?.length && {
            category: {
                in: matchingCategories,
            },
        }),
        ...(!!_type && {
            type: _type.toLocaleLowerCase() === 'приход' ? TransactionType.INCOME : TransactionType.EXPENSE,
        }),
    }

    if (_month !== Month.ALL && _year) {
        const monthIndex = Object.values(Month).indexOf(_month) - 1;
        if (monthIndex >= 0) {
            const startDate = dayjs().year(Number(_year)).month(monthIndex).startOf('month').toDate();
            const endDate = dayjs(startDate).endOf('month').toDate();

            whereClause.date = {
                gte: startDate,
                lte: endDate,
            };
        }
    }

    console.log("whereClause: ", whereClause);

    const transactions = await Transaction.findMany({
        where: whereClause,
        orderBy: {
            [_sortBy]: order,
        },
    })
    // console.log("transactions: ", transactions);

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
    const { _type, _month = Month.ALL, _year = dayjs().year(), } = params;

    const whereClause: any = {
        ...(!!_type && {
            type: _type.toLowerCase() === 'приход' ? 'INCOME' : 'EXPENSE',
        }),
    };

    if (_month !== Month.ALL && _year) {
        const monthIndex = Object.values(Month).indexOf(_month) - 1;
        if (monthIndex >= 0) {
            const startDate = dayjs().year(Number(_year)).month(monthIndex).startOf('month').toDate();
            const endDate = dayjs(startDate).endOf('month').toDate();

            whereClause.date = {
                gte: startDate,
                lte: endDate,
            };
        }
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
