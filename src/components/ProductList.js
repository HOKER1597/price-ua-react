import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import products from '../data/products';
import './ProductList.css';

function ProductList({ searchTerm }) {
  const { categoryId } = useParams();
  const location = useLocation();
  
  // Отримуємо query-параметр type
  const queryParams = new URLSearchParams(location.search);
  const initialType = queryParams.get('type') || '';

  // Початковий стан фільтрів
  const [filters, setFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: [],
  });

  // Зберігаємо початкові повні списки брендів і діапазонів цін
  const [initialFilters, setInitialFilters] = useState({
    brands: [],
    priceRanges: [],
  });

  // Стан для відфільтрованих товарів
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Стан для підрахунку товарів за вибраними фільтрами
  const [previewProductCount, setPreviewProductCount] = useState(0);

  // Стан для пагінації та "Завантажити ще"
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;
  const [isPaginated, setIsPaginated] = useState(true);
  const [startPage, setStartPage] = useState(1);
  const [loadMorePages, setLoadMorePages] = useState(1);

  // Стан для розгортання/згортання фільтрів
  const [showMore, setShowMore] = useState({
    brands: false,
    priceRanges: false,
    volumes: false,
    types: false,
  });

  // Стан для вибраних фільтрів (ще не застосованих)
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: initialType ? [initialType] : [],
  });

  // Стан для застосованих фільтрів (після натискання "Показати товари")
  const [appliedFilters, setAppliedFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: [],
  });

  // Стан для активного фільтру (тип і значення, наприклад { type: 'brands', value: 'Head & Shoulders' })
  const [activeFilter, setActiveFilter] = useState(null);

  // Ref для позиціонування плашки
  const filterRefs = useRef({});
  const tagRef = useRef(null);

  // Функція для оновлення доступних фільтрів на основі відфільтрованих товарів
  const updateAvailableFilters = useCallback((filteredProds) => {
    // Початкові бренди і діапазони цін зберігаємо один раз
    if (initialFilters.brands.length === 0 && initialFilters.priceRanges.length === 0) {
      const allBrands = [...new Set(products
        .filter(product => product.category === categoryId)
        .map(product => product.specs.brand))];
      const allPriceRanges = [
        { label: '0-100', min: 0, max: 100 },
        { label: '100-200', min: 100, max: 200 },
        { label: '200-300', min: 200, max: 300 },
        { label: '300-400', min: 300, max: 400 },
        { label: '400-500', min: 400, max: 500 },
        { label: '500-600', min: 500, max: 600 },
        { label: '600-700', min: 600, max: 700 },
        { label: '700-800', min: 700, max: 800 },
        { label: '800-900', min: 800, max: 900 },
        { label: '900-1000', min: 900, max: 1000 },
        { label: '1000+', min: 1000, max: Infinity },
      ];
      setInitialFilters({
        brands: allBrands,
        priceRanges: allPriceRanges,
      });
    }

    // Оновлюємо тільки volumes і types
    const uniqueVolumes = [...new Set(filteredProds
      .filter(product => product.specs.volume)
      .map(product => product.specs.volume))];
    const uniqueTypes = [...new Set(filteredProds
      .filter(product => product.specs.type)
      .map(product => product.specs.type))];

    setFilters(prev => ({
      ...prev,
      brands: initialFilters.brands.length > 0 ? initialFilters.brands : prev.brands,
      priceRanges: initialFilters.priceRanges.length > 0 ? initialFilters.priceRanges : prev.priceRanges,
      volumes: uniqueVolumes,
      types: uniqueTypes,
    }));
  }, [initialFilters.brands, initialFilters.priceRanges, categoryId]);

  // Оновлення фільтрів і товарів при зміні категорії або пошукового терміну
  useEffect(() => {
    let categoryProducts = products.filter(product => product.category === categoryId)
      .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Якщо є initialType, застосовуємо фільтр за типом
    if (initialType) {
      categoryProducts = categoryProducts.filter(product =>
        product.specs.type === initialType
      );
    }

    // Початкова установка відфільтрованих товарів
    setFilteredProducts(categoryProducts);
    setPreviewProductCount(categoryProducts.length);

    // Оновлюємо доступні фільтри
    updateAvailableFilters(categoryProducts);

    setCurrentPage(1);
    setStartPage(1);
    setLoadMorePages(1);
    setIsPaginated(true);

    // Скидаємо вибрані та застосовані фільтри, зберігаючи initialType
    setSelectedFilters({
      brands: [],
      priceRanges: [],
      volumes: [],
      types: initialType ? [initialType] : [],
    });
    setAppliedFilters({
      brands: [],
      priceRanges: [],
      volumes: [],
      types: initialType ? [initialType] : [],
    });

    // Автоматично вибираємо чекбокс для типу, якщо він є в URL
    if (initialType) {
      setTimeout(() => {
        const typeCheckbox = document.querySelector(`input[name="type"][value="${initialType}"]`);
        if (typeCheckbox) {
          typeCheckbox.checked = true;
        }
      }, 0);
    }
  }, [categoryId, searchTerm, initialType, updateAvailableFilters]);

  // Оновлення кількості товарів і доступних фільтрів при зміні вибраних фільтрів
  useEffect(() => {
    let updatedProducts = products.filter(product => product.category === categoryId);

    // Фільтрація за брендом
    if (selectedFilters.brands?.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        selectedFilters.brands.includes(product.specs.brand)
      );
    }

    // Фільтрація за ціною
    if (selectedFilters.priceRanges?.length > 0) {
      updatedProducts = updatedProducts.filter(product => {
        return selectedFilters.priceRanges.some(rangeLabel => {
          const range = filters.priceRanges?.find(r => r.label === rangeLabel) || 
                        { min: 0, max: Infinity };
          return product.price >= range.min && product.price < range.max;
        });
      });
    }

    // Фільтрація за об’ємом
    if (selectedFilters.volumes?.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        product.specs.volume && selectedFilters.volumes.includes(product.specs.volume)
      );
    }

    // Фільтрація за типом
    if (selectedFilters.types?.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        product.specs.type && selectedFilters.types.includes(product.specs.type)
      );
    }

    // Фільтрація за пошуковим терміном
    updatedProducts = updatedProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setPreviewProductCount(updatedProducts.length);
    updateAvailableFilters(updatedProducts);

    // Очищаємо вибрані фільтри, які більше не доступні
    setSelectedFilters(prev => ({
      brands: prev.brands.filter(brand => filters.brands.includes(brand)),
      priceRanges: prev.priceRanges.filter(range => filters.priceRanges.some(r => r.label === range)),
      volumes: prev.volumes.filter(volume => filters.volumes.includes(volume)),
      types: prev.types.filter(type => filters.types.includes(type)),
    }));
  }, [selectedFilters, categoryId, searchTerm, filters.brands, filters.priceRanges, filters.volumes, filters.types, updateAvailableFilters]);

  // Обробка кліку поза плашкою
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isFilterClick = event.target.closest('.filter-items input[type="checkbox"]');
      const isTagClick = tagRef.current && tagRef.current.contains(event.target);
      if (!isFilterClick && !isTagClick) {
        setActiveFilter(null); // Ховаємо плашку
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Обробка вибору фільтрів
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const currentValues = prev[filterType] || [];
      let updatedValues;
      if (currentValues.includes(value)) {
        updatedValues = currentValues.filter(v => v !== value);
      } else {
        updatedValues = [...currentValues, value];
      }
      return {
        ...prev,
        [filterType]: updatedValues,
      };
    });
    // Встановлюємо активний фільтр
    setActiveFilter({ type: filterType, value });
  };

  // Видалення окремого фільтру
  const removeFilter = (filterType, value) => {
    setSelectedFilters(prev => {
      const updatedValues = (prev[filterType] || []).filter(v => v !== value);
      const updatedFilters = {
        ...prev,
        [filterType]: updatedValues,
      };

      // Оновлюємо застосовані фільтри
      setAppliedFilters({
        ...prev,
        [filterType]: updatedValues,
      });

      // Викликаємо applyFilters з оновленим станом
      applyFilters(updatedFilters);

      return updatedFilters;
    });
  };

  // Скидання всіх фільтрів
  const resetAllFilters = () => {
    const emptyFilters = {
      brands: [],
      priceRanges: [],
      volumes: [],
      types: [],
    };
    setSelectedFilters(emptyFilters);
    setAppliedFilters(emptyFilters);
    // Застосовуємо фільтри після скидання
    applyFilters(emptyFilters);
  };

  // Застосування фільтрів
  const applyFilters = (customFilters = selectedFilters) => {
    let updatedProducts = products.filter(product => product.category === categoryId);

    // Ініціалізуємо порожні масиви, якщо фільтри не визначені
    const safeFilters = {
      brands: customFilters.brands || [],
      priceRanges: customFilters.priceRanges || [],
      volumes: customFilters.volumes || [],
      types: customFilters.types || [],
    };

    // Фільтрація за брендом
    if (safeFilters.brands.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        safeFilters.brands.includes(product.specs.brand)
      );
    }

    // Фільтрація за ціною
    if (safeFilters.priceRanges.length > 0 && filters.priceRanges) {
      updatedProducts = updatedProducts.filter(product => {
        return safeFilters.priceRanges.some(rangeLabel => {
          const range = filters.priceRanges.find(r => r.label === rangeLabel) || 
                        { min: 0, max: Infinity };
          return product.price >= range.min && product.price < range.max;
        });
      });
    }

    // Фільтрація за об’ємом
    if (safeFilters.volumes.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        product.specs.volume && safeFilters.volumes.includes(product.specs.volume)
      );
    }

    // Фільтрація за типом
    if (safeFilters.types.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        product.specs.type && safeFilters.types.includes(product.specs.type)
      );
    }

    // Фільтрація за пошуковим терміном
    updatedProducts = updatedProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Оновлюємо застосовані фільтри, якщо не передані customFilters
    if (customFilters === selectedFilters) {
      setAppliedFilters({ ...safeFilters });
    }

    setFilteredProducts(updatedProducts);
    setCurrentPage(1);
    setStartPage(1);
    setLoadMorePages(1);
    setIsPaginated(true);
    setActiveFilter(null); // Ховаємо плашку після застосування
  };

  // Функція для розгортання/згортання
  const toggleShowMore = (filterType) => {
    setShowMore(prev => ({
      ...prev,
      [filterType]: !prev[filterType],
    }));
  };

  // Обмеження до 12 елементів
  const getVisibleItems = (items, filterType) => {
    if (!items) return [];
    if (showMore[filterType] || items.length <= 12) {
      return items;
    }
    return items.slice(0, 12);
  };

  // Функція для модифікації назви товару
  const getProductName = (product) => {
    return `${product.name} (${product.specs.volume})`;
  };

  // Пагінація
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setStartPage(page);
    setLoadMorePages(1);
    setIsPaginated(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
    setLoadMorePages(prev => prev + 1);
    setIsPaginated(false);
  };

  // Обчислюємо продукти для відображення
  const paginatedProducts = isPaginated
    ? filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
      )
    : filteredProducts.slice(
        (startPage - 1) * productsPerPage,
        (startPage - 1 + loadMorePages) * productsPerPage
      );

  // Генерація номерів сторінок
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Обчислення загальної кількості застосованих фільтрів
  const totalAppliedFilters = (
    (appliedFilters.brands?.length || 0) +
    (appliedFilters.priceRanges?.length || 0) +
    (appliedFilters.volumes?.length || 0) +
    (appliedFilters.types?.length || 0)
  );

  return (
    <div className="product-list">
      <h2>Товари категорії</h2>
      <div className="product-list-container">
        {/* Колонка з фільтрами */}
        <div className="filters">
          <div className="filters-header">
            <h3>Фільтри</h3>
            {totalAppliedFilters > 0 && (
              <div className="selected-filters">
                {appliedFilters.brands?.map(brand => (
                  <div key={`brand-${brand}`} className="selected-filter-tag">
                    <span>{brand}</span>
                    <button onClick={() => removeFilter('brands', brand)}>×</button>
                  </div>
                ))}
                {appliedFilters.priceRanges?.map(range => (
                  <div key={`price-${range}`} className="selected-filter-tag">
                    <span>{range}</span>
                    <button onClick={() => removeFilter('priceRanges', range)}>×</button>
                  </div>
                ))}
                {appliedFilters.volumes?.map(volume => (
                  <div key={`volume-${volume}`} className="selected-filter-tag">
                    <span>{volume}</span>
                    <button onClick={() => removeFilter('volumes', volume)}>×</button>
                  </div>
                ))}
                {appliedFilters.types?.map(type => (
                  <div key={`type-${type}`} className="selected-filter-tag">
                    <span>{type}</span>
                    <button onClick={() => removeFilter('types', type)}>×</button>
                  </div>
                ))}
                {totalAppliedFilters > 1 && (
                  <button className="reset-all-filters" onClick={resetAllFilters}>
                    Скинути всі
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Фільтр за брендом */}
          <div className="filter-section">
            <h4>Бренд</h4>
            <div className="filter-items">
              {getVisibleItems(filters.brands, 'brands').map((brand, index) => (
                <label
                  key={index}
                  className={brand.length > 16 ? 'span-two-columns' : ''}
                  ref={el => (filterRefs.current[`brands-${brand}`] = el)}
                >
                  <input
                    type="checkbox"
                    name="brand"
                    value={brand}
                    checked={selectedFilters.brands?.includes(brand) || false}
                    onChange={() => handleFilterChange('brands', brand)}
                  />
                  {brand}
                </label>
              ))}
            </div>
            {filters.brands.length > 12 && (
              <button
                className="show-more-btn"
                onClick={() => toggleShowMore('brands')}
              >
                {showMore.brands ? 'Менше ↑' : 'Більше ↓'}
              </button>
            )}
          </div>

          {/* Фільтр за ціною */}
          <div className="filter-section">
            <h4>Ціна (грн)</h4>
            <div className="filter-items">
              {getVisibleItems(filters.priceRanges, 'priceRanges').map((range, index) => (
                <label
                  key={index}
                  ref={el => (filterRefs.current[`priceRanges-${range.label}`] = el)}
                >
                  <input
                    type="checkbox"
                    name="priceRange"
                    value={range.label}
                    checked={selectedFilters.priceRanges?.includes(range.label) || false}
                    onChange={() => handleFilterChange('priceRanges', range.label)}
                  />
                  {range.label}
                </label>
              ))}
            </div>
            {filters.priceRanges.length > 12 && (
              <button
                className="show-more-btn"
                onClick={() => toggleShowMore('priceRanges')}
              >
                {showMore.priceRanges ? 'Менше ↑' : 'Більше ↓'}
              </button>
            )}
          </div>

          {/* Фільтр за об’ємом */}
          <div className="filter-section">
            <h4>Об’єм</h4>
            <div className="filter-items">
              {getVisibleItems(filters.volumes, 'volumes').map((volume, index) => (
                <label
                  key={index}
                  ref={el => (filterRefs.current[`volumes-${volume}`] = el)}
                >
                  <input
                    type="checkbox"
                    name="volume"
                    value={volume}
                    checked={selectedFilters.volumes?.includes(volume) || false}
                    onChange={() => handleFilterChange('volumes', volume)}
                  />
                  {volume}
                </label>
              ))}
            </div>
            {filters.volumes.length > 12 && (
              <button
                className="show-more-btn"
                onClick={() => toggleShowMore('volumes')}
              >
                {showMore.volumes ? 'Менше ↑' : 'Більше ↓'}
              </button>
            )}
          </div>

          {/* Фільтр за типом */}
          <div className="filter-section">
            <h4>Тип</h4>
            <div className="filter-items filter-items-single-column">
              {getVisibleItems(filters.types, 'types').map((type, index) => (
                <label
                  key={index}
                  ref={el => (filterRefs.current[`types-${type}`] = el)}
                >
                  <input
                    type="checkbox"
                    name="type"
                    value={type}
                    checked={selectedFilters.types?.includes(type) || false}
                    onChange={() => handleFilterChange('types', type)}
                  />
                  {type}
                </label>
              ))}
            </div>
            {filters.types.length > 12 && (
              <button
                className="show-more-btn"
                onClick={() => toggleShowMore('types')}
              >
                {showMore.types ? 'Менше ↑' : 'Більше ↓'}
              </button>
            )}
          </div>

          {/* Плашка "Показати товари", яка позиціонується динамічно */}
          {activeFilter && (
            <button
              className="filter-tag"
              ref={tagRef}
              onClick={() => applyFilters()}
              style={{
                top: filterRefs.current[`${activeFilter.type}-${activeFilter.value}`]
                  ? `${
                      filterRefs.current[`${activeFilter.type}-${activeFilter.value}`].getBoundingClientRect().top -
                      filterRefs.current[`${activeFilter.type}-${activeFilter.value}`].closest('.filters').getBoundingClientRect().top +
                      filterRefs.current[`${activeFilter.type}-${activeFilter.value}`].offsetHeight / 2
                    }px`
                  : '0px',
              }}
            >
              Показати товари ({previewProductCount})
            </button>
          )}

          {/* Кнопка застосування фільтрів (залишаємо для зручності) */}
          <button className="apply-filters-btn" onClick={() => applyFilters()}>
            Показати товари ({previewProductCount})
          </button>
        </div>

        {/* Колонка з товарами */}
        <div className="products">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product, index) => (
              <Link
                to={`/product/${product.id}`}
                key={`${product.id}-${index}`}
                className="product-card"
              >
                <h3>{getProductName(product)}</h3>
                <p className="price">{product.price} грн</p>
                <img
                  src={product.images && product.images.length > 0 ? product.images[0] : product.image}
                  alt={product.name}
                />
                <p>{product.description}</p>
              </Link>
            ))
          ) : (
            <p>Товари не знайдено</p>
          )}
        </div>
      </div>

      {/* Пагінація та кнопка "Завантажити ще" */}
      {totalProducts > productsPerPage && (
        <div className="pagination-container">
          {((startPage - 1 + loadMorePages) * productsPerPage) < totalProducts && (
            <button className="load-more-btn" onClick={handleLoadMore}>
              Завантажити ще
            </button>
          )}
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Попередня
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            ))}
            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Наступна
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;