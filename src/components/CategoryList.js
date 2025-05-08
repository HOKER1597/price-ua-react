import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CategoryList.css';
import { subcategoriesData } from './CategorySubcategories';

// Images for the hero carousel
import news1 from '../img/news1.avif';
import news2 from '../img/news2.avif';
import news3 from '../img/news3.avif';
import news4 from '../img/news4.avif';
import news5 from '../img/news5.avif';
import news6 from '../img/news6.avif';
import news7 from '../img/news7.avif';
import news8 from '../img/news8.avif';
import news9 from '../img/news9.avif';
import news10 from '../img/news10.avif';

// Company logos
import evaLogo from '../img/logo_eva.svg';
import prostorLogo from '../img/logo_prostor.png';
import watsonsLogo from '../img/logo_watsons.jpg';
import rozetkaLogo from '../img/logo_rozetka.png';
import makeupLogo from '../img/logo_makeup.png';
import parfumsLogo from '../img/logo_parfums.png';
import auchanLogo from '../img/logo_auchan.png';
import silpoLogo from '../img/logo_silpo.svg';

const carouselImages = [
  { src: news1, alt: 'Шампуні - Акція' },
  { src: news2, alt: 'Креми - Новинки' },
  { src: news3, alt: 'Маски - Акція' },
  { src: news4, alt: 'Мило - Новинки' },
  { src: news5, alt: 'Скраби - Акція' },
  { src: news6, alt: 'Скраби - Акція' },
  { src: news7, alt: 'Скраби - Акція' },
  { src: news8, alt: 'Скраби - Акція' },
  { src: news9, alt: 'Скраби - Акція' },
  { src: news10, alt: 'Скраби - Акція' },
];

// Define the companies
const companies = [
  { name: 'EVA', logo: evaLogo },
  { name: 'Prostor', logo: prostorLogo },
  { name: 'Watsons', logo: watsonsLogo },
  { name: 'Rozetka', logo: rozetkaLogo },
  { name: 'Makeup', logo: makeupLogo },
  { name: 'Parfums', logo: parfumsLogo },
  { name: 'Auchan', logo: auchanLogo },
  { name: 'Silpo', logo: silpoLogo },
];

// Create an extended array for infinite scrolling
const SLIDE_WIDTH = 159; // Static width of one slide in pixels (955px / 6 ≈ 159px)
const EXTEND_FACTOR = 3; // Repeat the companies array 3 times for smooth infinite scrolling
const extendedCompanies = Array(EXTEND_FACTOR).fill(companies).flat();

// Групи для бічної панелі
const groups = [
  { id: 'makeup', name: 'Макіяж' },
  { id: 'face', name: 'Обличчя' },
  { id: 'hair', name: 'Волосся' },
  { id: 'body', name: 'Тіло' },
  { id: 'dermocosmetics', name: 'Дерматокосметика' },
  { id: 'professional', name: 'Професійна косметика' },
  { id: 'perfumery', name: 'Парфумерія' },
];

