import API from "./axios";

export const getContacts = async () => {
  const res = await API.get("/api/v1/lists/contacts");
  return res.data.data.lists;
};

export const getContactById = async (id) => {
  const res = await API.get(`/api/v1/lists/contacts/${id}`);
  return res.data.data; 
};

// export const getCategories = async () => {
//   const res = await API.get("/api/v1/categories");  
//   const categories = res.data.data.lists; 
//   categories.forEach(item => {
//   console.log(item._id);
//   console.log(item.name);
//   console.log(item.type);
//   console.log(item.description);
// });
//   // console.log("Categories API Response:", res.data.data.lists);
//   return res.data.data.lists;
// };






