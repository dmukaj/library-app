import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:3000/api",
});

// Add a request interceptor to attach the token to each request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
