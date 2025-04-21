import React from 'react';
import { useBookContext } from '../../context/BookContext';

const BookFilter = () => {
  const { state, dispatch } = useBookContext();
  const { statusFilter } = state;

  const handleChange = (e) => {
    dispatch({ type: 'SET_STATUS_FILTER', payload: e.target.value });
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="status-filter">Filter Status: </label>
      <select
        id="status-filter"
        value={statusFilter}
        onChange={handleChange}
      >
        <option value="semua">Semua</option>
        <option value="milik">Milik</option>
        <option value="baca">Baca</option>
        <option value="beli">Beli</option>
      </select>
    </div>
  );
};

export default BookFilter;