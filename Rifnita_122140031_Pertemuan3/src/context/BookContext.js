import React, { createContext, useContext, useReducer } from 'react';

const BookContext = createContext();

const initialState = {
  books: JSON.parse(localStorage.getItem('books')) || [],
  searchQuery: '',
  statusFilter: 'semua',
};

function bookReducer(state, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      const updatedBooks = [...state.books, action.payload];
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      return { ...state, books: updatedBooks };

    case 'DELETE_BOOK':
      const filteredBooks = state.books.filter((book) => book.id !== action.payload);
      localStorage.setItem('books', JSON.stringify(filteredBooks));
      return { ...state, books: filteredBooks };

    case 'EDIT_BOOK':
      const editedBooks = state.books.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
      localStorage.setItem('books', JSON.stringify(editedBooks));
      return { ...state, books: editedBooks };

    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };

    case 'SET_STATUS_FILTER':
      return { ...state, statusFilter: action.payload };

    default:
      return state;
  }
}

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);