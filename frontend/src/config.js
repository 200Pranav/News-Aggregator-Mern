// src/config.js
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://news-aggregator-mern-3.onrender.com/api"
    : "http://localhost:5000/api";

export default API_BASE_URL;
