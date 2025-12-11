import API from "./axios";

export const getItemsByCategory = async (categoryId) => {
  const res = await API.get(`/api/v1/categories/${categoryId}/data`);
  return res.data.data;
};

export const createItem = async (updatedData, type) => {
  console.log("updated Data :: ", updatedData);
  // const res = await API.post(`/api/v1/contacts`, updatedData);
  const res = await API.post(`/api/v1/${type}`, updatedData);
  return res.data.data;
};

// export const createBook = async (updatedData) => {
//   const res = await API.post(`/api/v1/books`, updatedData);
//   return res.data.data; // return updated book
// };












