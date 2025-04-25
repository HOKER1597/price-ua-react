import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import products from '../data/products';
import SearchResults from './SearchResults';
import './Header.css';

function Header({ setSearchTerm }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = useCallback(() => {
    if (searchQuery.trim()) {
      setSearchTerm(searchQuery);
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setShowResults(false);
    }
  }, [searchQuery, setSearchTerm, navigate]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      const groupedResults = filteredProducts.reduce((acc, product) => {
        const category = acc.find((cat) => cat.category === product.category);
        if (category) {
          category.products.push(product);
          category.count += 1;
        } else {
          acc.push({ category: product.category, products: [product], count: 1 });
        }
        return acc;
      }, []).sort((a, b) => b.count - a.count);
      setSearchResults(groupedResults);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  useEffect(() => {
    return () => {
      setSearchResults([]);
      setShowResults(false);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          CosmetickUA
        </Link>
        <div className="search-container">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Пошук товарів..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="search-input"
            />
            {searchQuery && (
              <svg
                className="clear-icon"
                onClick={handleClearSearch}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#555"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            )}
          </div>
          <button onClick={handleSearch} className="search-button">
            Знайти
          </button>
          {showResults && searchResults.length > 0 && (
            <SearchResults
              results={searchResults}
              searchQuery={searchQuery}
              onClose={handleCloseResults}
            />
          )}
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
      </div>
    </header>
  );
}

export default Header;