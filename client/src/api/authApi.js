import api from "./axios";
export const forgotPassword = async (email) => {
    const response = await api.post(
        "/auth/forgot-password",
        {
            email,
        }
    );
    return response.data;
};
export const resetPassword = async (
    token,
    password,
    confirmPassword
) => {
    const response = await api.post(
        `/auth/reset-password/${token}`,
        {
            password,
            confirmPassword,
        }
    );
    return response.data;
};

export const changePassword = async (data) => {
  const response = await api.put(
    "/auth/change-password",
    data
  );

  return response.data;
};

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