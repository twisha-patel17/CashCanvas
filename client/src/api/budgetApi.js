import api from "./axios";


export const getBudget = async (

    month,

    year

) => {

    console.log(
    localStorage.getItem("token")
);

    const response = await api.get(

        "/budget",

        {

            params: {

                month,

                year,

            },

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

            headers: {

                Authorization:
                    `Bearer ${localStorage.getItem("token")}`,

            },

        }

    );

    return response.data;

};