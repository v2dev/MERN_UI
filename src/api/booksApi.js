import API from "./axios";

export const getBookById = async (id) => {
  const res = await API.get(`/api/v1/books/${id}`);
  return res.data.data;
};

export const editBook = async (id, updatedData) => {
  const res = await API.put(`/api/v1/books/${id}`, updatedData);
  return res.data.data;
};

export const createBook = async (updatedData) => {
  const res = await API.post(`/api/v1/books`, updatedData);
  return res.data.data;
};











