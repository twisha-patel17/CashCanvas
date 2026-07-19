import Transaction from "../models/Transaction.js";
import Category from "../models/Category.js";

export const getDashboard = async (req, res) => {
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

        const [
            incomes,
            expenses,
            categories,
            recentTransactions
        ] = await Promise.all([

            Transaction.find({
                user: req.user.id,
                type: "income",
                date: {
                    $gte: startOfMonth,
                    $lte: endOfMonth
                }
            }),

            Transaction.find({
                user: req.user.id,
                type: "expense",
                date: {
                    $gte: startOfMonth,
                    $lte: endOfMonth
                }
            }),

            Category.find({
                user: req.user.id
            }),

            Transaction.find({
                user: req.user.id
            })
                .populate("category")
                .sort({ createdAt: -1 })
                .limit(5)

        ]);

        const totalIncome = incomes.reduce(
            (acc, curr) => acc + curr.amount,
            0
        );

        const totalExpense = expenses.reduce(
            (acc, curr) => acc + curr.amount,
            0
        );

        // Only expense categories contribute to budgets.
        const expenseCategories = categories.filter(
            (category) => category.type === "expense"
        );

        const totalBudget = expenseCategories.reduce(
            (acc, curr) => acc + curr.monthlyBudget,
            0
        );

        const balance = totalIncome - totalExpense;

        const budgetLeft = totalBudget - totalExpense;

        res.status(200).json({
            success: true,
            message: "Dashboard fetched successfully.",

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
            message: "Something went wrong."
        });
    }
};

export const getWeeklyExpenses = async (req, res) => {
    try {

        const currentDate = new Date();
        const startDate = new Date();

        startDate.setDate(
            currentDate.getDate() - 6
        );

        startDate.setHours(
            0,
            0,
            0,
            0
        );


        const expenses = await Transaction.find({

            user: req.user.id,

            type: "expense",

            date: {

                $gte: startDate,

                $lte: currentDate,

            },

        });

        const weeklyExpenses = [];


        for (let i = 0; i < 7; i++) {

            const date = new Date(startDate);

            date.setDate(
                startDate.getDate() + i
            );


            weeklyExpenses.push({

                date: date.toISOString(),

                amount: 0,

            });

        }

        expenses.forEach((expense) => {

            const expenseDate =
                new Date(expense.date)
                .toDateString();


            const index =
                weeklyExpenses.findIndex(

                    (day) =>

                        new Date(day.date)
                        .toDateString() ===
                        expenseDate

                );


            if (index !== -1) {

                weeklyExpenses[index]
                    .amount += expense.amount;

            }

        });


        res.status(200).json({

            success: true,

            message:
                "Weekly expenses fetched successfully.",

            weeklyExpenses,

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message:
                "Something went wrong.",

        });

    }

};