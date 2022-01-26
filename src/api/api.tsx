import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
   baseURL: "http://192.168.1.146:3000/",
  //baseURL: "https://api.maiself.com.br/"
});

api.defaults.headers.Authorization = `Bearer ${AsyncStorage.getItem('token')}` 

export default api;
