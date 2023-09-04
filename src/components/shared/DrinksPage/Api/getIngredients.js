import axios from 'axios';

// const API_KEY = 'lavP2ue6A9';

export const fetchIngredients = async () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWM2M2IxYTE5ZDcyYjdmM2YwYmE3MiIsImlhdCI6MTY5MzY3MjUwNCwiZXhwIjoxNjk1NDg2OTA0fQ.9OA4SHcrkeNE8YSWBxu60VqsGSpmmD3qJi6zQp-pwSE';
  const instance = axios.create({
    baseURL: 'https://project05-backend.onrender.com',
  });

  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const { data } = await instance.get(`/api/ingredients/list`);

  return data;
};
