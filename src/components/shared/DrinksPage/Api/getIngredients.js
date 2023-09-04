import axios from 'axios';

// const API_KEY = 'lavP2ue6A9';

export const fetchIngredients = async () => {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    baseURL: 'https://project05-backend.onrender.com',
  });

  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const { data } = await instance.get(`/api/ingredients/list`);

  return data;
};
