import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchResults from './SearchResults';
import './Header.css';

function Header({ setSearchTerm }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResultsUpdated, setIsResultsUpdated] = useState(false);
  const navigate = useNavigate();

  // Handle search submission
  const handleSearch = useCallback(() => {
    if (searchQuery.trim()) {
      setSearchTerm(searchQuery);
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setShowResults(false);
      setIsLoading(false);
      setIsResultsUpdated(false);
    }
  }, [searchQuery, setSearchTerm, navigate]);

  // Handle input change and fetch search results from the database
  const handleInputChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      setIsLoading(true);
      setIsResultsUpdated(false); // Reset animation trigger
      try {
        const response = await axios.get('https://price-ua-react-backend.onrender.com/products', {
          params: { search: query },
        });

        setSearchResults(response.data.groupedResults || []);
        setShowResults(true);
        setIsResultsUpdated(true); // Trigger animation after results are updated
      } catch (error) {
        console.error('Помилка пошуку:', error);
        setSearchResults([]);
        setShowResults(false);
        setIsResultsUpdated(false);
      } finally {
        setIsLoading(false);
      }
    } else {
      setSearchResults([]);
      setShowResults(false);
      setIsLoading(false);
      setIsResultsUpdated(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Clear search input and results
  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
    setSearchTerm('');
    setIsLoading(false);
    setIsResultsUpdated(false);
  };

  // Close search results
  const handleCloseResults = () => {
    setShowResults(false);
    setIsResultsUpdated(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setSearchResults([]);
      setShowResults(false);
      setIsLoading(false);
      setIsResultsUpdated(false);
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
              <>
                {isLoading && (
                  <svg
                    className="loading-circle"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" fill="none" stroke="#555" strokeWidth="4" />
                    <path
                      d="M12 2a10 10 0 0 1 10 10"
                      fill="none"
                      stroke="#0288d1"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
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
              </>
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
              isResultsUpdated={isResultsUpdated}
              isLoading={isLoading}
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