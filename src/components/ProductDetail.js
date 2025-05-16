import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Стан для зображень
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);
  const [direction, setDirection] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Стан для збереження товару
  const [isSaved, setIsSaved] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Рефи для скролу
  const featuresRef = useRef(null);
  const descriptionRef = useRef(null);
  const storePricesRef = useRef(null);

  // Токен авторизації та перевірка адміністратора
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user')) || null;
  const isAdmin = user && user.is_admin;

  // Стан для модального вікна видалення
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Завантаження продукту з API
  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://price-ua-react-backend.onrender.com/products/${productId}`);
        setProduct(response.data);
      } catch (err) {
        console.error('Помилка завантаження продукту:', err);
        setError('Не вдалося завантажити товар. Перевірте підключення до сервера.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // Перевірка статусу збереження товару
  const checkSavedStatus = useCallback(async () => {
    if (!token) {
      setIsSaved(false);
      return;
    }
    try {
      const response = await axios.get(`https://price-ua-react-backend.onrender.com/saved-products/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsSaved(response.data.isSaved);
    } catch (err) {
      console.error('Помилка перевірки статусу збереження:', err);
    }
  }, [productId, token]);

  useEffect(() => {
    checkSavedStatus();
  }, [checkSavedStatus]);

  // Масив зображень
  const images = product && product.images && product.images.length > 0 
    ? product.images 
    : ['/img/placeholder.webp'];

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

  // Обробка кліку по сердечку
  const handleSaveToggle = async () => {
    if (!token) {
      setShowLoginPrompt(true);
      return;
    }
    try {
      if (isSaved) {
        await axios.delete(`https://price-ua-react-backend.onrender.com/saved-products/${productId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsSaved(false);
      } else {
        await axios.post(
          'https://price-ua-react-backend.onrender.com/saved-products',
          { productId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setIsSaved(true);
      }
    } catch (err) {
      console.error('Помилка зміни статусу збереження:', err);
    }
  };

  // Обробка кліку по кошику
  const handleTrashClick = () => {
    setShowDeleteModal(true);
  };

  // Обробка кліку по редагуванню
  const handleEditClick = () => {
    navigate(`/admin/product-edit?productId=${productId}`);
  };

  // Обробка підтвердження видалення
  const handleDeleteConfirm = async () => {
    if (!token || !productId) return;

    try {
      await axios.delete(`https://price-ua-react-backend.onrender.com/admin/product/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setShowDeleteModal(false);
      navigate('/products'); // Перенаправлення на список товарів після видалення
    } catch (error) {
      console.error('Помилка видалення товару:', error);
      alert('Не вдалося видалити товар. Спробуйте ще раз.');
      setShowDeleteModal(false);
    }
  };

  // Обробка скасування видалення
  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  // Обробка переходу до логіну
  const handleLoginRedirect = () => {
    navigate('/login');
  };

  // Закриття модального вікна
  const handleCloseModal = () => {
    setShowLoginPrompt(false);
  };

  if (isLoading) {
    return (
      <div className="loading-overlay">
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Завантаження...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!product) {
    return <div className="error-message">Товар не знайдено</div>;
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
    { key: 'Активний компонент', value: product.features?.active_ingredients },
  ].filter(feature => feature.value);

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

  const getMinPrice = () => {
    if (!product.store_prices || product.store_prices.length === 0) return 'Н/Д';
    return Math.min(...product.store_prices.map(sp => sp.price)) + ' грн';
  };

  return (
    <div className="product-detail">
      {/* Вкладки та іконки для адміністратора */}
      <div className="tabs">
        <div className="tabs-left">
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
        {isAdmin && (
          <div className="admin-actions">
            <div
              className="edit-icon-product"
              onClick={handleEditClick}
              title="Редагувати товар"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1976d2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </div>
            <div
              className="trash-icon-product"
              onClick={handleTrashClick}
              title="Видалити товар"
            >
              <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ff0000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
            </div>
          </div>
        )}
      </div>

      <div className="product-content">
        <div className="image-gallery">
          <div className="thumbnail-gallery">
            {images.slice(0, 4).map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  onError={(e) => {
                    console.log(`Помилка завантаження зображення: ${img}`);
                    e.target.src = '/img/placeholder.webp';
                  }}
                />
              </div>
            ))}
            {images.length > 4 && (
              <div className="thumbnail more-images" onClick={() => handleImageClick(4)}>
                <img
                  src={images[4]}
                  alt={`${product.name} more`}
                  onError={(e) => {
                    console.log(`Помилка завантаження зображення: ${images[4]}`);
                    e.target.src = '/img/placeholder.webp';
                  }}
                />
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
                  onError={(e) => {
                    console.log(`Помилка завантаження зображення: ${images[prevImageIndex]}`);
                    e.target.src = '/img/placeholder.webp';
                  }}
                />
              )}
              <img
                src={images[currentImageIndex]}
                alt={`${product.name} ${currentImageIndex + 1}`}
                className={`main-image ${
                  direction === 'right'
                    ? 'slide-in-right'
                    : direction === 'left'
                    ? 'slide-in-left'
                    : ''
                }`}
                onError={(e) => {
                  console.log(`Помилка завантаження зображення: ${images[currentImageIndex]}`);
                  e.target.src = '/img/placeholder.webp';
                }}
              />
            </div>
            {images.length > 1 && (
              <>
                <div className="arrow prev-arrow" onClick={handlePrevImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                  </svg>
                </div>
                <div className="arrow next-arrow" onClick={handleNextImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <div className="product-meta">
            <div className="rating">{renderStars(product.rating || 0)}</div>
            <div className="views">{product.views || 0} переглядів</div>
            <div className="product-code">Код: {product.code || 'Н/Д'}</div>
          </div>
          <div className="price-container">
            <p className="price">{getMinPrice()}</p>
            <button
              className="price-view-button"
              onClick={() => scrollToSection(storePricesRef)}
              aria-label="Перейти до цін у магазинах"
            >
              Перегляд цін
            </button>
            <span
              className={`product-detail-heart ${isSaved ? 'saved' : ''}`}
              onClick={handleSaveToggle}
              aria-label={isSaved ? 'Видалити з бажаного' : 'Додати до бажаного'}
            >
              {isSaved ? (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="#ff6f61" className="heart-svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              ) : (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ff6f61" strokeWidth="2" className="heart-svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              )}
            </span>
          </div>
          <p className="volume">Об'єм: {product.volume || 'Н/Д'}</p>
        </div>
      </div>

      <div className="product-features" ref={featuresRef}>
        <h3>Характеристики</h3>
        {featureList.length > 0 ? (
          <ul>
            {featureList.map((feature, index) => (
              <li key={index}>
                <span className="feature-key">{feature.key}</span>
                <span className="feature-value">{feature.value}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Характеристики відсутні</p>
        )}
      </div>

      <div className="product-description" ref={descriptionRef}>
        <h3>Опис товару</h3>
        <div className="description-section">
          <h4>Опис</h4>
          {product.description_full ? (
            renderFeatureDescription(product.description_full)
          ) : (
            <p>Опис відсутній</p>
          )}
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

      <div className="store-prices" ref={storePricesRef}>
        <h3>Ціни в різних магазинах</h3>
        <div className="store-list">
          {product.store_prices?.length > 0 ? (
            product.store_prices.map((store, index) => (
              <div key={index} className="store-item">
                <div className="store-name-logo">
                  <p className="store-name">{store.name}</p>
                  <img
                    src={store.logo}
                    alt={`${store.name} logo`}
                    className="store-logo"
                    onError={(e) => {
                      console.log(`Помилка завантаження логотипу: ${store.logo}`);
                      e.target.src = '/img/placeholder.webp';
                    }}
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
            ))
          ) : (
            <p>Ціни в магазинах відсутні</p>
          )}
        </div>
      </div>

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
                  onError={(e) => {
                    console.log(`Помилка завантаження зображення: ${images[prevImageIndex]}`);
                    e.target.src = '/img/placeholder.webp';
                  }}
                />
              )}
              <img
                src={images[currentImageIndex]}
                alt={`${product.name} fullscreen ${currentImageIndex + 1}`}
                className={`fullscreen-image ${
                  direction === 'right'
                    ? 'slide-in-right'
                    : direction === 'left'
                    ? 'slide-in-left'
                    : ''
                }`}
                onError={(e) => {
                  console.log(`Помилка завантаження зображення: ${images[currentImageIndex]}`);
                  e.target.src = '/img/placeholder.webp';
                }}
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
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
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
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
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

      {showLoginPrompt && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Будь ласка, увійдіть, щоб додати товар до бажаного.</p>
            <div className="modal-buttons">
              <button onClick={handleLoginRedirect}>Увійти</button>
              <button onClick={handleCloseModal}>Скасувати</button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="delete-modal-overlay">
          <div className="delete-modal">
            <p>Ви точно хочете видалити товар "{product.name}({product.id})"?</p>
            <div className="delete-modal-buttons">
              <button className="delete-confirm-btn" onClick={handleDeleteConfirm}>Так</button>
              <button className="delete-cancel-btn" onClick={handleDeleteCancel}>Ні</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;