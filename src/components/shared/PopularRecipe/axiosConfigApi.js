import axios from "axios";

const token = localStorage.getItem('token')

export const popularRecipeInstance = axios.create({
	baseURL: "https://project05-backend.onrender.com/api"
})

popularRecipeInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
