import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookItem from './BookItem';
import { BookProvider } from '../../context/BookContext';

const book = { id: '1', title: 'Test Book', author: 'Author', status: 'beli' };

describe('BookItem', () => {
  test('displays book info and handles delete', () => {
    render(
      <BookProvider>
        <BookItem book={book} />
      </BookProvider>
    );

    expect(screen.getByText(/test book/i)).toBeInTheDocument();
    expect(screen.getByText(/author/i)).toBeInTheDocument();
    expect(screen.getByText(/beli/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/hapus/i));
  });
});