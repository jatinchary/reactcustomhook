// src/FetchButton.tsx

import React from 'react';
import useFetchData from '../useFetchData';

const FetchButton: React.FC = () => {
  const { data, isLoading, error, refreshData } = useFetchData('https://jsonplaceholder.typicode.com/todos');

  const handleClick = () => {
    refreshData(); // Call refreshData instead of fetchData to allow URL updating if necessary
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="text-center w-full h-full">
      <button className="bg-black text-white px-4 py-2 rounded text-center" onClick={handleClick}>Fetch Data</button>
      {data.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchButton;
