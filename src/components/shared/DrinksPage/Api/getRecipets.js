import axios from 'axios';

// const API_KEY = 'lavP2ue6A9';

export const fetchRecipets = async (itemOffset, keyword, numberCards) => {
  // const keyword = '';

  const pageSize = numberCards;
  const pageNumber = itemOffset;
<<<<<<< Updated upstream
=======
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWM2M2IxYTE5ZDcyYjdmM2YwYmE3MiIsImlhdCI6MTY5MzY3MjUwNCwiZXhwIjoxNjk1NDg2OTA0fQ.9OA4SHcrkeNE8YSWBxu60VqsGSpmmD3qJi6zQp-pwSE';
>>>>>>> Stashed changes
  const token = localStorage.getItem('token');
  const instance = axios.create({
    baseURL: 'https://project05-backend.onrender.com',
  });
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const { data } = await instance.get(
    `/api/search?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  //   console.log(data);
  return data;
};
