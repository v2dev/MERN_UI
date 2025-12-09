import API from "./axios";

export const getCategories = async () => {
  const res = await API.get("/api/v1/categories");  
  return res.data.data.lists;
};

export const getCategoriesById = async (id) => {
  const res = await API.get(`/api/v1/categories/${id}`);
  return res.data.data; 
};






