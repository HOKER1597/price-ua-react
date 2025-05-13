import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Header.css';

export const categoryNames = {
  shampoos: 'Шампуні',
  facecream: 'Креми для обличчя',
  facemask: 'Маски для обличчя',
  tonal: 'Тональні засоби',
  powder: 'Пудри',
  blush: 'Рум’яна',
  highlighter: 'Хайлайтери',
  concealer: 'Консилери',
  lipstick: 'Помади',
  lipgloss: 'Блиски для губ',
  lipliner: 'Олівці для губ',
  eyeshadow: 'Тіні для повік',
  eyeliner: 'Підводки',
  mascara: 'Туші для вій',
  browpencil: 'Олівці для брів',
  browshadow: 'Тіні для брів',
  browgel: 'Гелі для брів',
  nailpolish: 'Лаки для нігтів',
  makeupremover: 'Засоби для зняття макіяжу',
  brushes: 'Пензлі для макіяжу',
  serum: 'Сироватки',
  scrub: 'Скраби',
  cleanser: 'Очищувальні засоби',
  tonic: 'Тоніки',
  micellar: 'Міцелярна вода',
  eyecream: 'Креми для очей',
  lipbalm: 'Бальзами для губ',
  antiaging: 'Антивікові засоби',
  sunscreen: 'Сонцезахисні засоби',
  conditioner: 'Кондиціонери',
  hairmask: 'Маски для волосся',
  hairoil: 'Олії для волосся',
  hairserum: 'Сироватки для волосся',
  hairspray: 'Лаки для волосся',
  hairdye: 'Фарби для волосся',
  styling: 'Засоби для укладки',
  dryshampoo: 'Сухі шампуні',
  hairloss: 'Засоби проти випадіння волосся',
};

function Header({ setSearchTerm }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResultsUpdated, setIsResultsUpdated] = useState(false);
  const [isInitialOpen, setIsInitialOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [showText, setShowText] = useState(false);
  const [user, setUser] = useState(null);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const resultsRef = useRef(null);
  const contextMenuRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
        setShowContextMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = useCallback(() => {
    console.log('handleSearch called with searchQuery:', searchQuery);
    if (searchQuery.trim()) {
      setSearchTerm(searchQuery);
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setShowResults(false);
      setIsLoading(false);
      setIsResultsUpdated(false);
      setIsInitialOpen(true);
      setShowText(false);
    }
  }, [searchQuery, setSearchTerm, navigate]);

  const handleInputChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      setIsLoading(true);
      setIsResultsUpdated(false);
      try {
        const response = await axios.get('https://price-ua-react-backend.onrender.com/products', {
          params: { search: query },
        });

        setSearchResults(response.data.groupedResults || []);
        setShowResults(true);
        setIsResultsUpdated(true);
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClearSearch = () => {
    console.log('handleClearSearch called');
    setSearchQuery('');
    if (searchInputRef.current) {
      console.log('Clearing input value');
      searchInputRef.current.value = '';
    } else {
      console.warn('searchInputRef.current is null');
    }
    setSearchResults([]);
    setShowResults(false);
    setSearchTerm('');
    setIsLoading(false);
    setIsResultsUpdated(false);
    setIsInitialOpen(true);
    setShowText(false);
  };

  const handleCloseResults = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowResults(false);
      setIsClosing(false);
      setIsInitialOpen(true);
      setShowText(false);
    }, 200);
  };

  const handleLinkClick = (path) => {
    console.log('handleLinkClick called with path:', path);
    setIsClosing(true);
    handleClearSearch();
    setTimeout(() => {
      setIsClosing(false);
      handleCloseResults();
      navigate(path);
    }, 200);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setShowContextMenu(false);
    navigate('/');
  };

  const toggleContextMenu = () => {
    setShowContextMenu(!showContextMenu);
  };

  useEffect(() => {
    if (isResultsUpdated && !isLoading && searchResults.length > 0) {
      setShowText(false);
      const timer = setTimeout(() => {
        setShowText(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setShowText(false);
    }
  }, [isResultsUpdated, isLoading, searchResults]);

  useEffect(() => {
    console.log('searchInputRef.current:', searchInputRef.current);
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
              ref={searchInputRef}
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
            <div
              className={`search-results ${isInitialOpen ? 'initial-open' : ''} ${isClosing ? 'closing' : ''}`}
              ref={resultsRef}
            >
              {searchResults.slice(0, 2).map((category, index) => (
                <div key={`${category.category}-${searchQuery}`} className="search-category">
                  <span
                    className={`category-title ${showText && !isLoading ? 'animate-text' : ''}`}
                    onClick={() => handleLinkClick(`/category/${category.category}`)}
                    style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
                  >
                    {categoryNames[category.category] || category.category} ({category.count})
                  </span>
                  <ul className="product-list">
                    {category.products.slice(0, 5).map((product, idx) => (
                      <li key={`${product.id}-${searchQuery}`}>
                        <span
                          className={`product-link ${showText && !isLoading ? 'animate-text' : ''}`}
                          onClick={() => handleLinkClick(`/product/${product.id}`)}
                          style={{ animationDelay: `${index * 0.1 + idx * 0.05 + 0.2}s`, cursor: 'pointer' }}
                        >
                          {`${product.name} (${product.specs.volume || 'Н/Д'})`}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {category.products.length > 5 && (
                    <button
                      className={`more-products ${showText && !isLoading ? 'animate-text' : ''}`}
                      onClick={() => handleSearch()}
                      style={{ animationDelay: `${index * 0.1 + 0.45}s`, cursor: 'pointer' }}
                    >
                      Подивитись інші товари ({category.products.length - 5})
                    </button>
                  )}
                </div>
              ))}
              {searchResults.length > 0 && (
                <span
                  className={`view-all ${showText && !isLoading ? 'animate-text' : ''}`}
                  onClick={() => handleLinkClick(`/search?query=${encodeURIComponent(searchQuery)}`)}
                  style={{ animationDelay: '0.5s', cursor: 'pointer' }}
                >
                  Переглянути усі товари ({searchResults.reduce((sum, cat) => sum + cat.count, 0)})
                </span>
              )}
            </div>
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
          {user ? (
            <div className="user-profile">
              <span onClick={toggleContextMenu} className="nickname" style={{ cursor: 'pointer' }}>
                {user.nickname}
              </span>
              {showContextMenu && (
                <div className="context-menu" ref={contextMenuRef}>
                  <div
                    className="context-menu-item"
                    onClick={() => {
                      navigate('/account');
                      setShowContextMenu(false);
                    }}
                  >
                    Аккаунт
                  </div>
                  <div className="context-menu-item" 
                  onClick={() => {
                      navigate('/wishlist');
                      setShowContextMenu(false);
                    }}>
                    Бажане
                  </div>
                  <div className="context-menu-item" onClick={handleLogout}>
                    Вийти
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="login-link">
              Увійти
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;