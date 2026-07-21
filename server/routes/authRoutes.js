import express from "express";

const router = express.Router();

import { registerUser } from "../controllers/authController.js";
import { loginUser } from "../controllers/authController.js";
import { getUserProfile } from "../controllers/authController.js";
import { refreshAccessToken } from "../controllers/authController.js";
import { logoutUser } from "../controllers/authController.js";
import { forgotPassword } from "../controllers/authController.js";
import { resetPassword } from "../controllers/authController.js";
import { changePassword } from "../controllers/authController.js";
import { deleteAccount } from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/refresh-token", refreshAccessToken);
router.post("/change-password", authMiddleware, changePassword);
router.post("/logout", logoutUser);
router.get("/profile", authMiddleware, getUserProfile);
router.delete("/delete-account",authMiddleware,deleteAccount);

export default router;