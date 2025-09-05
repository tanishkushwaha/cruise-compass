import axios from "axios";

if (!import.meta.env.VITE_BACKEND_URL) {
  throw new Error(
    "Please set the VITE_BACKEND_URL variable in your .env file. "
  );
}

const axiosInstance = axios.create({
  withCredentials: true, // For sending cookies with every req
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export default axiosInstance;
