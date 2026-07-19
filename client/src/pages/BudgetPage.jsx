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

    const [budget, setBudget] = useState({});

    const [history, setHistory] = useState([]);

    const [budgetInsights, setBudgetInsights] = useState({

        categoryBudgets: [],

        topCategories: [],

    });


    useEffect(() => {

        const fetchBudgetData = async () => {

            try {

                const budgetData =
                    await getBudget();



                const historyData =
                    await getBudgetHistory();



                const insightsData =
                    await getBudgetInsights();

                    console.log(budgetData);

                    console.log(historyData);

                    console.log(insightsData);

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

    }, []);



    return (

        <section
            className="
            min-h-screen
            bg-[#F7F5EF]
            p-8
            "
        >

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