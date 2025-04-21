import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from './BookList';
import { BookContext } from '../../context/BookContext';

describe('BookList', () => {
  test('shows no books message', () => {
    const contextValue = { books: [], statusFilter: 'semua' };
    render(
      <BookContext.Provider value={contextValue}>
        <BookList />
      </BookContext.Provider>
    );
    expect(screen.getByText(/belum ada buku/i)).toBeInTheDocument();
  });

  test('shows filtered books', () => {
    const contextValue = {
      books: [
        { id: '1', title: 'Book A', author: 'Author A', status: 'baca' },
        { id: '2', title: 'Book B', author: 'Author B', status: 'milik' },
      ],
      statusFilter: 'baca',
    };
    render(
      <BookContext.Provider value={contextValue}>
        <BookList />
      </BookContext.Provider>
    );
    expect(screen.getByText(/book a/i)).toBeInTheDocument();
    expect(screen.queryByText(/book b/i)).not.toBeInTheDocument();
  });
});