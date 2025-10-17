import express from "express";
import { asyncHandler } from "../middlewares/middleware.Auth"
import { createTransactionController, deleteTransactionByIdController, fetchAllTransactionsController, getTransactionSummaryController } from "../controllers/controller.Transactions";

const router = express.Router();

router.get("/", asyncHandler(fetchAllTransactionsController));
router.get('/summary', asyncHandler(getTransactionSummaryController));
router.post("/", asyncHandler(createTransactionController));
router.delete("/:id", asyncHandler(deleteTransactionByIdController));

export default router