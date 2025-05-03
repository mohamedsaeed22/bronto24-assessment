import axios from "axios";

const API_BASE_URL = "https://avitane.brontosolutions.com/assignment";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
