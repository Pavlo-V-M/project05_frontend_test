import axios from 'axios';

// const API_KEY = 'lavP2ue6A9';

export const fetchRecipets = async (itemOffset, keyword, numberCards) => {
  // const keyword = '';

  const pageSize = numberCards;
  const pageNumber = itemOffset;
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
