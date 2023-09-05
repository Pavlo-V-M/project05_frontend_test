import { useState, useEffect } from 'react';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://project05-backend.onrender.com/api-docs')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setIsLoading(false);  
      });
  }, []);

  return { isLoading };
};

export default useLoading;
