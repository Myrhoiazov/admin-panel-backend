import { Request, Response } from "express";
import { createTransaction, getAllTransactions, getTransactionsSummary } from "../services/service.Transaction";
import { Transaction } from "../../generated/prisma";
import { deleteTransactionById } from "../services/service.Transaction";

export const fetchAllTransactionsController = async (req: Request, res: Response) => {

    try {
        const transactions = await getAllTransactions(req.query);

        return res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createTransactionController = async (req: Request<{}, {}, Transaction>, res: Response) => {
    const data = req.body

    try {
        const transactions = await createTransaction(data)
        return res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getTransactionSummaryController = async (req: Request, res: Response) => {
    try {
        const summary = await getTransactionsSummary(req.query);
        return res.status(200).json(summary);
    } catch (error) {
        console.error('Error fetching transaction summary:', error);
        res.status(500).json({ error: 'Failed to fetch summary' });
    }
};

export const deleteTransactionByIdController = async (req: Request, res: Response) => {
    const transactionId = Number(req.params.id);

    try {
        await deleteTransactionById(transactionId);
        return res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        console.error('Error deleting transaction:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

