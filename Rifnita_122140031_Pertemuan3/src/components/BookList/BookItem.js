import React, { useState } from 'react';
import { useBookContext } from '../../context/BookContext';

const BookItem = ({ book }) => {
  const { dispatch } = useBookContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(book.title);
  const [editAuthor, setEditAuthor] = useState(book.author);
  const [editStatus, setEditStatus] = useState(book.status);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_BOOK', payload: book.id });
  };

  const handleEdit = () => {
    const updatedBook = {
      id: book.id,
      title: editTitle,
      author: editAuthor,
      status: editStatus,
    };
    dispatch({ type: 'EDIT_BOOK', payload: updatedBook });
    setIsEditing(false);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '8px',
    }}>
      {isEditing ? (
        <>
          <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          <input value={editAuthor} onChange={(e) => setEditAuthor(e.target.value)} />
          <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
            <option value="milik">Milik</option>
            <option value="baca">Baca</option>
            <option value="beli">Beli</option>
          </select>
          <button onClick={handleEdit}>Simpan</button>
          <button onClick={() => setIsEditing(false)}>Batal</button>
        </>
      ) : (
        <>
          <h3>{book.title}</h3>
          <p>Penulis: {book.author}</p>
          <p>Status: <strong>{book.status}</strong></p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Hapus</button>
        </>
      )}
    </div>
  );
};

export default BookItem;