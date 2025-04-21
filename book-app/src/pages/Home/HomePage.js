import React from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookFilter from '../../components/BookFilter/BookFilter';
import BookList from '../../components/BookList/BookList';
import useBookStats from '../../hooks/useBookStats';
const HomePage = () => {
  console.log("✅ HomePage loaded");

  const { totalBooks, ownedBooks, readingBooks, wishListBooks } = useBookStats();

  return (
    <>
      <div className="stats">
        <p> Total: {totalBooks} | Milik: {ownedBooks} | Baca: {readingBooks} | Wishlist: {wishListBooks}</p>
      </div>
      <BookForm />
      <BookFilter />
      <BookList />
    </>
  );
  
};

export default HomePage;
