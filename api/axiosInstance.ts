import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    Authorization: "Bearer 35d68208c1fa444a810535db09e7018b",
  },
});

export default axiosInstance;
