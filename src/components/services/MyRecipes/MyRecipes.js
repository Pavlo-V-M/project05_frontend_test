import axios from 'axios';

export const getMyRecipes = async () => {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    baseURL: 'https://project05-backend.onrender.com',
  });

  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const { data } = await instance.get('/api/own');

  console.log(data);
  return data;
};

export const deleteRecipes = async _id => {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    baseURL: 'https://project05-backend.onrender.com',
  });

  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const { data } = await instance.delete(`/api/own/${_id}`);
  console.log(data);
  return data;
};
