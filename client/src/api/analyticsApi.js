import api from "./axios";

export const getMonthlyExpenses = async () => {

    const response = await api.get(
        "/analytics/monthly-expenses"
    );

    return response.data;
};


export const getIncomeVsExpense = async () => {

    const response = await api.get(
        "/analytics/income-vs-expense"
    );

    return response.data;
};


export const getExpenseDistribution = async () => {

    const response = await api.get(
        "/analytics/expense-distribution"
    );

    return response.data;
};


export const getTopSpendingCategories = async () => {

    const response = await api.get(
        "/analytics/top-spending-categories"
    );

    return response.data;
};