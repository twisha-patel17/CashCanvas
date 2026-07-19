import Transaction from "../models/Transaction.js";
import Category from "../models/Category.js";

export const getBudget = async (req, res) => {

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

            categories,

            expenses

        ] = await Promise.all([

            Category.find({

                user: req.user.id,

                type: "expense",

            }),

            Transaction.find({

                user: req.user.id,

                type: "expense",

                date: {

                    $gte: startOfMonth,

                    $lte: endOfMonth,

                },

            }),

        ]);


        const totalBudget = categories.reduce(

            (acc, curr) =>

                acc + curr.monthlyBudget,

            0

        );


        const totalExpense = expenses.reduce(

            (acc, curr) =>

                acc + curr.amount,

            0

        );


        const remainingBudget =

            totalBudget - totalExpense;


        const budgetUsedPercentage =

            totalBudget === 0

                ? 0

                : Math.round(

                    (totalExpense / totalBudget) * 100

                );


        const exceededAmount =

            remainingBudget < 0

                ? Math.abs(remainingBudget)

                : 0;


        const budgetStatus =

            budgetUsedPercentage < 70

                ? "Safe"

                : budgetUsedPercentage <= 100

                    ? "Warning"

                    : "Exceeded";


        res.status(200).json({

            success: true,

            message:
                "Budget fetched successfully.",

            totalBudget,

            totalExpense,

            remainingBudget,

            exceededAmount,

            budgetUsedPercentage,

            budgetStatus,

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

export const getBudgetHistory = async (req, res) => {

    try {

        const history = [];

        const currentDate = new Date();


        for (let i = 5; i >= 0; i--) {

            const targetDate = new Date(

                currentDate.getFullYear(),

                currentDate.getMonth() - i,

                1

            );


            const startOfMonth = new Date(

                targetDate.getFullYear(),

                targetDate.getMonth(),

                1

            );


            const endOfMonth = new Date(

                targetDate.getFullYear(),

                targetDate.getMonth() + 1,

                0,

                23,

                59,

                59

            );


            const [

                categories,

                expenses,

            ] = await Promise.all([

                Category.find({

                    user: req.user.id,

                    type: "expense",

                }),


                Transaction.find({

                    user: req.user.id,

                    type: "expense",

                    date: {

                        $gte: startOfMonth,

                        $lte: endOfMonth,

                    },

                }),

            ]);


            const budget = categories.reduce(

                (acc, curr) =>

                    acc + curr.monthlyBudget,

                0

            );


            const expense = expenses.reduce(

                (acc, curr) =>

                    acc + curr.amount,

                0

            );


            const remaining =

                budget - expense;


            if (

                expense > 0 ||

                targetDate.getMonth() ===

                currentDate.getMonth()

            ) {

                history.push({

                    month: targetDate.toLocaleString(

                        "default",

                        {

                            month: "short",

                        }

                    ),

                    budget,

                    expense,

                    remaining,

                });

            }

        }


        res.status(200).json({

            success: true,

            message:
                "Budget history fetched successfully.",

            history,

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

export const getBudgetInsights = async (req, res) => {

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

            categories,

            expenses,

        ] = await Promise.all([


            Category.find({

                user: req.user.id,

                type: "expense",

            }),


            Transaction.find({

                user: req.user.id,

                type: "expense",

                date: {

                    $gte: startOfMonth,

                    $lte: endOfMonth,

                },

            }).populate("category"),

        ]);


        const categoryBudgets = categories.map(

            (category) => {

                const spent = expenses

                    .filter(

                        (expense) =>

                            expense.category?._id
                                .toString() ===

                            category._id.toString()

                    )

                    .reduce(

                        (acc, curr) =>

                            acc + curr.amount,

                        0

                    );


                const percentage =

                    category.monthlyBudget === 0

                        ? 0

                        : Math.round(

                            (spent /

                                category.monthlyBudget) * 100

                        );


                const exceededAmount =

                    Math.max(

                        spent -

                        category.monthlyBudget,

                        0

                    );


                const isExceeded =

                    spent >

                    category.monthlyBudget;


                return {

                    category:
                        category.name,

                    emoji:
                        category.emoji,

                    color:
                        category.color,

                    budget:
                        category.monthlyBudget,

                    spent,

                    percentage,

                    exceededAmount,

                    isExceeded,

                };

            }

        );


        const categoryTotals = {};


        expenses.forEach((expense) => {

            const categoryName =
                expense.category?.name;


            if (!categoryName) return;


            categoryTotals[categoryName] =

                (categoryTotals[categoryName] || 0)

                +

                expense.amount;

        });


        const topCategories = Object.entries(

            categoryTotals

        )

            .map(

                ([name, amount]) => {

                    const category = categories.find(

                        (cat) =>

                            cat.name === name

                    );


                    return {

                        category: name,

                        amount,

                        emoji:
                            category?.emoji,

                        color:
                            category?.color,

                    };

                }

            )

            .sort(

                (a, b) =>

                    b.amount - a.amount

            )

            .slice(0, 5);



        res.status(200).json({

            success: true,

            message:
                "Budget insights fetched successfully.",

            categoryBudgets,

            topCategories,

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