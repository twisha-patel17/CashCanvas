import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import budgetRoutes from "./routes/budgetRoutes.js";


const app = express();

connectDB();
 
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            process.env.FRONTEND_URL,
        ],
        credentials: true,
    })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/budget", budgetRoutes);

app.get("/", (req, res) => {
    res.send("CashCanvas API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});