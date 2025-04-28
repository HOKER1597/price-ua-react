import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';
import products from '../data/products';

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

const getRandomItems = (array, numItems) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(numItems, array.length));
};

// Filter products with a rating
const recommendedProductsAll = products.filter(product => product.rating);
const recommendedProducts = getRandomItems(recommendedProductsAll, 6);

// Define the companies (8 existing + 10 new placeholders)
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

// Дані підкатегорій
const subcategoriesData = {
  makeup: [
    {
      category: 'Очі',
      categoryId: 'eyes',
      items: [
        { id: 'mascara', name: 'Туш для вій' },
        { id: 'eyeliner', name: 'Підводка для очей' },
        { id: 'eyeshadow', name: 'Тіні для повік' },
        { id: 'eyebrow', name: 'Засоби для брів' },
        { id: 'false-lashes', name: 'Накладні вії' },
      ],
    },
    {
      category: 'Обличчя',
      categoryId: 'face',
      items: [
        { id: 'foundation', name: 'Тональний крем' },
        { id: 'bb-cream', name: 'ББ-крем' },
        { id: 'concealer', name: 'Консилер' },
        { id: 'powder', name: 'Пудра' },
        { id: 'blush', name: 'Рум’яна' },
        { id: 'highlighter', name: 'Хайлайтер' },
      ],
    },
    {
      category: 'Губи',
      categoryId: 'lips',
      items: [
        { id: 'lipstick', name: 'Помада' },
        { id: 'lipgloss', name: 'Блиск для губ' },
        { id: 'lipliner', name: 'Олівець для губ' },
      ],
    },
    {
      category: 'Нігті',
      categoryId: 'nails',
      items: [
        { id: 'nail-polish', name: 'Лак для нігтів' },
        { id: 'nail-care', name: 'Догляд за нігтями' },
        { id: 'gel-polish', name: 'Гель-лак' },
      ],
    },
    {
      category: 'Зняття макіяжу',
      categoryId: 'makeup-removal',
      items: [
        { id: 'micellar-water', name: 'Міцелярна вода' },
        { id: 'makeup-remover', name: 'Засоби для зняття макіяжу' },
        { id: 'cleansing-oil', name: 'Гідрофільна олія' },
      ],
    },
  ],
  face: [
    {
      category: 'Очищення',
      categoryId: 'cleansing',
      items: [
        { id: 'cleansing-gel', name: 'Гель для вмивання' },
        { id: 'micellar-water', name: 'Міцелярна вода' },
        { id: 'cleansing-foam', name: 'Пінка для вмивання' },
        { id: 'scrub', name: 'Скраб' },
      ],
    },
    {
      category: 'Зволоження',
      categoryId: 'moisturizing',
      items: [
        { id: 'moisturizer', name: 'Зволожувальний крем' },
        { id: 'serum', name: 'Сироватка' },
        { id: 'face-mask', name: 'Маска для обличчя' },
      ],
    },
    {
      category: 'Антивіковий догляд',
      categoryId: 'anti-aging',
      items: [
        { id: 'anti-aging-cream', name: 'Антивіковий крем' },
        { id: 'eye-cream', name: 'Крем для зони навколо очей' },
        { id: 'night-cream', name: 'Нічний крем' },
      ],
    },
    {
      category: 'Спеціальний догляд',
      categoryId: 'special-care',
      items: [
        { id: 'acne-treatment', name: 'Засоби від акне' },
        { id: 'peeling', name: 'Пілінги' },
        { id: 'sun-protection', name: 'Сонцезахисні засоби' },
      ],
    },
  ],
  hair: [
    {
      category: 'Шампуні',
      categoryId: 'shampoos',
      items: [
        { id: 'shampoo-dry', name: 'Для сухого волосся', type: 'Для сухого волосся' },
        { id: 'shampoo-oily', name: 'Для жирного волосся', type: 'Для жирного волосся' },
        { id: 'shampoo-colored', name: 'Для фарбованого волосся', type: 'Для фарбованого волосся' },
        { id: 'damaged-hair', name: 'Для пошкодженого волосся', type: 'Для пошкодженого волосся' },
        { id: 'fluffy-hair', name: 'Для пухнастого волосся', type: 'Для пухнастого волосся' },
        { id: 'dry-shampoo', name: 'Сухий шампунь', type: 'Сухий шампунь' },
        { id: 'all-hair-types', name: 'Для всіх типів волосся', type: 'Для всіх типів волосся' },
        { id: 'for-volume', name: 'Для об’єму', type: 'Для об’єму' },
        { id: 'anti-dandruff', name: 'Проти лупи', type: 'Проти лупи' },
      ],
    },
    {
      category: 'Кондиціонери',
      categoryId: 'conditioners',
      items: [
        { id: 'conditioner-repair', name: 'Відновлювальний кондиціонер' },
        { id: 'conditioner-volume', name: 'Для об’єму' },
        { id: 'conditioner-moisture', name: 'Зволожувальний' },
      ],
    },
    {
      category: 'Маски',
      categoryId: 'masks',
      items: [
        { id: 'hair-mask-repair', name: 'Відновлювальна маска' },
        { id: 'hair-mask-moisture', name: 'Зволожувальна маска' },
        { id: 'hair-mask-nourish', name: 'Живильна маска' },
      ],
    },
    {
      category: 'Стайлінг',
      categoryId: 'styling',
      items: [
        { id: 'hair-spray', name: 'Лак для волосся' },
        { id: 'hair-mousse', name: 'Мус для укладки' },
        { id: 'heat-protection', name: 'Термозахист' },
      ],
    },
  ],
  body: [
    {
      category: 'Очищення',
      categoryId: 'body-cleansing',
      items: [
        { id: 'shower-gel', name: 'Гель для душу' },
        { id: 'body-scrub', name: 'Скраб для тіла' },
        { id: 'bath-foam', name: 'Піна для ванни' },
      ],
    },
    {
      category: 'Зволоження та живлення',
      categoryId: 'body-moisturizing',
      items: [
        { id: 'body-cream', name: 'Крем для тіла' },
        { id: 'body-lotion', name: 'Лосьйон для тіла' },
        { id: 'body-oil', name: 'Олія для тіла' },
      ],
    },
    {
      category: 'Догляд за руками та ногами',
      categoryId: 'hands-feet',
      items: [
        { id: 'hand-cream', name: 'Крем для рук' },
        { id: 'foot-cream', name: 'Крем для ніг' },
        { id: 'cuticle-care', name: 'Догляд за кутикулою' },
      ],
    },
    {
      category: 'Спеціальний догляд',
      categoryId: 'body-special-care',
      items: [
        { id: 'anti-cellulite', name: 'Антицелюлітні засоби' },
        { id: 'deodorant', name: 'Дезодоранти' },
        { id: 'sun-protection-body', name: 'Сонцезахисні засоби для тіла' },
      ],
    },
  ],
  dermocosmetics: [
    {
      category: 'Очищення шкіри',
      categoryId: 'dermo-cleansing',
      items: [
        { id: 'dermo-cleansing-gel', name: 'Гель для вмивання' },
        { id: 'dermo-micellar-water', name: 'Міцелярна вода' },
        { id: 'dermo-cleansing-foam', name: 'Пінка для вмивання' },
      ],
    },
    {
      category: 'Догляд за проблемною шкірою',
      categoryId: 'problem-skin',
      items: [
        { id: 'acne-treatment-dermo', name: 'Засоби від акне' },
        { id: 'anti-redness', name: 'Засоби проти почервонінь' },
        { id: 'sebum-control', name: 'Засоби для контролю себуму' },
      ],
    },
    {
      category: 'Зволоження та відновлення',
      categoryId: 'dermo-moisturizing',
      items: [
        { id: 'dermo-moisturizer', name: 'Зволожувальний крем' },
        { id: 'dermo-serum', name: 'Сироватка' },
        { id: 'dermo-repair', name: 'Відновлювальний крем' },
      ],
    },
    {
      category: 'Сонцезахист',
      categoryId: 'dermo-sun-protection',
      items: [
        { id: 'dermo-spf-cream', name: 'Сонцезахисний крем' },
        { id: 'dermo-spf-spray', name: 'Сонцезахисний спрей' },
      ],
    },
  ],
  professional: [
    {
      category: 'Професійний догляд за обличчям',
      categoryId: 'pro-face-care',
      items: [
        { id: 'pro-cleansing', name: 'Професійне очищення' },
        { id: 'pro-peeling', name: 'Професійні пілінги' },
        { id: 'pro-mask', name: 'Професійні маски' },
      ],
    },
    {
      category: 'Професійний догляд за волоссям',
      categoryId: 'pro-hair-care',
      items: [
        { id: 'pro-shampoo', name: 'Професійний шампунь' },
        { id: 'pro-conditioner', name: 'Професійний кондиціонер' },
        { id: 'pro-hair-mask', name: 'Професійна маска для волосся' },
      ],
    },
    {
      category: 'Професійний макіяж',
      categoryId: 'pro-makeup',
      items: [
        { id: 'pro-foundation', name: 'Професійний тональний крем' },
        { id: 'pro-eyeshadow', name: 'Професійні тіні' },
        { id: 'pro-lipstick', name: 'Професійна помада' },
      ],
    },
    {
      category: 'Інструменти та аксесуари',
      categoryId: 'pro-tools',
      items: [
        { id: 'pro-brushes', name: 'Професійні пензлі' },
        { id: 'pro-sponges', name: 'Професійні спонжі' },
        { id: 'pro-lash-curlers', name: 'Щипці для вій' },
      ],
    },
  ],
  perfumery: [
    {
      category: 'Жіноча парфумерія',
      categoryId: 'women-perfume',
      items: [
        { id: 'women-eau-de-parfum', name: 'Парфумована вода' },
        { id: 'women-eau-de-toilette', name: 'Туалетна вода' },
        { id: 'women-perfume-mist', name: 'Парфумований спрей' },
      ],
    },
    {
      category: 'Чоловіча парфумерія',
      categoryId: 'men-perfume',
      items: [
        { id: 'men-eau-de-parfum', name: 'Парфумована вода' },
        { id: 'men-eau-de-toilette', name: 'Туалетна вода' },
        { id: 'men-aftershave', name: 'Лосьйон після гоління' },
      ],
    },
    {
      category: 'Унісекс парфумерія',
      categoryId: 'unisex-perfume',
      items: [
        { id: 'unisex-eau-de-parfum', name: 'Парфумована вода' },
        { id: 'unisex-eau-de-toilette', name: 'Туалетна вода' },
      ],
    },
    {
      category: 'Аромати для дому',
      categoryId: 'home-fragrance',
      items: [
        { id: 'diffuser', name: 'Аромадифузори' },
        { id: 'scented-candles', name: 'Ароматичні свічки' },
        { id: 'room-spray', name: 'Спрей для приміщення' },
      ],
    },
  ],
};

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
  const carouselIntervalRef = useRef(null);
  const productIntervalRef = useRef(null);
  const totalHeroSlides = carouselImages.length;
  const totalProductSlides = recommendedProducts.length;

  // Function to start or reset the hero carousel timer
  const startCarouselTimer = useCallback(() => {
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
    carouselIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        if (nextSlide >= totalHeroSlides) {
          setTimeout(() => {
            setIsHeroTransitioning(false);
            setCurrentSlide(0);
            setTimeout(() => setIsHeroTransitioning(true), 50);
          }, 500);
          return nextSlide;
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
        if (nextSlide >= totalProductSlides) {
          setTimeout(() => {
            setIsProductTransitioning(false);
            setCurrentProductSlide(0);
            setTimeout(() => setIsProductTransitioning(true), 50);
          }, 500);
          return nextSlide;
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
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Create extended arrays for hero and products carousels
  const extendedHeroImages = [...carouselImages, ...carouselImages.slice(0, 1)];
  const extendedProducts = [...recommendedProducts, ...recommendedProducts.slice(0, 1)];

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
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
                      src={product.image}
                      alt={product.name}
                      className="recommended-image"
                    />
                  </Link>
                  <div className="recommended-details">
                    <Link to={`/product/${product.id}`} className="recommended-link">
                      <h3 className="recommended-name">{product.name}</h3>
                    </Link>
                    <div className="recommended-rating">
                      {renderStars(product.rating)}
                      <span className="recommended-reviews">({product.views})</span>
                    </div>
                    <div className="recommended-pricing">
                      <span className="recommended-original-price">{product.price} грн</span>
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