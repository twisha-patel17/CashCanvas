import express from "express";

const router = express.Router();

import { getDashboard, getWeeklyExpenses } from "../controllers/dashboardController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getDashboard);
router.get("/weekly-expenses", authMiddleware, getWeeklyExpenses);

export default router;