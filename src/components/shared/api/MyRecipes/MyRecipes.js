import axios from 'axios';

const recipesInstance = axios.create({
  baseURL: ' http://project05-backend.onrender.com/api/own',
});

export const getMyRecipes = async () => {
  const { data } = await recipesInstance.get();
  return data;
};

export const deleteRecipes = async id => {
  const { data } = await recipesInstance.delete(`/${id}`);
  return data;
};
