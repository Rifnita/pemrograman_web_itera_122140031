import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BookProvider, useBookContext } from './BookContext';

const TestComponent = () => {
  const { books, dispatch, statusFilter } = useBookContext();

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: 'ADD_BOOK',
            payload: { id: '1', title: 'Testing', author: 'Tester', status: 'baca' },
          })
        }
      >
        Add Book
      </button>
      <p>Filter: {statusFilter}</p>
      {books.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
};

describe('BookContext', () => {
  test('adds and filters books', () => {
    render(
      <BookProvider>
        <TestComponent />
      </BookProvider>
    );

    fireEvent.click(screen.getByText(/add book/i));
    expect(screen.getByText(/testing/i)).toBeInTheDocument();
  });
});