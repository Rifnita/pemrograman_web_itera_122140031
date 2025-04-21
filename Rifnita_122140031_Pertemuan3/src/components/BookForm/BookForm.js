import React, { useState } from 'react';
import { useBookContext } from '../../context/BookContext';
import { v4 as uuidv4 } from 'uuid';

const BookForm = () => {
  const { dispatch } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('milik'); // default value

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const newBook = {
        id: uuidv4(),
        title,
        author,
        status,
      };
      dispatch({ type: 'ADD_BOOK', payload: newBook });
      setTitle('');
      setAuthor('');
      setStatus('milik');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Judul Buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="milik">Milik</option>
        <option value="baca">Baca</option>
        <option value="beli">Beli</option>
      </select>
      <button type="submit">Tambah Buku</button>
    </form>
  );
};

export default BookForm;