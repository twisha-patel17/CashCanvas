import api from "./axios";


export const getTransactions = async (page = 1) => {

    const response = await api.get(

        `/transactions?page=${page}`,

        {
            headers: {
                Authorization:
                `Bearer ${localStorage.getItem("token")}`,
            },
        }
    );

    return response.data;
};



export const createTransaction = async (data) => {

    const response = await api.post(

        "/transactions",

        data,

        {
            headers: {
                Authorization:
                `Bearer ${localStorage.getItem("token")}`,
            },
        }
    );

    return response.data;
};



export const deleteTransaction = async (id) => {

    const response = await api.delete(

        `/transactions/${id}`,

        {
            headers: {
                Authorization:
                `Bearer ${localStorage.getItem("token")}`,
            },
        }
    );

    return response.data;
};



export const updateTransaction = async (id, data) => {

    const response = await api.put(

        `/transactions/${id}`,

        data,

        {
            headers: {
                Authorization:
                `Bearer ${localStorage.getItem("token")}`,
            },
        }
    );

    return response.data;
};