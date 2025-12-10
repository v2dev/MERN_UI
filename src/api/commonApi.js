import API from "./axios";

export const getItemsByCategory = async (categoryId) => {
  const res = await API.get(`/api/v1/categories/${categoryId}/data`);
  return res.data.data; 
};










