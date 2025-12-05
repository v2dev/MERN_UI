import API from "./axios";

export const loginApi = (payload) => {
  return API.post("/api/v1/auth/login", payload);
};




