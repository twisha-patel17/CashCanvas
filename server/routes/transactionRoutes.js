import express from "express";

const router = express.Router();

import { createTransaction, getTransactions, deleteTransaction, updateTransaction } from "../controllers/transactionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/", authMiddleware, createTransaction);
router.get("/", authMiddleware, getTransactions);
router.delete("/:id", authMiddleware, deleteTransaction);
router.put("/:id", authMiddleware, updateTransaction);

export default router;