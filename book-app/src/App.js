import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext'; // Pastikan path ini benar
import HomePage from './pages/Home/HomePage'; // Pastikan path ini benar

function App() {
  console.log("✅ App component rendered");

  return (
    <BookProvider>
      <Router>
        <div className="app-container">
          <header className="header">
            <h1>📚 My Book Manager</h1>
            <p>Kelola koleksi buku pribadimu dengan mudah!</p>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;