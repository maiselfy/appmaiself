import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.1.146:3000/",
  baseURL: "https://api.maiself.com.br/"
});

export default api;
