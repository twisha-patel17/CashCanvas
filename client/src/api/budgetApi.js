import api from "./axios";


export const getBudget = async () => {

    const response = await api.get(

        "/budget",

        {

            headers: {

                Authorization:
                `Bearer ${localStorage.getItem("token")}`,

            },

        }

    );

    return response.data;

};



export const getBudgetHistory = async () => {

    const response = await api.get(

        "/budget/history",

        {

            headers: {

                Authorization:
                `Bearer ${localStorage.getItem("token")}`,

            },

        }

    );

    return response.data;

};



export const getBudgetInsights = async () => {

    const response = await api.get(

        "/budget/insights",

        {

            headers: {

                Authorization:
                `Bearer ${localStorage.getItem("token")}`,

            },

        }

    );

    return response.data;

};