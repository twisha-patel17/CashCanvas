import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String, required: true, trim: true
    },
    emoji: {
        type: String, required: true, trim: true
    },
    color: {
        type: String, required: true, trim: true
    },
    type: {
        type: String, required: true, enum: ["expense", "income"], trim: true
    },
    monthlyBudget: {
        type: Number, required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
    }
});

const Category = mongoose.model("Category", categorySchema);

export default Category;