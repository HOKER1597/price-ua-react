import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import './ProductDetail.css';

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  // Стан для зображень
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);
  const [direction, setDirection] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Рефи для скролу
  const featuresRef = useRef(null);
  const descriptionRef = useRef(null);
  const storePricesRef = useRef(null);

  // Масив зображень
  const images = product ? (product.images || [product.image]) : [];

  // Обробка стрілок
  const handlePrevImage = useCallback(
    (e) => {
      e.stopPropagation();
      setDirection('left');
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setTimeout(() => {
        setPrevImageIndex(null);
        setDirection(null);
      }, 500);
    },
    [currentImageIndex, images.length]
  );

  const handleNextImage = useCallback(
    (e) => {
      e.stopPropagation();
      setDirection('right');
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setTimeout(() => {
        setPrevImageIndex(null);
        setDirection(null);
      }, 500);
    },
    [currentImageIndex, images.length]
  );

  // Підтримка клавіатури
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e) => {
      if (!isFullScreen) return;
      if (e.key === 'ArrowLeft') {
        handlePrevImage(e);
      } else if (e.key === 'ArrowRight') {
        handleNextImage(e);
      } else if (e.key === 'Escape') {
        setIsFullScreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreen, product, handlePrevImage, handleNextImage]);

  if (!product) {
    return <div>Товар не знайдено</div>;
  }

  const handleImageClick = (index) => {
    if (index !== currentImageIndex) {
      setDirection(index > currentImageIndex ? 'right' : 'left');
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex(index);
      setTimeout(() => {
        setPrevImageIndex(null);
        setDirection(null);
      }, 500);
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (isFullScreen) {
      setPrevImageIndex(null);
      setDirection(null);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star full">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">☆</span>);
      }
    }
    return stars;
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Список характеристик
  const featureList = [
    { key: 'Бренд', value: product.features?.brand },
    { key: 'Країна виробництва', value: product.features?.country },
    { key: 'Вид', value: product.features?.type },
    { key: 'Клас', value: product.features?.class },
    { key: 'Тип волосся / проблема', value: product.features?.hairType },
    { key: 'Особливості', value: product.features?.features },
    { key: 'Група товару', value: product.features?.category },
    { key: 'Призначення', value: product.features?.purpose },
    { key: 'Стать', value: product.features?.gender },
    { key: 'Активний компонент', value: product.features?.activeIngredients },
  ];

  // Парсинг features.description
  const renderFeatureDescription = (desc) => {
    if (!desc) return null;

    const sections = desc.split('\n\n');
    return sections.map((section, index) => {
      if (section.startsWith('**') && section.endsWith('**')) {
        const title = section.slice(2, -2);
        return <h4 key={index} className="description-section-title">{title}</h4>;
      }
      return <p key={index} className="description-section-text">{section}</p>;
    });
  };

  return (
    <div className="product-detail">
      {/* Вкладки */}
      <div className="tabs">
        <button
          className="tab-button"
          onClick={() => scrollToSection(featuresRef)}
          aria-label="Перейти до характеристик"
        >
          Характеристики
        </button>
        <button
          className="tab-button"
          onClick={() => scrollToSection(descriptionRef)}
          aria-label="Перейти до опису товару"
        >
          Опис товару
        </button>
        <button
          className="tab-button"
          onClick={() => scrollToSection(storePricesRef)}
          aria-label="Перейти до цін у магазинах"
        >
          Ціни в магазинах
        </button>
      </div>

      <div className="product-content">
        {/* Блок із зображеннями */}
        <div className="image-gallery">
          <div className="thumbnail-gallery">
            {images.slice(0, 4).map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              >
                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} />
              </div>
            ))}
            {images.length > 4 && (
              <div className="thumbnail more-images" onClick={() => handleImageClick(4)}>
                <img src={images[4]} alt={`${product.name} more`} />
                <span className="more-count">+{images.length - 4}</span>
              </div>
            )}
          </div>
          <div className="main-image-wrapper" onClick={toggleFullScreen}>
            <div className="image-container">
              {prevImageIndex !== null && (
                <img
                  src={images[prevImageIndex]}
                  alt={`${product.name} ${prevImageIndex + 1}`}
                  className={`main-image main-image-prev ${
                    direction === 'right' ? 'slide-out-left' : 'slide-out-right'
                  }`}
                />
              )}
              <img
                src={images[currentImageIndex]}
                alt={`${product.name} ${currentImageIndex + 1}`}
                className={`main-image ${
                  direction === 'right' ? 'slide-in-right' : direction === 'left' ? 'slide-in-left' : ''
                }`}
              />
            </div>
            {images.length > 1 && (
              <>
                <div className="arrow prev-arrow" onClick={handlePrevImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                  </svg>
                </div>
                <div className="arrow next-arrow" onClick={handleNextImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Інформація про продукт */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <div className="product-meta">
            <div className="rating">{renderStars(product.rating || 0)}</div>
            <div className="views">{product.views || 0} переглядів</div>
            <div className="product-code">Код: {product.code || 'Н/Д'}</div>
          </div>
          <div className="price-container">
            <p className="price">{product.price} грн</p>
            <button
              className="price-view-button"
              onClick={() => scrollToSection(storePricesRef)}
              aria-label="Перейти до цін у магазинах"
            >
              Перегляд цін
            </button>
          </div>
          <p className="volume">Об'єм: {product.specs.volume || 'Н/Д'}</p>
        </div>
      </div>

      {/* Характеристики */}
      <div className="product-features" ref={featuresRef}>
        <h3>Характеристики</h3>
        <ul>
          {featureList.map((feature, index) => (
            <li key={index}>
              <span className="feature-key">{feature.key}</span>
              <span className="feature-value">{feature.value || 'Н/Д'}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Опис товару */}
      <div className="product-description" ref={descriptionRef}>
        <h3>Опис товару</h3>
        <div className="description-section">
          <h4>Опис</h4>
          <p>{product.description || 'Н/Д'}</p>
          {product.features?.description && renderFeatureDescription(product.features.description)}
        </div>
        <div className="description-section">
          <h4>Склад</h4>
          <p>{product.composition || 'Н/Д'}</p>
        </div>
        <div className="description-section">
          <h4>Використання</h4>
          <p>{product.usage || 'Н/Д'}</p>
        </div>
      </div>

      {/* Ціни в магазинах */}
      <div className="store-prices" ref={storePricesRef}>
        <h3>Ціни в різних магазинах</h3>
        <div className="store-list">
          {product.storePrices?.map((store, index) => (
            <div key={index} className="store-item">
              <div className="store-name-logo">
                <p className="store-name">{store.name}</p>
                <img
                  src={store.logo}
                  alt={`${store.name} logo`}
                  className="store-logo"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/60')}
                />
              </div>
              <div className="store-details">
                  <p className="store-years">✓ З нами більше {store.yearsWithUs}-ти років</p>
                <p className="store-delivery">• Доставка: {store.delivery}</p>
              </div>
              <div className="store-price-buy">
                <p className="store-price">{store.price} грн</p>
                <a href={store.link || '#'} target="_blank" rel="noopener noreferrer">
                  <button className="buy-button">Купити</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Повноекранний режим */}
      {isFullScreen && (
        <div className="fullscreen-modal" onClick={toggleFullScreen}>
          <div className="fullscreen-content">
            <div className="image-container">
              {prevImageIndex !== null && (
                <img
                  src={images[prevImageIndex]}
                  alt={`${product.name} fullscreen ${prevImageIndex + 1}`}
                  className={`fullscreen-image fullscreen-image-prev ${
                    direction === 'right' ? 'slide-out-left' : 'slide-out-right'
                  }`}
                />
              )}
              <img
                src={images[currentImageIndex]}
                alt={`${product.name} fullscreen ${currentImageIndex + 1}`}
                className={`fullscreen-image ${
                  direction === 'right' ? 'slide-in-right' : direction === 'left' ? 'slide-in-left' : ''
                }`}
              />
            </div>
            {images.length > 1 && (
              <>
                <div
                  className="fullscreen-arrow fullscreen-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage(e);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                  </svg>
                </div>
                <div
                  className="fullscreen-arrow fullscreen-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage(e);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </div>
              </>
            )}
            <button className="close-fullscreen" onClick={toggleFullScreen}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;