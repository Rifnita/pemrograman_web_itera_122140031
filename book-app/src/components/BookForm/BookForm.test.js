import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';
import { BookProvider } from '../../context/BookContext';

describe('BookForm', () => {
  test('submits new book with status', () => {
    render(
      <BookProvider>
        <BookForm />
      </BookProvider>
    );

    fireEvent.change(screen.getByPlaceholderText(/judul buku/i), {
      target: { value: 'React Testing' },
    });
    fireEvent.change(screen.getByPlaceholderText(/penulis/i), {
      target: { value: 'Jest Master' },
    });
    fireEvent.change(screen.getByDisplayValue('milik'), {
      target: { value: 'baca' },
    });

    fireEvent.click(screen.getByText(/tambah buku/i));

    expect(screen.getByPlaceholderText(/judul buku/i).value).toBe('');
    expect(screen.getByPlaceholderText(/penulis/i).value).toBe('');
  });
});