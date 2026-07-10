import express from "express";

const router = express.Router();

import { registerUser } from "../controllers/authController.js";
import { loginUser } from "../controllers/authController.js";
import { getUserProfile } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", authMiddleware, getUserProfile);

export default router;