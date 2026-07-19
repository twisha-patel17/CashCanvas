import express from "express";

const router = express.Router();

import { getBudget, getBudgetHistory, getBudgetInsights } from "../controllers/budgetController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getBudget);
router.get("/history", authMiddleware, getBudgetHistory);
router.get("/insights", authMiddleware, getBudgetInsights);

export default router;