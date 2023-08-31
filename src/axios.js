import axios from "axios";

const instance = axios.create({
    baseURL: 'https://project05-backend.onrender.com/api',
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
})

export default instance;
