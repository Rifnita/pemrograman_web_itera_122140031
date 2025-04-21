import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './BookFilter';
import { BookProvider } from '../../context/BookContext';

const renderWithProvider = (ui) => {
  return render(<BookProvider>{ui}</BookProvider>);
};

describe('BookFilter', () => {
  test('renders filter dropdown with correct label and options', () => {
    renderWithProvider(<BookFilter />);
    
    const dropdown = screen.getByLabelText(/filter status/i);
    expect(dropdown).toBeInTheDocument();

    // Cek semua opsi ada
    expect(screen.getByRole('option', { name: /semua/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /milik/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /baca/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /beli/i })).toBeInTheDocument();
  });

  test('changes filter status on selection', () => {
    renderWithProvider(<BookFilter />);
    
    const dropdown = screen.getByLabelText(/filter status/i);
    fireEvent.change(dropdown, { target: { value: 'baca' } });
    
    expect(dropdown.value).toBe('baca');
  });
});