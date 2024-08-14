// src/useFetchData.ts

import { useState } from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useFetchData = (initialUrl: string) => {
  const [data, setData] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState(initialUrl); // Added state to hold the current URL

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('An error occurred while fetching the data.');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to update the URL and trigger fetch
  const refreshData = (newUrl?: string) => {
    if (newUrl) setUrl(newUrl);
    fetchData();
  };

  return { data, isLoading, error, refreshData };
};

export default useFetchData;
