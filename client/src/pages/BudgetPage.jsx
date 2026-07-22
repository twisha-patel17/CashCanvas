import { useEffect, useState } from "react";

import { BudgetSummaryCards } from "../components/budget/BudgetSummaryCards";
import { BudgetProgress } from "../components/budget/BudgetProgress";
import { BudgetStatus } from "../components/budget/BudgetStatus";
import { CategoryBudget } from "../components/budget/CategoryBudget";
import { MonthlyBudgetHistory } from "../components/budget/MonthlyBudgetHistory";
import { TopBudgetCategories } from "../components/budget/TopBudgetCategories";
import { BudgetTopbar } from "../components/budget/BudgetTopbar";

import { useOutletContext } from "react-router-dom";

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

  const { setIsSidebarOpen } = useOutletContext();

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

        setBudget(budgetData);
        setHistory(historyData.history);
        setBudgetInsights(insightsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBudgetData();
  }, [selectedMonth, selectedYear]);

  return (
    <>
      <BudgetTopbar
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <section className="min-h-screen bg-[#F7F5EF] p-4 sm:p-6 lg:p-8 dark:bg-[#121212]">
      {/* Heading */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex w-full sm:w-auto gap-3">
          {/* Month */}
          <select
            value={selectedMonth}
            onChange={(e) =>
              setSelectedMonth(Number(e.target.value))
            }
            className="flex-1 rounded-xl border border-[#DCD6C7] bg-white px-4 py-2 text-[#1C2321] outline-none dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white sm:flex-none"
          >
            {Array.from({ length: 12 }, (_, index) => (
              <option
                key={index + 1}
                value={index + 1}
              >
                {new Date(0, index).toLocaleString(
                  "default",
                  { month: "long" }
                )}
              </option>
            ))}
          </select>

          {/* Year */}
          <select
            value={selectedYear}
            onChange={(e) =>
              setSelectedYear(Number(e.target.value))
            }
            className="flex-1 rounded-xl border border-[#DCD6C7] bg-white px-4 py-2 text-[#1C2321] outline-none dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white sm:flex-none"
          >
            {Array.from({ length: 6 }, (_, index) => (
              <option
                key={2025 + index}
                value={2025 + index}
              >
                {2025 + index}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <BudgetSummaryCards
        totalBudget={budget.totalBudget || 0}
        remainingBudget={budget.remainingBudget || 0}
      />

      {/* Budget Progress */}
      <div className="mt-8">
        <BudgetProgress
          totalBudget={budget.totalBudget || 0}
          totalExpense={budget.totalExpense || 0}
          budgetUsedPercentage={
            budget.budgetUsedPercentage || 0
          }
        />
      </div>

      {/* Category + History */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <CategoryBudget
          categoryBudgets={
            budgetInsights.categoryBudgets
          }
        />

        <MonthlyBudgetHistory history={history} />
      </div>

      {/* Top Categories + Status */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <TopBudgetCategories
          topCategories={budgetInsights.topCategories}
        />

        <BudgetStatus
          budgetStatus={budget.budgetStatus}
          budgetUsedPercentage={
            budget.budgetUsedPercentage
          }
          remainingBudget={budget.remainingBudget}
        />
      </div>
    </section>
    </>
    
  );
};