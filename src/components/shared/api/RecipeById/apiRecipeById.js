import axios from 'axios';

export default async function fetchDetails(recipeId) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjQzODgxOGJhM2I4YjlhZDk2NDJkOCIsImlhdCI6MTY5MzczMTQyOCwiZXhwIjoxNjk1NTQ1ODI4fQ.6Pg_b0OgFrpL1RasbRgkejnA77vNY_1RNPo4_GVOYIA'
    const instance = axios.create({
        baseURL: 'https://project05-backend.onrender.com',
      });
      
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      const {data} = await instance.get(`/api/recipes/${recipeId}`);
      console.log(data);
       
      return data;
    // return fetch(
      
    //     `https://project05-backend.onrender.com/api/recipes/${recipeId}?`
    // ).then(response => {
    //   if (response.ok) {
    //     console.log(response)
    //     return response.json();
    //   }
    //   return Promise.reject(new Error(`recipe not found`));
    // });
  };
