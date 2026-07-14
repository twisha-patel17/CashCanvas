import api from "./axios";

export const createCategory = async (category) => {
   const response = await api.post("/categories", category, 
      {
        headers:  {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }
   );
   return response.data;
}

export const getCategories = async () => {
  console.log("Token:", localStorage.getItem("token"));

  const response = await api.get("/categories", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  console.log("Response:", response.data);

  return response.data;
};

export const deleteCategory = async (id) => {
    const response = await api.delete(
        `/categories/${id}`,
        {
            headers: {
                Authorization:
                `Bearer ${localStorage.getItem("token")}`,
            },
        }
    );

    return response.data;
};