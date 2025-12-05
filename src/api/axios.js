import axios from "axios";

const API = axios.create({
  // baseURL: "http://172.16.11.174:8000",
  baseURL: "http://192.168.1.5:8000",
  timeout: 10000,
});

export default API;
