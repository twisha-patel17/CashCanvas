import express from "express";

const router = express.Router();

import { getDashboard } from "../controllers/dashboardController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getDashboard);

export default router;