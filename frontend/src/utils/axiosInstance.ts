import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true, // For sending cookies with every req
  baseURL: "http://localhost:8080", // Proxy
});

export default axiosInstance;
