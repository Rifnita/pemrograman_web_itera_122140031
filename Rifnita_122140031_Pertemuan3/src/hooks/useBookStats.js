import { useBookContext } from '../context/BookContext';

const useBookStats = () => {
  const context = useBookContext();

  if (!context || !context.state) {
    console.error("useBookContext() returned undefined or missing state.");
    return {
      totalBooks: 0,
      ownedBooks: 0,
      readingBooks: 0,
      wishListBooks: 0,
    };
  }

  const { books } = context.state;

  const totalBooks = books.length;
  const ownedBooks = books.filter(b => b.status === 'milik').length;
  const readingBooks = books.filter(b => b.status === 'baca').length;
  const wishListBooks = books.filter(b => b.status === 'beli').length;

  return { totalBooks, ownedBooks, readingBooks, wishListBooks };
};

export default useBookStats;