import express from "express";

const router = express.Router();

import { createCategory, getCategories, deleteCategory } from "../controllers/categoryController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/", authMiddleware, createCategory);
router.get("/", authMiddleware, getCategories);
router.delete("/:id", authMiddleware, deleteCategory);

export default router;