import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://www.omdbapi.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json" 
    }
});

export default axiosInstance;