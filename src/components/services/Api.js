
import axios from 'axios';

axios.defaults.baseURL = 'https://project05-backend.onrender.com/';

const API_KEY = 'lavP2ue6A9';

export const fetchCategories = async () => {
  const response = await axios.get(`api/recipes/main-page?api_key=${API_KEY}`);
  return response.data.categoryName;
};