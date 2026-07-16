import Transaction from "../models/Transaction.js";

export const getMonthlyExpenses = async (req, res) => {
    try {

        const currentYear = new Date().getFullYear();

        const expenses = await Transaction.find({
            user: req.user.id,
            type: "expense",
        });

        const monthlyExpense = expenses.reduce((acc, curr) => {

            const date = new Date(curr.date);

            if (date.getFullYear() !== currentYear) {
                return acc;
            }

            const month = date.toLocaleString("default", {
                month: "short",
            });

            acc[month] = (acc[month] || 0) + curr.amount;

            return acc;

        }, {});

        const graphData = Object.entries(monthlyExpense).map(
            ([month, amount]) => ({
                month,
                amount,
            })
        );

        res.status(200).json({
            success: true,
            message: "Monthly expenses fetched successfully.",
            monthlyExpense: graphData,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });

    }
};

export const getExpenseDistribution = async (req, res) => {
    try {

        const currentDate = new Date();

        const startOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        );

        const endOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0,
            23,
            59,
            59
        );

        const expense = await Transaction.find({
            user: req.user.id,
            type: "expense",
            date: {
                $gte: startOfMonth,
                $lte: endOfMonth,
            },
        }).populate("category");

        const expenseDistribution = expense.reduce((acc, curr) => {

            const category = curr.category.name;

            acc[category] = (acc[category] || 0) + curr.amount;

            return acc;

        }, {});

        const graphData = Object.entries(expenseDistribution).map(
            ([category, amount]) => ({
                category,
                amount,
            })
        );

        res.status(200).json({
            success: true,
            message: "Expense distribution fetched successfully.",
            expenseDistribution: graphData,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });
    }
};

export const getIncomeVsExpense = async (req, res) => {
    try {

        const currentYear = new Date().getFullYear();

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


        const graphData = {};


        income.forEach((item) => {

            const date = new Date(item.date);

            if (date.getFullYear() !== currentYear) {
                return;
            }

            const month = date.toLocaleString("default", {
                month: "short",
            });

            if (!graphData[month]) {
                graphData[month] = {
                    month,
                    income: 0,
                    expense: 0,
                };
            }

            graphData[month].income += item.amount;

        });


        expense.forEach((item) => {

            const date = new Date(item.date);

            if (date.getFullYear() !== currentYear) {
                return;
            }

            const month = date.toLocaleString("default", {
                month: "short",
            });

            if (!graphData[month]) {
                graphData[month] = {
                    month,
                    income: 0,
                    expense: 0,
                };
            }

            graphData[month].expense += item.amount;

        });


        res.status(200).json({
            success: true,
            message: "Income vs Expense fetched successfully.",
            incomeVsExpense: Object.values(graphData),
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

        const currentDate = new Date();

        const startOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        );

        const endOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0,
            23,
            59,
            59
        );

        const transactions = await Transaction.find({
            user: req.user.id,
            type: "expense",
            date: {
                $gte: startOfMonth,
                $lte: endOfMonth,
            },
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
            })
        );

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
};