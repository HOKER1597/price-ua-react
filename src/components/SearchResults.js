import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

function SearchResults({ results, searchQuery, onClose }) {
  const categoryNames = {
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

  const resultsRef = useRef(null);

  // Закриття при кліку поза компонентом
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="search-results" ref={resultsRef}>
      {results.slice(0, 2).map((category, index) => (
        <div key={index} className="search-category">
          <Link
            to={`/category/${category.category}?search=${encodeURIComponent(searchQuery)}`}
            className="category-title"
            onClick={onClose}
          >
            {categoryNames[category.category] || category.category} ({category.count})
          </Link>
          <ul className="product-list">
            {category.products.slice(0, 5).map((product) => (
              <li key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  className="product-link"
                  onClick={onClose}
                >
                  {`${product.name} (${product.specs.volume || 'Н/Д'})`}
                </Link>
              </li>
            ))}
          </ul>
          {category.products.length > 5 && (
            <Link
              to={`/category/${category.category}?search=${encodeURIComponent(searchQuery)}`}
              className="more-products"
              onClick={onClose}
            >
              Подивитись інші товари ({category.products.length - 5})
            </Link>
          )}
        </div>
      ))}
      {results.length > 2 && (
        <Link
          to={`/search?query=${encodeURIComponent(searchQuery)}`}
          className="view-all"
          onClick={onClose}
        >
          Переглянути усі товари ({results.reduce((sum, cat) => sum + cat.count, 0)})
        </Link>
      )}
    </div>
  );
}

export default SearchResults;