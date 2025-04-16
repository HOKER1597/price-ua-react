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
    </header>
  );
}

export default Header;