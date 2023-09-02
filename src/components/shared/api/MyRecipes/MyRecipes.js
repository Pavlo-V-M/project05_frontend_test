import axios from 'axios';

const recipesInstance = axios.create({
  baseURL: 'https://project05-backend.onrender.com/api',
});

recipesInstance.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWM2M2IxYTE5ZDcyYjdmM2YwYmE3MiIsImlhdCI6MTY5MzU3MDc4OCwiZXhwIjoxNjk1Mzg1MTg4fQ.WDCyDqkVhnzOf3a7lBAU5N6lN9RHkb4Rwp9aQXD4SNk';

export const getMyRecipes = async () => {
  const { data } = await recipesInstance.get('/own');
  console.log(data);
  return data;
};

export const deleteRecipes = async _id => {
  const data = await recipesInstance.delete(`/own/${_id}`);
  return data;
};
