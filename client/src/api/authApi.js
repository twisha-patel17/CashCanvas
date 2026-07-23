import api from "./axios";

export const deleteAccount = async (
    password
)=>{
    const response = await api.delete(
        "/auth/delete-account",
        {
            data:{
                password,
            },
        }
    );
    return response.data;
};