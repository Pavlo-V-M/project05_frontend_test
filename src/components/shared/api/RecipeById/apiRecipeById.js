import axios from 'axios';

export default async function fetchDetails(recipeId) {
  const token = localStorage.getItem('token');
    const instance = axios.create({
        baseURL: 'https://project05-backend.onrender.com',
      });
      
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      const {data} = await instance.get(`/api/recipes/${recipeId}`);
      console.log(data);
       
      return data;

  };
  export const FetchId = async(email)=> {
    const token = localStorage.getItem('token');
        
      const instance = axios.create({
          baseURL: 'https://project05-backend.onrender.com',
        });
        
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // https://project05-backend.onrender.com/api/auth/:id?email=simp%40son.ca
        
        const {data} = await instance.get(`/api/auth/:id?email=${email}`);
       const userId= (data.user._id);
         console.log(userId)
        return userId;
      }

 
  
