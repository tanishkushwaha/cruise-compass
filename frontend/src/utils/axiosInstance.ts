import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true, // For sending cookies with every req
  baseURL: 'https://probable-space-computing-machine-j74j6qvq4jp2jj5p-8080.app.github.dev',
});

export default axiosInstance;
