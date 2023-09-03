import  { useState, useEffect } from 'react';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    fetch('https://project05-backend.onrender.com/api-docs')
      .then((response) => response.json())
      .then((data) => {
        const isDataLoaded = data && data.length > 0;

        setIsLoading(!isDataLoaded);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setIsLoading(false); 
      });
  }, []);

//   const timer = setTimeout(() => {
//     setIsLoading(false);
//   }, 3000);

//   return () => {
//     clearTimeout(timer);
//   };
// }, []);

  return { isLoading };
};

export default useLoading;
