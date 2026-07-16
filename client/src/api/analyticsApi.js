import axios from "axios";

const API_URL = "http://localhost:5000/api/analytics";


export const getMonthlyExpenses = async (token) => {

    const response = await axios.get(
        `${API_URL}/monthly-expenses`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};


export const getIncomeVsExpense = async (token) => {

    const response = await axios.get(
        `${API_URL}/income-vs-expense`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};


export const getExpenseDistribution = async (token) => {

    const response = await axios.get(
        `${API_URL}/expense-distribution`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};


export const getTopSpendingCategories = async (token) => {

    const response = await axios.get(
        `${API_URL}/top-spending-categories`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};