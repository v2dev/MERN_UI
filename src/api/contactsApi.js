import API from "./axios";

export const getContacts = async () => {
  const res = await API.get("/api/v1/contacts");
  return res.data.data.lists;
};

export const getContactById = async (id) => {
  const res = await API.get(`/api/v1/contacts/${id}`);
  return res.data.data;
};

export const getContactsByCategory = async (categoryId) => {
  const res = await API.get(`/api/v1/lists/contacts/category/${categoryId}`);
  // console.log("Contacts by Category Response:", res.data.data);
  // const res = await API.get("/api/v1/lists/contacts");
  return res.data.data; // adjust based on your backend response
};











