import axios from "axios";
import react, { useContext } from "react";
import { storageLabel } from "../../config/configs";
import { getItem, removeItem } from "../cache/storage";
import GeneralContext from "../contexts/generalContext";
const api = axios.create({
// baseURL: "http://172.30.151.140:3334",
  baseURL: "http://192.168.3.4:3334",
  
});

api.interceptors.request.use(async config => {
  const token = await getItem(storageLabel.token_user);
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(response => response, async error =>{
  if (error.response.status == 401) {
    await removeItem(storageLabel.token_user)
  }
  return  Promise.reject(error)
})



export default api;
