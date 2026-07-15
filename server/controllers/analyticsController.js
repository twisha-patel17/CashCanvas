import Transaction from "../models/Transaction.js";

export const getMonthlyExpenses = async (req, res) => {
    try {
        const expense = await Transaction.find({
            user: req.user.id,
            type: "expense",
        });

        const monthlyExpense = expense.reduce((acc, curr) => {
            const month = new Date(curr.date).toLocaleString("default",{month:"short",});
            acc[month] = (acc[month] || 0) + curr.amount;
            return acc;
        }, {});

        const graphData = Object.entries(monthlyExpense).map(([month, amount]) => ({
            month,
            amount,
        }));

        res.status(200).json({
            success: true,
            message: "Monthly expenses fetched successfully.",
            monthlyExpense : graphData
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });
    }
}

export const getExpenseDistribution = async (req, res) => {
    try {
        const expense = await Transaction.find({
            user: req.user.id,
            type: "expense",
        }).populate("category");

        const expenseDistribution = expense.reduce((acc, curr) => {
            const category = curr.category.name;
            acc[category] = (acc[category] || 0) + curr.amount;
            return acc;
        }, {});

        const graphData = Object.entries(expenseDistribution).map(([category, amount]) => ({
            category,
            amount,
        }));

        res.status(200).json({
            success: true,
            message: "Expense distribution fetched successfully.",
            expenseDistribution : graphData
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });
    }
}

export const getIncomeVsExpense = async (req, res) => {
    try {

        const [income, expense] = await Promise.all([

            Transaction.find({
                user: req.user.id,
                type: "income",
            }),

            Transaction.find({
                user: req.user.id,
                type: "expense",
            }),

        ]);

        const totalIncome = income.reduce(
            (acc, curr) => acc + curr.amount,
            0
        );

        const totalExpense = expense.reduce(
            (acc, curr) => acc + curr.amount,
            0
        );

        const graphData = [

            {
                type: "Income",
                amount: totalIncome,
            },

            {
                type: "Expense",
                amount: totalExpense,
            },

        ];

        res.status(200).json({
            success: true,
            message: "Income vs Expense fetched successfully.",
            incomeVsExpense: graphData,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });

    }
};

export const getTopSpendingCategories = async (req, res) => {
    try {
        
        const transactions = await Transaction.find({
            user: req.user.id,
            type: "expense",
        }).populate("category");

        const topCategories = transactions.reduce((acc, curr) => {

    const category = curr.category.name;

    acc[category] = (acc[category] || 0) + curr.amount;

    return acc;

}, {});

      const graphData = Object.entries(topCategories).map(
([category, amount]) => ({

    category,
    amount,

}));

   const sortedCategories = graphData.sort(
(a, b) => b.amount - a.amount
);  

    const topFiveCategories = sortedCategories.slice(0, 5);

    res.status(200).json({
        success: true,
        message: "Top spending categories fetched successfully.",
        topSpendingCategories: topFiveCategories,
    });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });
    }
}