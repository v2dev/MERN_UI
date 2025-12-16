import API from "./axios";

export const getItemsByCategory = async (categoryId) => {
  const res = await API.get(`/api/v1/categories/${categoryId}/data`);
  return res.data.data;
};

export const createItem = async (updatedData, type) => {
  const res = await API.post(`/api/v1/${type}`, updatedData);
  return res.data.data;
};

export const deleteItem = async (id, type) => {
  const res = await API.delete(`/api/v1/${type}/${id}`);
  return res.data.data;
};

export const toggleFavorite = async (id, type) => {
  const res = await API.patch(`/api/v1/${type}/${id}/favorite`);
  return res.data.data;
};

export const fetchDataWithFavoriteOnTop = async (type, isToggled) => {
  console.log("API call: fetchDataWithFavoriteOnTop", type, isToggled);
  const res = await API.get(`/api/v1/${type}/favorites/top/${isToggled}`);
  return res.data.data;
};












