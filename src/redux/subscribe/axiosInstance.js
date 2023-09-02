import axios from "axios";

const baseUrl = "https://drink-master-fssf-backend.onrender.com/";

const axiosInstance = axios.create({
	baseURL: baseUrl + "api/",
	headers: {
		"Content-Type": "application/json",
	},
});

export const setAuthJWTHeader = token => {
	axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthJWTHeader = () => {
	axiosInstance.defaults.headers.common.Authorization = "";
};

export default axiosInstance;