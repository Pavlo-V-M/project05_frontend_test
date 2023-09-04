import axios from "axios";

// const token = localStorage.getItem('token');
const token = localStorage.token;

export const instance = axios.create({
    baseURL: 'https://project05-backend.onrender.com/api'
})

instance.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const getMyFavorites = async () => {
    const { data } = await instance.get('/favorite');
    console.log(data);
    return data;
};

export const deleteFavorites = async recipeId => {
    const data = await instance.delete(`/favorite/${recipeId}`);
    return data;
};

export const addFavorites = async recipeId => {
    const data = await instance.patch(`/favorite/${recipeId}`);
    return data;
};