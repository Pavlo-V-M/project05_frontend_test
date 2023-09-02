import axios from 'axios';

// const API_KEY = 'lavP2ue6A9';

export const fetchCategories = async () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWJlMjY0ZDJhZTdkYWJjYjViZTBkYiIsImlhdCI6MTY5MzUyMDI3MiwiZXhwIjoxNjk1MzM0NjcyfQ.6OCZSjvRR58UwD2zQ-ncGfxLwmeZBOzLdHFy4yx-4l0';

  const instance = axios.create({
    baseURL: 'https://project05-backend.onrender.com',
  });

  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const { data } = await instance.get(`/api/recipes/category-list`);

  return data;
};
