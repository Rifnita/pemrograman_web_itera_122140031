import React from 'react';
import { useBookContext } from '../../context/BookContext';
import BookItem from './BookItem';

function BookList() {
  const { state } = useBookContext();
  const { books, searchQuery, statusFilter } = state;

  // Filter berdasarkan search dan status
  const filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchStatus = statusFilter === 'semua' || book.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <div>
      <h2>Daftar Buku</h2>
      {filteredBooks.length === 0 ? (
        <p>Belum ada buku yang cocok.</p>
      ) : (
        filteredBooks.map((book) => <BookItem key={book.id} book={book} />)
      )}
    </div>
  );
}

export default BookList;