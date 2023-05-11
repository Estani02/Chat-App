import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "./storageToken";

const apiClient = axios.create({
  // URL para variable de entorno
  baseURL: "http://localhost:8080/"
});

apiClient.interceptors.request.use((request: AxiosRequestConfig) => {
  request.headers = {
    Authorization: `Bearer ${getToken()}`
  };
  return request;
});
export default apiClient;