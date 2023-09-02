import axios from 'axios';

// const API_KEY = 'lavP2ue6A9';
//project05-backend.onrender.com/api/search?category=beer&drink=Orange&title=juice&pageNumber=1&pageSize=9

export const fetchRecipetsByCaregories = async category => {
  // const categories = `${category}`;
  const pageSize = 9;
  const pageNumber = 1;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWJlMjY0ZDJhZTdkYWJjYjViZTBkYiIsImlhdCI6MTY5MzUyMDI3MiwiZXhwIjoxNjk1MzM0NjcyfQ.6OCZSjvRR58UwD2zQ-ncGfxLwmeZBOzLdHFy4yx-4l0';
  const instance = axios.create({
    baseURL: 'https://project05-backend.onrender.com',
  });
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const { data } = await instance.get(
    `/api/search?keyword=${category}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  //   console.log(data);
  return data;
};
