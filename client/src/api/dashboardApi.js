import api from "./axios";

export const getDashboard = async () => {

    const response = await api.get(
        "/dashboard"
    );

    return response.data;

};


export const getWeeklyExpenses = async () => {

    const response = await api.get(
        "/dashboard/weekly-expenses"
    );

    return response.data.weeklyExpenses;

};


export const getExpenseByCategory = async () => {

    const response = await api.get(
        "/dashboard/expense-by-category"
    );

    return response.data.categories;

};