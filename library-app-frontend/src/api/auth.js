import apiClient from "./api-client";

const login = (email, password) => apiClient.post("/auth", { email, password });

export default { login };
