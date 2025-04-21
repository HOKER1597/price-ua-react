import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ setSearchTerm }) {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>CosmetickUA</h1>
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Пошук косметики..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Знайти</button>
      </div>
      <div className="profile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>Увійти</span>
      </div>
    </header>
  );
}

export default Header;