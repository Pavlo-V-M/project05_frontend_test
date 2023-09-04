// new try

import axios from 'axios';

export const getMyRecipes = async () => {

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWM2M2IxYTE5ZDcyYjdmM2YwYmE3MiIsImlhdCI6MTY5MzY3MjUwNCwiZXhwIjoxNjk1NDg2OTA0fQ.9OA4SHcrkeNE8YSWBxu60VqsGSpmmD3qJi6zQp-pwSE';
  
  const recipesInstance = axios.create({
    baseURL: 'https://project05-backend.onrender.com',
  });
  
  recipesInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const { data } = await recipesInstance.get('/api/own');
  // :category
  console.log(data);
  return data;
};

export const deleteRecipes = async (_id) => {

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWM2M2IxYTE5ZDcyYjdmM2YwYmE3MiIsImlhdCI6MTY5MzY3MjUwNCwiZXhwIjoxNjk1NDg2OTA0fQ.9OA4SHcrkeNE8YSWBxu60VqsGSpmmD3qJi6zQp-pwSE';
  
  const recipesInstance = axios.create({
    baseURL: 'https://project05-backend.onrender.com',
  });
  
  recipesInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const { data } = await recipesInstance.get(`/api/own/${_id}`);
  console.log(data);
  return data;
};
