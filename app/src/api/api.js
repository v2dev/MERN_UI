import axios from "axios";

// const url = "http://localhost:8000/myapi/v6/testauth/login"
// const API = axios.create({
//   baseURL: url
// });



// export const loginApi = (payload) => {
//   console.log("Payload :: ", payload);
  
//   if (
//     payload.email === payload.email &&
//     payload.password === "123456" && 
//     payload.name === payload.name
//   ) {
//     return Promise.resolve({ success: true });
//   }
//   return Promise.reject({ message: "Invalid credentials" });
// };

// export const fetchContacts = () => {
//   return API.get("/users");
// };


const API = axios.create({
  baseURL: "http://172.16.11.174:8000"
});

export const loginApi = (payload) => {
  console.log("Payload 1:: ", payload);
  return API.post("/api/v1/auth/login", payload);
};


export const fetchContacts = (id) => {
  return API.get("/api/v1/lists/contacts");
};

export const fetchContactsById = (id) => {
  return API.get(`/api/v1/lists/contacts/${id}`);
};




