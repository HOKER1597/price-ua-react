import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import products from '../data/products';
import './ProductList.css';

function ProductList({ searchTerm }) {
  const { categoryId } = useParams();
  const location = useLocation();
  
  // Отримання параметра 'type' і 'search'
  const queryParams = new URLSearchParams(location.search);
  const initialType = queryParams.get('type') || '';
  const searchQuery = queryParams.get('search') || searchTerm;
  const isSearchPage = location.pathname === '/search'; // Перевірка, чи це сторінка /search

  // Стан для всіх фільтрів
  const [filters, setFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: [],
    categories: [], // Фільтр категорій
  });

  // Стан для вибраних фільтрів
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: initialType ? [initialType] : [],
    categories: categoryId ? [categoryId] : [],
  });

  // Стан для застосованих фільтрів
  const [appliedFilters, setAppliedFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: initialType ? [initialType] : [],
    categories: categoryId ? [categoryId] : [],
  });

  // Стан для відфільтрованих продуктів
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Стан для кількості продуктів у прев’ю
  const [previewProductCount, setPreviewProductCount] = useState(0);

  // Стан для пагінації
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;
  const [isPaginated, setIsPaginated] = useState(true);
  const [startPage, setStartPage] = useState(1);
  const [loadMorePages, setLoadMorePages] = useState(1);

  // Стан для пошуку брендів
  const [brandSearch, setBrandSearch] = useState('');

  // Стан для кастомного діапазону цін
  const [customPriceFrom, setCustomPriceFrom] = useState('');
  const [customPriceTo, setCustomPriceTo] = useState('');

  // Стан для активного фільтру
  const [activeFilter, setActiveFilter] = useState(null);

  // Стан для неактивних фільтрів
  const [disabledFilters, setDisabledFilters] = useState({
    brands: new Set(),
    priceRanges: new Set(),
    volumes: new Set(),
    types: new Set(),
    categories: new Set(),
  });

  // Стан для "Більше/Менше"
  const [showMore, setShowMore] = useState({
    brands: false,
    priceRanges: false,
    volumes: false,
    types: false,
    categories: false,
  });

  // Рефи для позиціонування плашки
  const filterRefs = useRef({});
  const tagRef = useRef(null);

  // Ініціалізація фільтрів
  useEffect(() => {
    // Фільтруємо продукти за пошуковим запитом
    let categoryProducts = products;
    if (searchQuery) {
      categoryProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Якщо є categoryId, фільтруємо за категорією
    if (categoryId) {
      categoryProducts = categoryProducts.filter(
        (product) => product.category === categoryId
      );
    }

    // Застосовуємо початковий фільтр типу, якщо є
    if (initialType) {
      categoryProducts = categoryProducts.filter(
        (product) => product.specs.type === initialType
      );
    }

    // Обчислюємо кількість продуктів для брендів, типів і категорій
    const brandCounts = {};
    const typeCounts = {};
    const categoryCounts = {};
    products
      .filter((product) =>
        searchQuery
          ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
          : true
      )
      .forEach((product) => {
        const brand = product.specs.brand;
        const type = product.specs.type;
        const category = product.category;
        brandCounts[brand] = (brandCounts[brand] || 0) + 1;
        if (type) {
          typeCounts[type] = (typeCounts[type] || 0) + 1;
        }
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      });

    // Ініціалізуємо фільтри
    const allBrands = [...new Set(
      products
        .filter((product) =>
          searchQuery
            ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
            : true
        )
        .map((product) => product.specs.brand)
    )].sort((a, b) => brandCounts[b] - brandCounts[a]);

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

    const allVolumes = [...new Set(
      products
        .filter((product) =>
          searchQuery
            ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
              product.specs.volume
            : product.specs.volume
        )
        .map((product) => product.specs.volume)
    )].sort((a, b) => {
      const numA = parseFloat(a.replace(/[^0-9.]/g, '')) || 0;
      const numB = parseFloat(b.replace(/[^0-9.]/g, '')) || 0;
      return numA - numB;
    });

    const allTypes = [...new Set(
      products
        .filter((product) =>
          searchQuery
            ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
              product.specs.type
            : product.specs.type
        )
        .map((product) => product.specs.type)
    )].sort((a, b) => typeCounts[b] - typeCounts[a]);

    const allCategories = [...new Set(
      products
        .filter((product) =>
          searchQuery
            ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
            : true
        )
        .map((product) => product.category)
    )].sort((a, b) => categoryCounts[b] - categoryCounts[a]);

    setFilters({
      brands: allBrands,
      priceRanges: allPriceRanges,
      volumes: allVolumes,
      types: allTypes,
      categories: allCategories,
    });

    // Встановлюємо початкові відфільтровані продукти
    setFilteredProducts(categoryProducts);
    setPreviewProductCount(categoryProducts.length);

    // Скидаємо пагінацію
    setCurrentPage(1);
    setStartPage(1);
    setLoadMorePages(1);
    setIsPaginated(true);

    // Скидаємо вибрані та застосовані фільтри
    setSelectedFilters({
      brands: [],
      priceRanges: [],
      volumes: [],
      types: initialType ? [initialType] : [],
      categories: categoryId ? [categoryId] : [],
    });
    setAppliedFilters({
      brands: [],
      priceRanges: [],
      volumes: [],
      types: initialType ? [initialType] : [],
      categories: categoryId ? [categoryId] : [],
    });

    // Скидаємо пошук брендів і кастомні ціни
    setBrandSearch('');
    setCustomPriceFrom('');
    setCustomPriceTo('');

    // Скидаємо неактивні фільтри
    setDisabledFilters({
      brands: new Set(),
      priceRanges: new Set(),
      volumes: new Set(),
      types: new Set(),
      categories: new Set(),
    });

    // Автоматично вибираємо чекбокс типу, якщо він є
    if (initialType) {
      setTimeout(() => {
        const typeCheckbox = document.querySelector(`input[name="type"][value="${initialType}"]`);
        if (typeCheckbox) {
          typeCheckbox.checked = true;
        }
      }, 0);
    }
  }, [categoryId, searchQuery, initialType]);

  // Оновлення кількості продуктів і неактивних фільтрів
  useEffect(() => {
    const getFilterOptionProductCount = (filterType, value) => {
      let testFilters = { ...selectedFilters };
      testFilters[filterType] = [value];
      let updatedProducts = products;
      if (searchQuery) {
        updatedProducts = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (testFilters.categories.length > 0) {
        updatedProducts = updatedProducts.filter((product) =>
          testFilters.categories.includes(product.category)
        );
      }

      if (testFilters.brands.length > 0) {
        updatedProducts = updatedProducts.filter((product) =>
          testFilters.brands.includes(product.specs.brand)
        );
      }

      if (customPriceFrom !== '' && customPriceTo !== '' && filterType !== 'priceRanges') {
        const from = parseFloat(customPriceFrom) || 0;
        const to = parseFloat(customPriceTo) || Infinity;
        updatedProducts = updatedProducts.filter((product) =>
          product.price >= from && product.price <= to
        );
      } else if (testFilters.priceRanges.length > 0) {
        updatedProducts = updatedProducts.filter((product) => {
          return testFilters.priceRanges.some((rangeLabel) => {
            const range =
              filters.priceRanges.find((r) => r.label === rangeLabel) || {
                min: 0,
                max: Infinity,
              };
            return product.price >= range.min && product.price < range.max;
          });
        });
      }

      if (testFilters.volumes.length > 0) {
        updatedProducts = updatedProducts.filter((product) =>
          product.specs.volume && testFilters.volumes.includes(product.specs.volume)
        );
      }

      if (testFilters.types.length > 0) {
        updatedProducts = updatedProducts.filter((product) =>
          product.specs.type && testFilters.types.includes(product.specs.type)
        );
      }

      return updatedProducts.length;
    };

    let updatedProducts = products;
    if (searchQuery) {
      updatedProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedFilters.categories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.categories.includes(product.category)
      );
    }

    if (selectedFilters.brands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedFilters.brands.includes(product.specs.brand)
      );
    }

    if (customPriceFrom !== '' && customPriceTo !== '') {
      const from = parseFloat(customPriceFrom) || 0;
      const to = parseFloat(customPriceTo) || Infinity;
      updatedProducts = updatedProducts.filter((product) =>
        product.price >= from && product.price <= to
      );
    } else if (selectedFilters.priceRanges.length > 0) {
      updatedProducts = updatedProducts.filter((product) => {
        return selectedFilters.priceRanges.some((rangeLabel) => {
          const range =
            filters.priceRanges.find((r) => r.label === rangeLabel) || {
              min: 0,
              max: Infinity,
            };
          return product.price >= range.min && product.price < range.max;
        });
      });
    }

    if (selectedFilters.volumes.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.specs.volume && selectedFilters.volumes.includes(product.specs.volume)
      );
    }

    if (selectedFilters.types.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.specs.type && selectedFilters.types.includes(product.specs.type)
      );
    }

    setPreviewProductCount(updatedProducts.length);

    const newDisabledFilters = {
      brands: new Set(),
      priceRanges: new Set(),
      volumes: new Set(),
      types: new Set(),
      categories: new Set(),
    };

    filters.categories.forEach((category) => {
      if (
        !selectedFilters.categories.includes(category) &&
        getFilterOptionProductCount('categories', category) === 0
      ) {
        newDisabledFilters.categories.add(category);
      }
    });

    filters.brands.forEach((brand) => {
      if (
        !selectedFilters.brands.includes(brand) &&
        getFilterOptionProductCount('brands', brand) === 0
      ) {
        newDisabledFilters.brands.add(brand);
      }
    });

    if (customPriceFrom !== '' && customPriceTo !== '') {
      filters.priceRanges.forEach((range) => {
        newDisabledFilters.priceRanges.add(range.label);
      });
    } else {
      filters.priceRanges.forEach((range) => {
        if (
          !selectedFilters.priceRanges.includes(range.label) &&
          getFilterOptionProductCount('priceRanges', range.label) === 0
        ) {
          newDisabledFilters.priceRanges.add(range.label);
        }
      });
    }

    filters.volumes.forEach((volume) => {
      if (
        !selectedFilters.volumes.includes(volume) &&
        getFilterOptionProductCount('volumes', volume) === 0
      ) {
        newDisabledFilters.volumes.add(volume);
      }
    });

    filters.types.forEach((type) => {
      if (
        !selectedFilters.types.includes(type) &&
        getFilterOptionProductCount('types', type) === 0
      ) {
        newDisabledFilters.types.add(type);
      }
    });

    setDisabledFilters(newDisabledFilters);
  }, [
    selectedFilters,
    customPriceFrom,
    customPriceTo,
    searchQuery,
    filters,
  ]);

  // Обробка кліків поза плашкою
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isFilterClick = event.target.closest('.filter-items input[type="checkbox"]');
      const isTagClick = tagRef.current && tagRef.current.contains(event.target);
      if (!isFilterClick && !isTagClick) {
        setActiveFilter(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Обробка вибору фільтру
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[filterType] || [];
      let updatedValues;
      if (currentValues.includes(value)) {
        updatedValues = currentValues.filter((v) => v !== value);
      } else {
        updatedValues = [...currentValues, value];
      }
      const updatedFilters = {
        ...prev,
        [filterType]: updatedValues,
      };
      if (filterType === 'priceRanges') {
        setCustomPriceFrom('');
        setCustomPriceTo('');
      }
      return updatedFilters;
    });
    setActiveFilter({ type: filterType, value });
  };

  // Видалення одного фільтру
  const removeFilter = (filterType, value) => {
    setSelectedFilters((prev) => {
      const updatedValues = (prev[filterType] || []).filter((v) => v !== value);
      const updatedFilters = {
        ...prev,
        [filterType]: updatedValues,
      };
      setAppliedFilters({
        ...prev,
        [filterType]: updatedValues,
      });
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
      categories: [],
    };
    setSelectedFilters(emptyFilters);
    setAppliedFilters(emptyFilters);
    setBrandSearch('');
    setCustomPriceFrom('');
    setCustomPriceTo('');
    setDisabledFilters({
      brands: new Set(),
      priceRanges: new Set(),
      volumes: new Set(),
      types: new Set(),
      categories: new Set(),
    });
    applyFilters(emptyFilters);
  };

  // Застосування фільтрів
  const applyFilters = (customFilters = selectedFilters) => {
    let updatedProducts = products;
    if (searchQuery) {
      updatedProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const safeFilters = {
      brands: customFilters.brands || [],
      priceRanges: customFilters.priceRanges || [],
      volumes: customFilters.volumes || [],
      types: customFilters.types || [],
      categories: customFilters.categories || [],
    };

    if (categoryId) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === categoryId
      );
    }

    if (safeFilters.categories.length > 0 && isSearchPage) {
      updatedProducts = updatedProducts.filter((product) =>
        safeFilters.categories.includes(product.category)
      );
    }

    if (safeFilters.brands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        safeFilters.brands.includes(product.specs.brand)
      );
    }

    if (customPriceFrom !== '' && customPriceTo !== '') {
      const from = parseFloat(customPriceFrom) || 0;
      const to = parseFloat(customPriceTo) || Infinity;
      updatedProducts = updatedProducts.filter((product) =>
        product.price >= from && product.price <= to
      );
    } else if (safeFilters.priceRanges.length > 0 && filters.priceRanges) {
      updatedProducts = updatedProducts.filter((product) => {
        return safeFilters.priceRanges.some((rangeLabel) => {
          const range =
            filters.priceRanges.find((r) => r.label === rangeLabel) || {
              min: 0,
              max: Infinity,
            };
          return product.price >= range.min && product.price < range.max;
        });
      });
    }

    if (safeFilters.volumes.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.specs.volume && safeFilters.volumes.includes(product.specs.volume)
      );
    }

    if (safeFilters.types.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.specs.type && safeFilters.types.includes(product.specs.type)
      );
    }

    if (customFilters === selectedFilters) {
      setAppliedFilters({ ...safeFilters });
    }

    setFilteredProducts(updatedProducts);
    setCurrentPage(1);
    setStartPage(1);
    setLoadMorePages(1);
    setIsPaginated(true);
    setActiveFilter(null);
  };

  // Перемикання "Більше"/"Менше"
  const toggleShowMore = (filterType) => {
    setShowMore((prev) => ({
      ...prev,
      [filterType]: !prev[filterType],
    }));
  };

  // Обробка пошуку брендів
  const handleBrandSearch = (e) => {
    setBrandSearch(e.target.value);
  };

  // Обробка кастомного діапазону цін
  const handleCustomPriceChange = (field, value) => {
    const numValue = value.replace(/[^0-9]/g, '');
    if (field === 'from') {
      setCustomPriceFrom(numValue);
    } else {
      setCustomPriceTo(numValue);
    }
    if (numValue !== '') {
      setSelectedFilters((prev) => ({
        ...prev,
        priceRanges: [],
      }));
      setAppliedFilters((prev) => ({
        ...prev,
        priceRanges: [],
      }));
    }
  };

  // Обмеження кількості елементів для фільтрів
  const getVisibleItems = (items, filterType) => {
    if (!items) return [];

    let filteredItems = items;

    if (filterType === 'brands') {
      filteredItems = items.filter((brand) =>
        brand.toLowerCase().includes(brandSearch.toLowerCase())
      );
      if (showMore.brands || filteredItems.length <= 12) {
        return [...filteredItems].sort((a, b) => a.localeCompare(b));
      }
      return filteredItems.slice(0, 12);
    }

    if (filterType === 'types' || filterType === 'categories') {
      if (showMore[filterType] || items.length <= 6) {
        return [...items].sort((a, b) => a.localeCompare(b));
      }
      return items.slice(0, 6);
    }

    if (showMore[filterType] || items.length <= 12) {
      return items;
    }
    return items.slice(0, 12);
  };

  // Модифікація назви продукту
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
    setCurrentPage((prev) => prev + 1);
    setLoadMorePages((prev) => prev + 1);
    setIsPaginated(false);
  };

  const paginatedProducts = isPaginated
    ? filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
      )
    : filteredProducts.slice(
        (startPage - 1) * productsPerPage,
        (startPage - 1 + loadMorePages) * productsPerPage
      );

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const totalAppliedFilters =
    (appliedFilters.brands?.length || 0) +
    (appliedFilters.priceRanges?.length || 0) +
    (appliedFilters.volumes?.length || 0) +
    (appliedFilters.types?.length || 0) +
    (isSearchPage ? (appliedFilters.categories?.length || 0) : 0) +
    (customPriceFrom !== '' && customPriceTo !== '' ? 1 : 0);

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

  return (
    <div className="product-list">
      <h2>Товари категорії</h2>
      <div className="product-list-container">
        {/* Filters column */}
        <div className="filters">
          <div className="filters-header">
            <h3>Фільтри</h3>
            {totalAppliedFilters > 0 && (
              <div className="selected-filters">
                {isSearchPage &&
                  appliedFilters.categories?.map((category) => (
                    <div key={`category-${category}`} className="selected-filter-tag">
                      <span>{categoryNames[category] || category}</span>
                      <button onClick={() => removeFilter('categories', category)}>
                        ×
                      </button>
                    </div>
                  ))}
                {appliedFilters.brands?.map((brand) => (
                  <div key={`brand-${brand}`} className="selected-filter-tag">
                    <span>{brand}</span>
                    <button onClick={() => removeFilter('brands', brand)}>×</button>
                  </div>
                ))}
                {customPriceFrom !== '' && customPriceTo !== '' ? (
                  <div key="custom-price" className="selected-filter-tag">
                    <span>
                      {customPriceFrom}-{customPriceTo} грн
                    </span>
                    <button
                      onClick={() => {
                        setCustomPriceFrom('');
                        setCustomPriceTo('');
                        applyFilters();
                      }}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  appliedFilters.priceRanges?.map((range) => (
                    <div key={`price-${range}`} className="selected-filter-tag">
                      <span>{range}</span>
                      <button onClick={() => removeFilter('priceRanges', range)}>
                        ×
                      </button>
                    </div>
                  ))
                )}
                {appliedFilters.volumes?.map((volume) => (
                  <div key={`volume-${volume}`} className="selected-filter-tag">
                    <span>{volume}</span>
                    <button onClick={() => removeFilter('volumes', volume)}>×</button>
                  </div>
                ))}
                {appliedFilters.types?.map((type) => (
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

          {/* Category filter (only on /search) */}
          {isSearchPage && searchQuery && (
            <div className="filter-section">
              <h4>Категорія</h4>
              <div className="filter-items filter-items-single-column">
                {getVisibleItems(filters.categories, 'categories').map((category, index) => {
                  const isDisabled = disabledFilters.categories.has(category);
                  return (
                    <label
                      key={index}
                      className={isDisabled ? 'disabled' : ''}
                      ref={(el) => (filterRefs.current[`categories-${category}`] = el)}
                    >
                      <input
                        type="checkbox"
                        name="category"
                        value={category}
                        checked={selectedFilters.categories?.includes(category) || false}
                        onChange={() => handleFilterChange('categories', category)}
                        disabled={isDisabled}
                      />
                      {categoryNames[category] || category}
                    </label>
                  );
                })}
              </div>
              {filters.categories.length > 6 && (
                <button
                  className="show-more-btn"
                  onClick={() => toggleShowMore('categories')}
                >
                  {showMore.categories ? 'Менше ↑' : 'Більше ↓'}
                </button>
              )}
            </div>
          )}

          {/* Brand filter */}
          <div className="filter-section">
            <h4>Бренд</h4>
            <input
              type="text"
              className="brand-search-input"
              placeholder="Пошук бренду..."
              value={brandSearch}
              onChange={handleBrandSearch}
            />
            <div className="filter-items">
              {getVisibleItems(filters.brands, 'brands').map((brand, index) => {
                const isDisabled = disabledFilters.brands.has(brand);
                return (
                  <label
                    key={index}
                    className={`${brand.length > 13 ? 'span-two-columns' : ''} ${
                      isDisabled ? 'disabled' : ''
                    }`}
                    ref={(el) => (filterRefs.current[`brands-${brand}`] = el)}
                  >
                    <input
                      type="checkbox"
                      name="brand"
                      value={brand}
                      checked={selectedFilters.brands?.includes(brand) || false}
                      onChange={() => handleFilterChange('brands', brand)}
                      disabled={isDisabled}
                    />
                    {brand}
                  </label>
                );
              })}
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

          {/* Price filter */}
          <div className="filter-section">
            <h4>Ціна (грн)</h4>
            <div className="custom-price-inputs">
              <input
                type="text"
                placeholder="Від"
                value={customPriceFrom}
                onChange={(e) => handleCustomPriceChange('from', e.target.value)}
                className="price-input"
              />
              <input
                type="text"
                placeholder="До"
                value={customPriceTo}
                onChange={(e) => handleCustomPriceChange('to', e.target.value)}
                className="price-input"
              />
            </div>
            <div className="filter-items">
              {getVisibleItems(filters.priceRanges, 'priceRanges').map((range, index) => {
                const isDisabled = disabledFilters.priceRanges.has(range.label);
                return (
                  <label
                    key={index}
                    className={isDisabled ? 'disabled' : ''}
                    ref={(el) => (filterRefs.current[`priceRanges-${range.label}`] = el)}
                  >
                    <input
                      type="checkbox"
                      name="priceRange"
                      value={range.label}
                      checked={selectedFilters.priceRanges?.includes(range.label) || false}
                      onChange={() => handleFilterChange('priceRanges', range.label)}
                      disabled={isDisabled}
                    />
                    {range.label}
                  </label>
                );
              })}
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

          {/* Volume filter */}
          <div className="filter-section">
            <h4>Об’єм</h4>
            <div className="filter-items">
              {getVisibleItems(filters.volumes, 'volumes').map((volume, index) => {
                const isDisabled = disabledFilters.volumes.has(volume);
                return (
                  <label
                    key={index}
                    className={isDisabled ? 'disabled' : ''}
                    ref={(el) => (filterRefs.current[`volumes-${volume}`] = el)}
                  >
                    <input
                      type="checkbox"
                      name="volume"
                      value={volume}
                      checked={selectedFilters.volumes?.includes(volume) || false}
                      onChange={() => handleFilterChange('volumes', volume)}
                      disabled={isDisabled}
                    />
                    {volume}
                  </label>
                );
              })}
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

          {/* Type filter */}
          <div className="filter-section">
            <h4>Тип</h4>
            <div className="filter-items filter-items-single-column">
              {getVisibleItems(filters.types, 'types').map((type, index) => {
                const isDisabled = disabledFilters.types.has(type);
                return (
                  <label
                    key={index}
                    className={isDisabled ? 'disabled' : ''}
                    ref={(el) => (filterRefs.current[`types-${type}`] = el)}
                  >
                    <input
                      type="checkbox"
                      name="type"
                      value={type}
                      checked={selectedFilters.types?.includes(type) || false}
                      onChange={() => handleFilterChange('types', type)}
                      disabled={isDisabled}
                    />
                    {type}
                  </label>
                );
              })}
            </div>
            {filters.types.length > 6 && (
              <button
                className="show-more-btn"
                onClick={() => toggleShowMore('types')}
              >
                {showMore.types ? 'Менше ↑' : 'Більше ↓'}
              </button>
            )}
          </div>

          {/* Плашка "Показати товари" */}
          {activeFilter && (
            <button
              className="filter-tag"
              ref={tagRef}
              onClick={() => applyFilters()}
              style={{
                top: filterRefs.current[`${activeFilter.type}-${activeFilter.value}`]
                  ? `${
                      filterRefs.current[
                        `${activeFilter.type}-${activeFilter.value}`
                      ].getBoundingClientRect().top -
                      filterRefs.current[
                        `${activeFilter.type}-${activeFilter.value}`
                      ].closest('.filters').getBoundingClientRect().top +
                      filterRefs.current[
                        `${activeFilter.type}-${activeFilter.value}`
                      ].offsetHeight / 2
                    }px`
                  : '0px',
              }}
            >
              Показати товари ({previewProductCount})
            </button>
          )}

          {/* Кнопка "Показати товари" */}
          <button className="apply-filters-btn" onClick={() => applyFilters()}>
            Показати товари ({previewProductCount})
          </button>
        </div>

        {/* Products column */}
        <div className="products">
          <div className="products-list">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product, index) => (
                <Link
                  to={`/product/${product.id}`}
                  key={`${product.id}-${index}`}
                  className="product-card"
                >
                  <h3>{getProductName(product)}</h3>
                  <img
                    src={
                      product.images && product.images.length > 0
                        ? product.images[0]
                        : product.image
                    }
                    alt={product.name}
                  />
                  <p className="price">{product.price} грн</p>
                  <p>{product.description}</p>
                </Link>
              ))
            ) : (
              <p>Товари не знайдено</p>
            )}
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
                    className={`pagination-btn ${
                      currentPage === number ? 'active' : ''
                    }`}
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
      </div>
    </div>
  );
}

export default ProductList;