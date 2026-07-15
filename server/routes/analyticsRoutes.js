import express from "express";

const router = express.Router();

import { getMonthlyExpenses, getExpenseDistribution, getIncomeVsExpense, getTopSpendingCategories } from "../controllers/analyticsController";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/monthly-expenses", authMiddleware, getMonthlyExpenses);
router.get("/expense-distribution", authMiddleware, getExpenseDistribution);
router.get("/income-vs-expense", authMiddleware, getIncomeVsExpense);
router.get("/top-spending-categories", authMiddleware, getTopSpendingCategories);

export default router;