import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://music-player-ypel.onrender.com",
});

export default api;