function CategoryList() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [currentCompanySlide, setCurrentCompanySlide] = useState(0);
  const [activeGroup, setActiveGroup] = useState(null);
  const [isHeroTransitioning, setIsHeroTransitioning] = useState(true);
  const [isProductTransitioning, setIsProductTransitioning] = useState(true);
  const [isCompanyTransitioning, setIsCompanyTransitioning] = useState(true);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [error, setError] = useState(null);
  const carouselIntervalRef = useRef(null);
  const productIntervalRef = useRef(null);
  const totalHeroSlides = carouselImages.length;
  const totalProductSlides = recommendedProducts.length;

  // Завантаження рекомендованих продуктів з API
  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      setIsLoading(true);
      setIsFadingOut(false);
      setError(null);
      try {
        const response = await axios.get('http://localhost:5000/products', {
          params: {
            limit: 6,
            hasRating: true,
            random: true
          }
        });
        console.log('Recommended Products API Response:', response.data); // Дебагування
        setRecommendedProducts(response.data.products);
      } catch (err) {
        console.error('Помилка завантаження рекомендованих продуктів:', err);
        setError('Не вдалося завантажити рекомендовані продукти.');
      } finally {
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 300); // Match the fadeOutOverlay animation duration
        }, 0);
      }
    };

    fetchRecommendedProducts();
  }, []);

  // Function to start or reset the hero carousel timer
  const startCarouselTimer = useCallback(() => {
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
    carouselIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        if (prev >= totalHeroSlides - 1) {
          setTimeout(() => {
            setIsHeroTransitioning(false);
            setCurrentSlide(0);
            setTimeout(() => setIsHeroTransitioning(true), 50);
          }, 500);
          return 0;
        }
        return nextSlide;
      });
    }, 4000);
  }, [totalHeroSlides]);

  // Function to start or reset the product carousel timer
  const startProductTimer = useCallback(() => {
    if (productIntervalRef.current) {
      clearInterval(productIntervalRef.current);
    }
    productIntervalRef.current = setInterval(() => {
      setCurrentProductSlide((prev) => {
        const nextSlide = prev + 1;
        if (prev >= totalProductSlides - 1) {
          setTimeout(() => {
            setIsProductTransitioning(false);
            setCurrentProductSlide(0);
            setTimeout(() => setIsProductTransitioning(true), 50);
          }, 500);
          return 0;
        }
        return nextSlide;
      });
    }, 4000);
  }, [totalProductSlides]);

  // Start timers on mount
  useEffect(() => {
    startCarouselTimer();
    startProductTimer();
    return () => {
      clearInterval(carouselIntervalRef.current);
      clearInterval(productIntervalRef.current);
    };
  }, [startCarouselTimer, startProductTimer]);

  // Handle manual navigation for hero carousel and reset timer
  const goToSlide = (index) => {
    setIsHeroTransitioning(true);
    setCurrentSlide(index);
    startCarouselTimer();
  };

  // Handle manual navigation for product carousel and reset timer
  const goToProductSlide = (index) => {
    setIsProductTransitioning(true);
    setCurrentProductSlide(index);
    startProductTimer();
  };

  // Handle navigation for companies carousel (infinite scrolling)
  const goToNextCompanySlide = () => {
    setIsCompanyTransitioning(true);
    setCurrentCompanySlide((prev) => {
      const nextSlide = prev + 1;
      // When reaching the middle set of companies, reset to the first set without animation
      if (nextSlide === companies.length) {
        setTimeout(() => {
          setIsCompanyTransitioning(false);
          setCurrentCompanySlide(0);
          setTimeout(() => setIsCompanyTransitioning(true), 50);
        }, 500);
      }
      return nextSlide;
    });
  };

  const goToPrevCompanySlide = () => {
    setIsCompanyTransitioning(true);
    setCurrentCompanySlide((prev) => {
      const prevSlide = prev - 1;
      // When reaching the start, jump to the last set without animation
      if (prevSlide < 0) {
        const lastPosition = companies.length - 1;
        setTimeout(() => {
          setIsCompanyTransitioning(false);
          setCurrentCompanySlide(lastPosition);
          setTimeout(() => setIsCompanyTransitioning(true), 50);
        }, 500);
        return lastPosition;
      }
      return prevSlide;
    });
  };

  // Handle mouse enter to show dropdown
  const handleMouseEnter = (groupId) => {
    setActiveGroup(groupId);
  };

  // Handle mouse leave to close dropdown
  const handleMouseLeave = () => {
    setActiveGroup(null);
  };

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < Math.round(rating) ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Get product price (minimum from store_prices)
  const getProductPrice = (storePrices) => {
    if (!storePrices || storePrices.length === 0) return 'Н/Д';
    return Math.min(...storePrices.map(sp => sp.price));
  };

  // Create extended arrays for hero and products carousels
  const extendedHeroImages = [...carouselImages, ...carouselImages.slice(0, 1)];
  const extendedProducts = [...recommendedProducts, ...recommendedProducts.slice(0, 1)];

  // Відображення спінера або помилки
  if (isLoading) {
    return (
      <div className={`loading-overlay ${isFadingOut ? 'fade-out' : ''}`}>
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Завантаження...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="category-list">
      <div className="main-content">
        <div
          className="categories-container"
          onMouseLeave={handleMouseLeave}
        >
          <div className="categories-sidebar">
            {groups.map(group => (
              <div
                key={group.id}
                className="category-group"
                onMouseEnter={() => handleMouseEnter(group.id)}
              >
                <Link
                  to={`/subcategories/${group.id}`}
                  className="group-name-wrapper"
                >
                  <span className="group-name">{group.name}</span>
                </Link>
              </div>
            ))}
          </div>
          {activeGroup && (
            <div className="dropdown active">
              <div className="dropdown-content">
                {subcategoriesData[activeGroup]?.map((subcategory, index) => (
                  <div key={index} className="subcategory-group">
                    <Link
                      to={`/category/${subcategory.categoryId}`}
                      className="subcategory-title"
                    >
                      {subcategory.category}
                    </Link>
                    <ul className="subcategory-list">
                      {subcategory.items.map(item => (
                        <li key={item.id}>
                          <Link
                            to={`/category/${subcategory.categoryId}${item.type ? `?type=${encodeURIComponent(item.type)}` : ''}`}
                            className="subcategory-link"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="subcategory-group">
                  <Link
                    to={`/subcategories/${activeGroup}`}
                    className="subcategory-title all-categories"
                  >
                    Усі категорії
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hero-carousel">
          <div className="carousel-wrapper">
            <div
              className={`carousel-inner ${!isHeroTransitioning ? 'no-transition' : ''}`}
              style={{ transform: ` parents: translateX(-${currentSlide * 100}%)` }}
            >
              {extendedHeroImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="carousel-image"
                  />
                </div>
              ))}
            </div>
            <div className="carousel-dots">
              {carouselImages.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide % totalHeroSlides ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
          <div className="companies-carousel">
            <h2 className="companies-header">Компанії, з якими ми працюємо</h2>
            <div className="companies-wrapper">
              <button className="companies-nav prev" onClick={goToPrevCompanySlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="companies-viewport">
                <div
                  className={`companies-inner ${!isCompanyTransitioning ? 'no-transition' : ''}`}
                  style={{ transform: `translateX(-${currentCompanySlide * SLIDE_WIDTH}px)` }}
                >
                  {extendedCompanies.map((company, index) => (
                    <div key={`${company.name}-${index}`} className="company-slide">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="company-logo"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button className="companies-nav next" onClick={goToNextCompanySlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="recommended-products">
          <div className="recommended-header">Рекомендації</div>
          <div className="recommended-wrapper">
            <div
              className={`recommended-inner ${!isProductTransitioning ? 'no-transition' : ''}`}
              style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}
            >
              {extendedProducts.map((product, index) => (
                <div key={index} className="recommended-slide">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.images[0] || '/img/placeholder.webp'}
                      alt={product.name}
                      className="recommended-image"
                      onError={(e) => {
                        console.log(`Помилка завантаження зображення: ${product.images[0]}`);
                        e.target.src = '/img/placeholder.webp';
                      }}
                    />
                  </Link>
                  <div className="recommended-details">
                    <Link to={`/product/${product.id}`} className="recommended-link">
                      <h3 className="recommended-name">{product.name}</h3>
                    </Link>
                    <div className="recommended-rating">
                      {renderStars(product.rating || 0)}
                      <span className="recommended-reviews">({product.views || 0})</span>
                    </div>
                    <div className="recommended-pricing">
                      <span className="recommended-original-price">{getProductPrice(product.store_prices)} грн</span>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <button className="recommended-add-to-cart">
                        Переглянути товар
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="recommended-dots">
            {recommendedProducts.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentProductSlide % totalProductSlides ? 'active' : ''}`}
                onClick={() => goToProductSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;