import API from "./axios";

export const getBooks = async () => {
  const res = await API.get("/api/v1/books");
  return res.data.data.lists;
};

export const getBookById = async (id) => {
  const res = await API.get(`/api/v1/books/${id}`);
  // console.log("Get Book By ID API:", res.data.data);
  return res.data.data; 
};

export const deleteBook = async (id) => {
  const res = await API.delete(`/api/v1/books/${id}`);
  // console.log("Get Book By ID API:", res.data.data);
  return res.data.data;
};

export const editBook = async (id, updatedData) => {
  const res = await API.put(`/api/v1/books/${id}`, updatedData);
  return res.data.data; // return updated book
};

export const createBook = async (updatedData) => {
  const res = await API.post(`/api/v1/books`, updatedData);
  return res.data.data; // return updated book
};











