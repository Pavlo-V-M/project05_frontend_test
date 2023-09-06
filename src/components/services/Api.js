
import axios from 'axios';

// axios.defaults.baseURL = 'https://project05-backend.onrender.com/';

// const API_KEY = 'lavP2ue6A9';

// export const fetchCategories = async () => {
//   const response = await axios.get(`api/recipes/main-page?api_key=${API_KEY}`);
//   return response.data;

//   // return response.data;
// };

const token = localStorage.getItem('token');

export const instance = axios.create({
  baseURL: 'https://project05-backend.onrender.com/api'
})

instance.defaults.headers.common['Authorization'] = `Bearer ${token}`


export async function fetchCategories() {
    const token = localStorage.getItem('token');
    const instance = axios.create({
        baseURL: 'https://project05-backend.onrender.com',
      });
      
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      const {data} = await instance.get(`api/recipes/main-page`);
      console.log(data);
       
      return data;}

export const getMyFavorites = async () => {	
  const token = localStorage.getItem('token');
    const instance = axios.create({
        baseURL: 'https://project05-backend.onrender.com',
      });
      
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;	
      const { data } = await instance.get('api/favorite');		
      console.log(data);		
      return data;		
};		

export const deleteFavorites = async _id =>  {	
  const token = localStorage.getItem('token');
    const instance = axios.create({
        baseURL: 'https://project05-backend.onrender.com',
      });
      
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;		
      const { data } = await instance.delete(`api/favorite/${_id}`);		
      console.log(data);
      return data;	
};
    
export const addFavorites = async _id => {		
  const token = localStorage.getItem('token');
    const instance = axios.create({
        baseURL: 'https://project05-backend.onrender.com',
      });
      
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;	
      const { data } = await instance.patch(`api/favorite/${_id}`);		
      return data;		
};		

// export const addCocktailImg = async (formData) => {
//   const response = await axios.post(`api/own`);
//   return response.data;
// };

export const getCategoryList  = async () => {
  const response = await instance.get(`api/recipes/category-list`);
  return response;
};

export const getGlassList  = async () => {
  const response = await instance.get(`api/glass`);
  return response;
};

export const addRecipe  = async () => {
  const response = await instance.post(`api/glass`);
  return response;
};