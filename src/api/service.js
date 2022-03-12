import axios from "axios";
const api = axios.create({
  baseURL: "http://172.30.153.172:3333",
});

export default api;
