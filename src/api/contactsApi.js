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
  return res.data.data; // adjust based on your backend response
};

export const editContact = async (contactId, contactData) => {
  console.log("contactsApi :: editContact :: contactId", contactId);
  console.log("contactsApi :: editContact :: contactData", contactData);

  const res = await API.put(`/api/v1/contacts/${contactId}`, contactData);
  return res.data.data;
};













