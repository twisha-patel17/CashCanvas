import { useEffect, useState } from "react";
import { AnalyticsTopbar } from "../components/analytics/AnalyticsTopbar";
import { MonthlyExpenseChart } from "../components/analytics/MonthlyExpenseChart";
import { IncomeExpenseChart } from "../components/analytics/IncomeExpenseChart";
import { ExpenseDistributionChart } from "../components/analytics/ExpenseDistributionChart";
import { TopSpendingCategories } from "../components/analytics/TopSpendingCategories";

import {

    getMonthlyExpenses,
    getIncomeVsExpense,
    getExpenseDistribution,
    getTopSpendingCategories,

} from "../api/analyticsApi";


export const AnalyticsPage = () => {

    const [monthlyExpenses, setMonthlyExpenses] = useState([]);

    const [incomeVsExpense, setIncomeVsExpense] = useState([]);

    const [expenseDistribution, setExpenseDistribution] = useState([]);

    console.log(
    expenseDistribution
);

    const [topCategories, setTopCategories] = useState([]);


    useEffect(() => {

        const fetchAnalytics = async () => {

            try {

                const token = localStorage.getItem("token");


                const monthlyData =
                    await getMonthlyExpenses(token);


                const incomeData =
                    await getIncomeVsExpense(token);


                const expenseData =
                    await getExpenseDistribution(token);


                const topData =
                    await getTopSpendingCategories(token);



                setMonthlyExpenses(
                    monthlyData.monthlyExpense
                );


                setIncomeVsExpense(
                    incomeData.incomeVsExpense
                );


                setExpenseDistribution(
                    expenseData.expenseDistribution
                );


                setTopCategories(
                    topData.topSpendingCategories
                );


            } catch (error) {

                console.error(error);

            }

        };


        fetchAnalytics();

    }, []);


   return (

<div>

    <AnalyticsTopbar />
 

    <section className="min-h-screen bg-[#F7F5EF] p-8">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">


            {/* Monthly Expenses */}

            <div className="rounded-3xl bg-white p-6 shadow-sm">

                <h2 className="mb-6 text-2xl font-semibold text-[#1C2321]">
                    Monthly Expenses
                </h2>

              <MonthlyExpenseChart
      data={monthlyExpenses}
/>

            </div>



            {/* Income Vs Expense */}

            <div className="rounded-3xl bg-white p-6 shadow-sm">

                <h2 className="mb-6 text-2xl font-semibold text-[#1C2321]">
                    Income Vs Expense
                </h2>

                <IncomeExpenseChart
    data={incomeVsExpense}
/>

            </div>



            {/* Expense Distribution */}

            <div className="rounded-3xl bg-white p-6 shadow-sm">

                <h2 className="mb-6 text-2xl font-semibold text-[#1C2321]">
                    Expense Distribution
                </h2>

                <ExpenseDistributionChart
        data={expenseDistribution}
    />

            </div>



            {/* Top Spending Categories */}

            <div className="rounded-3xl bg-white p-6 shadow-sm">

                <h2 className="mb-6 text-2xl font-semibold text-[#1C2321]">
                    Top Spending Categories
                </h2>

                <TopSpendingCategories
    data={topCategories}
/>

            </div>


        </div>

    </section>


</div>

);
};