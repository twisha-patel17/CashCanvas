import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number, required: true, min: [1, "Amount must be greater than 0"],
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true
    },
    type: {
        type: String, required: true, enum: {
        values: ["expense", "income"],
        message: "Invalid transaction type.",
    }, trim: true
    },
    date: {
        type: Date, default: Date.now
    },
    paymentMethod: {
        type: String, required: true, trim: true, enum: {
        values: [
            "UPI",
            "Cash",
            "Credit Card",
            "Debit Card",
            "Bank Transfer",
        ],
        message: "Invalid payment method.",
    },
    },
    description: {
        type: String, trim: true
    },
    status: {
        type: String, default: "cleared", trim: true, enum: {
        values: ["pending", "cleared", "failed"],
        message: "Invalid trasaction type."
    },
    },
    receipt: {
        type: String, trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
    },
},{
        timestamps: true
    }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;