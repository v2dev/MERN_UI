import API from "./axios";

export const getItemsByCategory = async (categoryId) => {
  const res = await API.get(`/api/v1/categories/${categoryId}/data`);
  return res.data.data;
};

export const createItem = async (updatedData, type) => {
  console.log("API call: createItem", updatedData, type);
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
  let URL = "";
  if (isToggled == true) {
    URL = `/api/v1/${type}?sort=favorite`;
  } else {
    URL = `/api/v1/${type}`;
  }
  const res = await API.get(URL);
  return res.data.data;
};

// commonApi.js
export const fetchDataWithSearch = async (type, query) => {
  console.log("API call: fetchDataWithSearch", type, query);
  let URL = "";
  URL = `/api/v1/${type}?search=${query}`;
  console.log(URL)

  const res = await API.get(URL);
  return res.data.data;
};












