import api from "./axios";

export const getBudget = async (
    month,
    year
) => {

    const response = await api.get(
        "/budget",
        {
            params: {
                month,
                year,
            },
        }
    );

    return response.data;

};



export const getBudgetHistory = async () => {

    const response = await api.get(
        "/budget/history"
    );

    return response.data;

};



export const getBudgetInsights = async (
    month,
    year
) => {

    const response = await api.get(
        "/budget/insights",
        {
            params: {
                month,
                year,
            },
        }
    );

    return response.data;

};