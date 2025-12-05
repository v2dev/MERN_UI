import API from "./axios";

export const getContacts = async () => {
  const res = await API.get("/api/v1/lists/contacts");
  return res.data.data.lists;
};

export const getContactById = async (id) => {
  const res = await API.get(`/api/v1/lists/contacts/${id}`);
  return res.data.data; 
};

export const getContactsByCategory = async (categoryId) => {
  // const res = await API.get(`/api/v1/lists/categories/${categoryId}/contacts`);
  const res = await API.get("/api/v1/lists/contacts");
  return res.data.data.lists; // adjust based on your backend response
};








