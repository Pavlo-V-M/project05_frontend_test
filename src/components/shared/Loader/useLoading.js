import React, { useState, useEffect } from 'react';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Симулюємо завантаження на 2 секунди
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { isLoading };
};

export default useLoading;
