import axios from "axios";

const baseUrl = "https://project05-backend.onrender.com/api-docs/";

const axiosInstance = axios.create({
	baseURL: baseUrl + "api/",
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosInstance;