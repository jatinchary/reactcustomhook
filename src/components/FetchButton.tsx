// src/FetchButton.tsx

import React from 'react';
import useFetchData from '../useFetchData';

const FetchButton: React.FC = () => {
  // const { data, isLoading, error, refreshData } = useFetchData('https://jsonplaceholder.typicode.com/todos');

  const handleClick = () => {
    refreshData(); // Call refreshData instead of fetchData to allow URL updating if necessary
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      {data.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchButton;
