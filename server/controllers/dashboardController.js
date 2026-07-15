import Transaction from "../models/Transaction.js";
import Category from "../models/Category.js";

export const getDashboard = async (req, res) => {
    try {
        
      const [
    incomes,
    expenses,
    categories,
    recentTransactions
] = await Promise.all([

    Transaction.find({
        user: req.user.id,
        type:"income"
    }),

    Transaction.find({
        user: req.user.id,
        type:"expense"
    }),

    Category.find({
        user: req.user.id
    }),

    Transaction.find({
        user: req.user.id
    })
    .populate("category")
    .sort({createdAt:-1})
    .limit(5)

]);

       const totalIncome = incomes.reduce((acc, curr) => acc + curr.amount, 0);
       const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
       const totalBudget = categories.reduce((acc, curr) => acc + curr.monthlyBudget, 0);
       const balance = totalIncome - totalExpense;
       const budgetLeft = totalBudget - totalExpense;

        res.status(200).json({

    success:true,

    message:"Dashboard fetched successfully.",

    totalIncome,

    totalExpense,

    totalBudget,

    balance,

    budgetLeft,

    recentTransactions

});
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        })
    }
}