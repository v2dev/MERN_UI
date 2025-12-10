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

export const getBooksByCategory = async (categoryId) => {
  const res = await API.get(`/api/v1/categories/${categoryId}/data`);
  // console.log("Books by Category Response:", res.data.data);
  // const res = await API.get("/api/v1/lists/contacts");
  return res.data.data; // adjust based on your backend response
};

export const deleteBook = async (id) => {
  const res = await API.delete(`/api/v1/books/${id}`);
  // console.log("Get Book By ID API:", res.data.data);
  return res.data.data; 
};









