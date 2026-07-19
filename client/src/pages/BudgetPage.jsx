import { useEffect, useState } from "react";

import { BudgetSummaryCards } from "../components/budget/BudgetSummaryCards";
import { BudgetProgress } from "../components/budget/BudgetProgress";
import { BudgetStatus } from "../components/budget/BudgetStatus";
import { CategoryBudget } from "../components/budget/CategoryBudget";
import { MonthlyBudgetHistory } from "../components/budget/MonthlyBudgetHistory";
import { TopBudgetCategories } from "../components/budget/TopBudgetCategories";

import {

    getBudget,
    getBudgetHistory,
    getBudgetInsights,

} from "../api/budgetApi";


export const BudgetPage = () => {

    const currentDate = new Date();


    const [selectedMonth, setSelectedMonth] = useState(

        currentDate.getMonth() + 1

    );

    const [selectedYear, setSelectedYear] = useState(

        currentDate.getFullYear()

    );


    const [budget, setBudget] = useState({});

    const [history, setHistory] = useState([]);

    const [budgetInsights, setBudgetInsights] = useState({

        categoryBudgets: [],

        topCategories: [],

    });


    useEffect(() => {

        const fetchBudgetData = async () => {

            try {

                const budgetData = await getBudget(

                    selectedMonth,

                    selectedYear

                );


                const historyData = await getBudgetHistory();


                const insightsData = await getBudgetInsights(

                    selectedMonth,

                    selectedYear

                );


                setBudget(
                    budgetData
                );


                setHistory(
                    historyData.history
                );


                setBudgetInsights(
                    insightsData
                );

            }

            catch (error) {

                console.error(error);

            }

        };


        fetchBudgetData();

    }, [selectedMonth, selectedYear]);


    return (

        <section
            className="
            min-h-screen
            bg-[#F7F5EF]
            p-8
            "
        >

            {/* Heading */}

            <div
                className="
                mb-8
                flex
                items-center
                justify-between
                "
            >

                <h1
                    className="
                    text-3xl
                    font-bold
                    text-[#1C2321]
                    "
                >
                    Budget Overview
                </h1>


                <div
                    className="
                    flex
                    gap-4
                    "
                >

                    {/* Month */}

                    <select

                        value={selectedMonth}

                        onChange={(e) =>

                            setSelectedMonth(

                                Number(e.target.value)

                            )

                        }

                        className="
                        rounded-xl
                        border
                        border-[#DCD6C7]
                        bg-white
                        px-4
                        py-2
                        outline-none
                        "
                    >

                        {

                            Array.from(

                                { length: 12 },

                                (_, index) => (

                                    <option

                                        key={index + 1}

                                        value={index + 1}

                                    >

                                        {

                                            new Date(

                                                0,

                                                index

                                            ).toLocaleString(

                                                "default",

                                                {

                                                    month: "long",

                                                }

                                            )

                                        }

                                    </option>

                                )

                            )

                        }

                    </select>



                    {/* Year */}

                    <select

                        value={selectedYear}

                        onChange={(e) =>

                            setSelectedYear(

                                Number(e.target.value)

                            )

                        }

                        className="
                        rounded-xl
                        border
                        border-[#DCD6C7]
                        bg-white
                        px-4
                        py-2
                        outline-none
                        "
                    >

                        {

                            Array.from(

                                { length: 6 },

                                (_, index) => (

                                    <option

                                        key={2025 + index}

                                        value={2025 + index}

                                    >

                                        {2025 + index}

                                    </option>

                                )

                            )

                        }

                    </select>

                </div>

            </div>


            {/* Summary Cards */}

            <BudgetSummaryCards

                totalBudget={
                    budget.totalBudget || 0
                }

                remainingBudget={
                    budget.remainingBudget || 0
                }

            />


            {/* Budget Progress */}

            <div className="mt-8">

                <BudgetProgress

                    totalBudget={
                        budget.totalBudget || 0
                    }

                    totalExpense={
                        budget.totalExpense || 0
                    }

                    budgetUsedPercentage={
                        budget.budgetUsedPercentage || 0
                    }

                />

            </div>


            {/* Category + History */}

            <div
                className="
                mt-8
                grid
                grid-cols-1
                gap-8
                lg:grid-cols-2
                "
            >

                <CategoryBudget

                    categoryBudgets={

                        budgetInsights
                            .categoryBudgets

                    }

                />


                <MonthlyBudgetHistory

                    history={history}

                />

            </div>


            {/* Top Categories + Status */}

            <div
                className="
                mt-8
                grid
                grid-cols-1
                gap-8
                lg:grid-cols-2
                "
            >

                <TopBudgetCategories

                    topCategories={

                        budgetInsights
                            .topCategories

                    }

                />


                <BudgetStatus

                    budgetStatus={
                        budget.budgetStatus
                    }

                    budgetUsedPercentage={
                        budget.budgetUsedPercentage
                    }

                    remainingBudget={
                        budget.remainingBudget
                    }

                />

            </div>

        </section>

    );

};