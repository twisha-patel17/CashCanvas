import api from "./axios";


export const getDashboard = async () => {

    const response = await api.get(

        "/dashboard",

        {
            headers: {

                Authorization:
                `Bearer ${localStorage.getItem("token")}`,

            },
        }

    );


    return response.data;

};



export const getWeeklyExpenses = async () => {

    const response = await api.get(

        "/dashboard/weekly-expenses",

        {
            headers: {

                Authorization:
                `Bearer ${localStorage.getItem("token")}`,

            },
        }

    );


    return response.data.weeklyExpenses;

};



export const getExpenseByCategory = async () => {

    const response = await api.get(

        "/dashboard/expense-by-category",

        {
            headers: {

                Authorization:
                `Bearer ${localStorage.getItem("token")}`,

            },
        }

    );


    return response.data.categories;

};