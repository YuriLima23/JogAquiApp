import axios from "axios";
import { useContext } from "react";
import { storageLabel } from "../../config/configs";
import { getItem, removeItem } from "../cache/storage";
import GeneralContext from "../contexts/generalContext";
const api = axios.create({
  baseURL: "http://192.168.3.4:3333",
});

api.interceptors.request.use(async config => {
  const token = await getItem(storageLabel.token_user);
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(async config => {
 
  console.log("Entrou no response")
  if (config.status == 401) {
    await removeItem(storageLabel.token_user)
  }
  return config
})



export default api;
