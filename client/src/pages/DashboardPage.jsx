import { useEffect, useState } from "react";

import { getDashboard } from "../api/dashboardApi";
import { getWeeklyExpenses } from "../api/dashboardApi";

import { DashboardTopbar } from "../components/dashboard/DashboardTopbar";
import { ExpenseChart } from "../components/dashboard/ExpenseChart";
import { SummaryCard } from "../components/dashboard/SummaryCard";
import { MonthlyExpenseChart } from "../components/dashboard/MonthlyExpenseChart";
import { BudgetProgress } from "../components/dashboard/BudgetProgess";
import { TopSpendingCategories } from "../components/dashboard/TopSpendingCategories";
import { RecentTransactions } from "../components/dashboard/RecentTransactions";

import {

    FiCreditCard,
    FiTrendingUp,
    FiTrendingDown,
    FiTarget,

} from "react-icons/fi";


export const DashboardPage = () => {

    const [dashboard, setDashboard] = useState({});

    const [weeklyExpenses, setWeeklyExpenses] = useState([]);

    const [loading, setLoading] = useState(true);

    console.log(dashboard);


    useEffect(() => {

        const fetchDashboardData = async () => {

            try {

                const dashboardData =
                    await getDashboard();


                const weeklyData =
                    await getWeeklyExpenses();


                setDashboard(
                    dashboardData
                );


                setWeeklyExpenses(
                    weeklyData
                );


            }

            catch (error) {

                console.log(error);

            }

            finally {

                setLoading(false);

            }

        };


        fetchDashboardData();

    }, []);


    if (loading) {

        return (

            <div className="p-8">

                Loading...

            </div>

        );

    }


    return (

        <>

            <DashboardTopbar />


            {/* Summary Cards */}

            <div className="grid grid-cols-4 gap-4 mt-8">

                <SummaryCard

                    label="BALANCE"

                    value={`₹${dashboard.balance?.toLocaleString()}`}

                    subtitle="Available this month"

                    icon={<FiCreditCard />}

                    valueColor="#1C2321"

                    iconBg="#EDF5F2"

                    iconColor="#2D5A4A"

                />


                <SummaryCard

                    label="INCOME"

                    value={`₹${dashboard.totalIncome?.toLocaleString()}`}

                    subtitle="Current month's income"

                    icon={<FiTrendingUp />}

                    valueColor="#3E8E7E"

                    iconBg="#EAF7F3"

                    iconColor="#3E8E7E"

                />


                <SummaryCard

                    label="EXPENSE"

                    value={`₹${dashboard.totalExpense?.toLocaleString()}`}

                    subtitle="Spent this month"

                    icon={<FiTrendingDown />}

                    valueColor="#C1633D"

                    iconBg="#FCEFEA"

                    iconColor="#C1633D"

                />


                <SummaryCard

                    label="BUDGET LEFT"

                    value={`₹${dashboard.budgetLeft?.toLocaleString()}`}

                    subtitle="Remaining this month"

                    icon={<FiTarget />}

                    valueColor="#1C2321"

                    iconBg="#FBF6EA"

                    iconColor="#B8934A"

                />

            </div>



            {/* Charts */}

            <div className="grid grid-cols-[1.1fr_1fr] gap-4 mt-6">

                <ExpenseChart

    expenseChart={
        dashboard.expenseByCategory
    }

    totalExpense={
        dashboard.totalExpense
    }

/>


                <MonthlyExpenseChart
                    weeklyExpenses={weeklyExpenses}
                />

            </div>



            {/* Budget & Top Categories */}

            <div className="grid grid-cols-2 gap-4 mt-6">

                <BudgetProgress

                    totalBudget={dashboard.totalBudget}
    totalExpense={dashboard.totalExpense}
    remainingBudget={dashboard.budgetLeft}
    budgetUsedPercentage={dashboard.budgetUsedPercentage}
    daysLeft={dashboard.daysLeft}

                />


                <TopSpendingCategories

    topCategories={
        dashboard.topCategories
    }

/>

            </div>



            {/* Recent Transactions */}

            <div className="mt-6">

                <RecentTransactions

                    transactions={
                        dashboard.recentTransactions
                    }

                />

            </div>

        </>

    );

};
