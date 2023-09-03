import axios from 'axios';

const token = localStorage.getItem('token');

export const recipesInstance = axios.create({
  baseURL: 'https://project05-backend.onrender.com/api',
});

recipesInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const getMyRecipes = async () => {
  const { data } = await recipesInstance.get('/own');
  console.log(data);
  return data;
};

export const deleteRecipes = async _id => {
  const data = await recipesInstance.delete(`/own/${_id}`);
  return data;
};
