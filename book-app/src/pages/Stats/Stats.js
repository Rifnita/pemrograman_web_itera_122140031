import React from 'react';
import useBookStats from '../../hooks/useBookStats'; // Import hook yang sudah ada

const Stats = () => {
  const { total, authors } = useBookStats();

  return (
    <div className="stats">
      <p>Total Buku: {total} | Jumlah Penulis: {authors}</p>
    </div>
  );
};

export default Stats;