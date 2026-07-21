import api from "./axios";

export const getTransactions = async (page = 1) => {
  const response = await api.get(
    `/transactions?page=${page}`
  );

  return response.data;
};

export const createTransaction = async (data) => {
  const formData = new FormData();

  formData.append("amount", data.amount);
  formData.append("category", data.category);
  formData.append("type", data.type);
  formData.append("date", data.date);
  formData.append("paymentMethod", data.paymentMethod);
  formData.append("description", data.description);

  if (data.receipt) {
    formData.append("receipt", data.receipt);
  }

  const response = await api.post(
    "/transactions",
    formData
  );

  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = await api.delete(
    `/transactions/${id}`
  );

  return response.data;
};

export const updateTransaction = async (id, data) => {
  const response = await api.put(
    `/transactions/${id}`,
    data
  );

  return response.data;
};