import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css';
import { categoryNames } from './Header.js';

function ProductList({ searchTerm }) {
  const { categoryId } = useParams();
  const location = useLocation();

  // Memoize queryParams and derived values to prevent unnecessary re-computation
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const searchQuery = useMemo(
    () => queryParams.get('query') || queryParams.get('search') || searchTerm || '',
    [queryParams, searchTerm]
  );
  const initialType = useMemo(() => queryParams.get('type') || '', [queryParams]);
  const isSearchPage = useMemo(() => location.pathname === '/search', [location.pathname]);

  // Log initialization for debugging
  console.log('ProductList initialized with:', {
    categoryId,
    searchTerm,
    searchQuery,
    initialType,
    isSearchPage,
    location: location.pathname + location.search,
  });

  // State for user and token to avoid localStorage re-parsing
  const [user] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
  const [token] = useState(() => localStorage.getItem('token') || null);

  // State for filters
  const [filters, setFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: [],
    categories: [],
  });

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: initialType ? [initialType] : [],
    categories: categoryId ? [categoryId] : [],
  });

  // State for applied filters
  const [appliedFilters, setAppliedFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: initialType ? [initialType] : [],
    categories: categoryId ? [categoryId] : [],
  });

  // State for products and pagination
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [previewProductCount, setPreviewProductCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;
  const [isPaginated, setIsPaginated] = useState(true);
  const [startPage, setStartPage] = useState(1);
  const [loadMorePages, setLoadMorePages] = useState(1);
  

  // State for brand search
  const [brandSearch, setBrandSearch] = useState('');

  // State for custom price range
  const [customPriceFrom, setCustomPriceFrom] = useState('');
  const [customPriceTo, setCustomPriceTo] = useState('');

  // State for active filter
  const [activeFilter, setActiveFilter] = useState(null);

  // State for disabled filters
  const [disabledFilters, setDisabledFilters] = useState({
    brands: new Set(),
    priceRanges: new Set(),
    volumes: new Set(),
    types: new Set(),
    categories: new Set(),
  });

  // State for "Show More"
  const [showMore, setShowMore] = useState({
    brands: false,
    priceRanges: false,
    volumes: false,
    types: false,
    categories: false,
  });

  // State for loading indicator
  const [isLoading, setIsLoading] = useState(true);

  // State for saved products
  const [savedProducts, setSavedProducts] = useState(new Set());

  // State for login prompt
  const [showLoginPrompt, setShowLoginPrompt] = useState({});

  // Refs for filter positioning
  const filterRefs = useRef({});
  const tagRef = useRef(null);
  const filterItemsRefs = useRef({});

  // Get minimum price from store_prices
  const getMinPrice = (storePrices) => {
    if (!storePrices || storePrices.length === 0) return 0;
    return Math.min(...storePrices.map(sp => sp.price));
  };

  // Handle heart click with optimistic update
  const handleHeartClick = async (productId, event) => {
    event.preventDefault();
    if (!user || !token) {
      setShowLoginPrompt(prev => ({ ...prev, [productId]: true }));
      setTimeout(() => {
        setShowLoginPrompt(prev => ({ ...prev, [productId]: false }));
      }, 3000);
      return;
    }

    const isSaved = savedProducts.has(productId);
    setSavedProducts(prev => {
      const newSet = new Set(prev);
      if (isSaved) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });

    try {
      if (isSaved) {
        await axios.delete(`https://price-ua-react-backend.onrender.com/saved-products/${productId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(
          'https://price-ua-react-backend.onrender.com/saved-products',
          { productId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
    } catch (error) {
      setSavedProducts(prev => {
        const newSet = new Set(prev);
        if (isSaved) {
          newSet.add(productId);
        } else {
          newSet.delete(productId);
        }
        return newSet;
      });
      console.error('Помилка при зміні статусу збереження:', error);
      alert('Не вдалося оновити статус бажаного. Спробуйте ще раз.');
    }
  };

  // Calculate filtered products for preview and disabled filters
  const calculateFilteredProducts = useCallback((tempFilters) => {
    let filtered = [...allProducts];

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryId && !isSearchPage) {
      filtered = filtered.filter(product => product.category_id === categoryId);
    } else if (tempFilters.categories.length > 0 && isSearchPage) {
      filtered = filtered.filter(product =>
        tempFilters.categories.includes(product.category_name)
      );
    }

    if (tempFilters.brands.length > 0) {
      filtered = filtered.filter(product =>
        tempFilters.brands.includes(product.brand_name)
      );
    }

    if (customPriceFrom !== '' && customPriceTo !== '') {
      const priceFrom = parseFloat(customPriceFrom);
      const priceTo = parseFloat(customPriceTo);
      filtered = filtered.filter(product => {
        const minPrice = getMinPrice(product.store_prices);
        return minPrice >= priceFrom && minPrice <= priceTo;
      });
    } else if (tempFilters.priceRanges.length > 0) {
      filtered = filtered.filter(product => {
        const minPrice = getMinPrice(product.store_prices);
        return tempFilters.priceRanges.some(range => {
          const [min, max] = range.includes('+')
            ? [1000, Infinity]
            : range.split('-').map(Number);
          return minPrice >= min && (max === Infinity || minPrice <= max);
        });
      });
    }

    if (tempFilters.volumes.length > 0) {
      filtered = filtered.filter(product =>
        tempFilters.volumes.includes(product.volume)
      );
    }

    if (tempFilters.types.length > 0) {
      filtered = filtered.filter(product =>
        tempFilters.types.includes(product.feature_type)
      );
    }

    return filtered;
  }, [allProducts, searchQuery, categoryId, isSearchPage, customPriceFrom, customPriceTo]);

  // Calculate preview product count
  const calculatePreviewProducts = useCallback(() => {
    const filtered = calculateFilteredProducts(selectedFilters);
    return filtered.length;
  }, [calculateFilteredProducts, selectedFilters]);

  // Update disabled filters
  const updateDisabledFilters = useCallback(() => {
    const newDisabledFilters = {
      brands: new Set(),
      priceRanges: new Set(),
      volumes: new Set(),
      types: new Set(),
      categories: new Set(),
    };

    const baseFilters = {
      brands: [...selectedFilters.brands],
      priceRanges: [...selectedFilters.priceRanges],
      volumes: [...selectedFilters.volumes],
      types: [...selectedFilters.types],
      categories: [...selectedFilters.categories],
    };

    filters.brands.forEach(brand => {
      const tempFilters = { ...baseFilters, brands: [brand], priceRanges: baseFilters.priceRanges, volumes: baseFilters.volumes, types: baseFilters.types, categories: baseFilters.categories };
      const filtered = calculateFilteredProducts(tempFilters);
      if (filtered.length === 0) newDisabledFilters.brands.add(brand);
    });

    filters.priceRanges.forEach(range => {
      const tempFilters = { ...baseFilters, brands: baseFilters.brands, priceRanges: [range.label], volumes: baseFilters.volumes, types: baseFilters.types, categories: baseFilters.categories };
      const filtered = calculateFilteredProducts(tempFilters);
      if (filtered.length === 0) newDisabledFilters.priceRanges.add(range.label);
    });

    filters.volumes.forEach(volume => {
      const tempFilters = { ...baseFilters, brands: baseFilters.brands, priceRanges: baseFilters.priceRanges, volumes: [volume], types: baseFilters.types, categories: baseFilters.categories };
      const filtered = calculateFilteredProducts(tempFilters);
      if (filtered.length === 0) newDisabledFilters.volumes.add(volume);
    });

    filters.types.forEach(type => {
      const tempFilters = { ...baseFilters, brands: baseFilters.brands, priceRanges: baseFilters.priceRanges, volumes: baseFilters.volumes, types: [type], categories: baseFilters.categories };
      const filtered = calculateFilteredProducts(tempFilters);
      if (filtered.length === 0) newDisabledFilters.types.add(type);
    });

    if (isSearchPage) {
      filters.categories.forEach(category => {
        const tempFilters = { ...baseFilters, brands: baseFilters.brands, priceRanges: baseFilters.priceRanges, volumes: baseFilters.volumes, types: baseFilters.types, categories: [category] };
        const filtered = calculateFilteredProducts(tempFilters);
        if (filtered.length === 0) newDisabledFilters.categories.add(category);
      });
    }

    setDisabledFilters(newDisabledFilters);
  }, [filters, selectedFilters, calculateFilteredProducts, isSearchPage]);

  // Fetch products and saved statuses
  useEffect(() => {
    console.log('useEffect triggered with dependencies:', {
      categoryId,
      searchQuery,
      initialType,
      isSearchPage,
      user: user ? user.id : null,
      token: token ? 'present' : 'absent',
    });

    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const requestParams = {
          search: searchQuery || undefined,
          category: categoryId && !isSearchPage ? categoryId : undefined,
          limit: 1000,
        };
        console.log('Fetching products with params:', requestParams);

        const productsResponse = await axios.get('https://price-ua-react-backend.onrender.com/products', {
          params: requestParams,
        });

        console.log('Products API response:', {
          productCount: productsResponse.data.products.length,
          products: productsResponse.data.products.map(p => ({
            id: p.id,
            name: p.name,
            category_id: p.category_id,
            category_name: p.category_name,
          })),
        });

        let productsData = productsResponse.data.products || [];
        let savedProductIds = [];
        if (user && token && productsData.length > 0) {
          const productIds = productsData.map(p => p.id);
          try {
            const savedResponse = await axios.post(
              'https://price-ua-react-backend.onrender.com/saved-products/bulk',
              { productIds },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            savedProductIds = savedResponse.data.savedProductIds || [];
            console.log('Saved products response:', { savedProductIds });
          } catch (error) {
            console.error('Помилка завантаження статусів збереження:', error);
          }
        }

        setSavedProducts(new Set(savedProductIds));

        const brandCounts = {};
        const typeCounts = {};
        const categoryCounts = {};
        const allVolumes = new Set();
        const priceBuckets = new Set();
        productsData.forEach(product => {
          const brand = product.brand_name;
          const type = product.feature_type;
          const category = product.category_name;
          const volume = product.volume;
          const minPrice = getMinPrice(product.store_prices);
          brandCounts[brand] = (brandCounts[brand] || 0) + 1;
          if (type) typeCounts[type] = (typeCounts[type] || 0) + 1;
          categoryCounts[category] = (categoryCounts[category] || 0) + 1;
          if (volume) allVolumes.add(volume);
          if (minPrice > 0) {
            if (minPrice <= 100) priceBuckets.add('0-100');
            else if (minPrice <= 200) priceBuckets.add('100-200');
            else if (minPrice <= 300) priceBuckets.add('200-300');
            else if (minPrice <= 400) priceBuckets.add('300-400');
            else if (minPrice <= 500) priceBuckets.add('400-500');
            else if (minPrice <= 600) priceBuckets.add('500-600');
            else if (minPrice <= 700) priceBuckets.add('600-700');
            else if (minPrice <= 800) priceBuckets.add('700-800');
            else if (minPrice <= 900) priceBuckets.add('800-900');
            else if (minPrice <= 1000) priceBuckets.add('900-1000');
            else priceBuckets.add('1000+');
          }
        });

        const allBrands = [...new Set(productsData.map(p => p.brand_name))].sort(
          (a, b) => (brandCounts[b] || 0) - (brandCounts[a] || 0)
        );
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
        ].filter(range => priceBuckets.has(range.label));
        const allVolumesSorted = [...allVolumes].sort((a, b) => {
          const numA = parseFloat(a.replace(/[^0-9.]/g, '')) || 0;
          const numB = parseFloat(b.replace(/[^0-9.]/g, '')) || 0;
          return numA - numB;
        });
        const allTypes = [...new Set(productsData.map(p => p.feature_type).filter(Boolean))].sort(
          (a, b) => (typeCounts[b] || 0) - (typeCounts[a] || 0)
        );
        const allCategories = isSearchPage
          ? [...new Set(productsData.map(p => p.category_name))].sort(
              (a, b) => (categoryCounts[b] || 0) - (categoryCounts[a] || 0)
            )
          : [categoryId].filter(Boolean);

        setFilters({
          brands: allBrands,
          priceRanges: allPriceRanges,
          volumes: allVolumesSorted,
          types: allTypes,
          categories: allCategories,
        });

        setAllProducts(productsData);
        setFilteredProducts(productsData);
        setTotalProducts(productsData.length);
        setPreviewProductCount(productsData.length);
        setCurrentPage(1);
        setStartPage(1);
        setLoadMorePages(1);
        setIsPaginated(true);

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

        if (initialType) {
          setTimeout(() => {
            const typeCheckbox = document.querySelector(`input[name="type"][value="${initialType}"]`);
            if (typeCheckbox) typeCheckbox.checked = true;
          }, 0);
        }
      } catch (error) {
        console.error('Помилка завантаження продуктів:', error);
        alert('Не вдалося завантажити продукти. Перевірте підключення до сервера.');
        setAllProducts([]);
        setFilteredProducts([]);
        setTotalProducts(0);
        setPreviewProductCount(0);
        setSavedProducts(new Set());
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, searchQuery, initialType, isSearchPage, token]); // Removed user from dependencies

  // Update preview count and disabled filters
  useEffect(() => {
    if (!isLoading) {
      setPreviewProductCount(calculatePreviewProducts());
      updateDisabledFilters();
    }
  }, [selectedFilters, customPriceFrom, customPriceTo, isLoading, calculatePreviewProducts, updateDisabledFilters]);

  // Client-side filtering
  useEffect(() => {
    if (!isLoading && allProducts.length > 0) {
      console.log('Starting client-side filtering:', {
        allProductsCount: allProducts.length,
        searchQuery,
        categoryId,
        isSearchPage,
        appliedFilters,
        customPriceFrom,
        customPriceTo,
      });

      let filtered = [...allProducts];

      if (searchQuery) {
        filtered = filtered.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
      }

      if (categoryId && !isSearchPage) {
        filtered = filtered.filter(product => product.category_id === categoryId);
      } else if (appliedFilters.categories.length > 0 && isSearchPage) {
        filtered = filtered.filter(product => appliedFilters.categories.includes(product.category_name));
      }

      if (appliedFilters.brands.length > 0) {
        filtered = filtered.filter(product => appliedFilters.brands.includes(product.brand_name));
      }

      if (customPriceFrom !== '' && customPriceTo !== '') {
        const priceFrom = parseFloat(customPriceFrom);
        const priceTo = parseFloat(customPriceTo);
        filtered = filtered.filter(product => {
          const minPrice = getMinPrice(product.store_prices);
          return minPrice >= priceFrom && minPrice <= priceTo;
        });
      } else if (appliedFilters.priceRanges.length > 0) {
        filtered = filtered.filter(product => {
          const minPrice = getMinPrice(product.store_prices);
          return appliedFilters.priceRanges.some(range => {
            const [min, max] = range.includes('+') ? [1000, Infinity] : range.split('-').map(Number);
            return minPrice >= min && (max === Infinity || minPrice <= max);
          });
        });
      }

      if (appliedFilters.volumes.length > 0) {
        filtered = filtered.filter(product => appliedFilters.volumes.includes(product.volume));
      }

      if (appliedFilters.types.length > 0) {
        filtered = filtered.filter(product => appliedFilters.types.includes(product.feature_type));
      }

      setFilteredProducts(filtered);
      setTotalProducts(filtered.length);
    }
  }, [allProducts, appliedFilters, customPriceFrom, customPriceTo, searchQuery, categoryId, isSearchPage, isLoading]);

  // Handle filter change
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[filterType] || [];
      let updatedValues;
      if (currentValues.includes(value)) {
        updatedValues = currentValues.filter((v) => v !== value);
      } else {
        updatedValues = [...currentValues, value];
      }
      const updatedFilters = { ...prev, [filterType]: updatedValues };
      if (filterType === 'priceRanges') {
        setCustomPriceFrom('');
        setCustomPriceTo('');
      }
      return updatedFilters;
    });
    setActiveFilter({ type: filterType, value });
  };

  // Remove a filter
  const removeFilter = (filterType, value) => {
    setSelectedFilters((prev) => {
      const updatedValues = (prev[filterType] || []).filter((v) => v !== value);
      const updatedFilters = { ...prev, [filterType]: updatedValues };
      setAppliedFilters({ ...prev, [filterType]: updatedValues });
      return updatedFilters;
    });
  };

  // Reset all filters
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
    setCurrentPage(1);
    setStartPage(1);
    setLoadMorePages(1);
    setIsPaginated(true);
  };

  // Apply filters
  const applyFilters = () => {
    setAppliedFilters({ ...selectedFilters });
    setCurrentPage(1);
    setStartPage(1);
    setLoadMorePages(1);
    setIsPaginated(true);
    setActiveFilter(null);
  };

  // Toggle show more
  const toggleShowMore = (filterType) => {
    setShowMore((prev) => ({ ...prev, [filterType]: !prev[filterType] }));
  };

  // Handle brand search
  const handleBrandSearch = (e) => {
    setBrandSearch(e.target.value);
  };

  // Handle custom price change
  const handleCustomPriceChange = (field, value) => {
    const numValue = value.replace(/[^0-9]/g, '');
    if (field === 'from') {
      setCustomPriceFrom(numValue);
    } else {
      setCustomPriceTo(numValue);
    }
    if (numValue !== '') {
      setSelectedFilters((prev) => ({ ...prev, priceRanges: [] }));
      setAppliedFilters((prev) => ({ ...prev, priceRanges: [] }));
    }
  };

  // Get visible filter items
  const getVisibleItems = useCallback((items, filterType) => {
    if (!items) return [];

    let filteredItems = items;

    if (filterType === 'brands') {
      filteredItems = items.filter((brand) =>
        brand.toLowerCase().includes(brandSearch.toLowerCase())
      );
      const topItems = filteredItems.slice(0, 12);
      const remainingItems = filteredItems.slice(12);
      if (showMore.brands || filteredItems.length <= 12) {
        return [...topItems, ...remainingItems.sort((a, b) => a.localeCompare(b))];
      }
      return topItems;
    }

    if (filterType === 'types') {
      const topItems = filteredItems.slice(0, 6);
      const remainingItems = filteredItems.slice(6);
      if (showMore.types || filteredItems.length <= 6) {
        return [...topItems, ...remainingItems.sort((a, b) => a.localeCompare(b))];
      }
      return topItems;
    }

    if (filterType === 'categories') {
      if (showMore.categories || items.length <= 6) {
        return [...items].sort((a, b) => a.localeCompare(b));
      }
      return items.slice(0, 6);
    }

    if (showMore[filterType] || items.length <= 12) {
      return items;
    }
    return items.slice(0, 12);
  }, [brandSearch, showMore]);

  // Get product name
  const getProductName = (product) => {
    return `${product.name} (${product.volume || 'Об’єм не вказано'})`;
  };

  // Pagination
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

  // Update filter container heights
  useEffect(() => {
    Object.keys(showMore).forEach((filterType) => {
      const container = filterItemsRefs.current[filterType];
      if (container) {
        const items = container.querySelector('.filter-items');
        if (items) {
          const visibleItems = getVisibleItems(filters[filterType], filterType);
          const maxVisible = filterType === 'brands' || filterType === 'priceRanges' || filterType === 'volumes' ? 12 : 6;
          const isExpanded = showMore[filterType] || visibleItems.length <= maxVisible;
          const collapsedHeight = visibleItems.length > maxVisible
            ? items.scrollHeight * (maxVisible / filters[filterType].length)
            : items.scrollHeight;
          container.style.maxHeight = isExpanded
            ? `${items.scrollHeight}px`
            : `${collapsedHeight}px`;
        }
      }
    });
  }, [showMore, filters, brandSearch, getVisibleItems]);

  return (
    <div className="product-list">
      <h2>Товари категорії</h2>
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner-container">
            <div className="spinner"></div>
            <p>Завантаження...</p>
          </div>
        </div>
      )}
      <div className="product-list-container">
        <div className={`filters ${!isLoading ? 'loaded' : ''}`}>
          <div className="filters-header">
            <h3>Фільтри</h3>
            {totalAppliedFilters > 0 && (
              <div className="selected-filters">
                {isSearchPage &&
                  appliedFilters.categories?.map((category) => (
                    <div key={`category-${category}`} className="selected-filter-tag">
                      <span>{categoryNames[category] || category}</span>
                      <button onClick={() => removeFilter('categories', category)}>×</button>
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
                    <span>{customPriceFrom}-{customPriceTo} грн</span>
                    <button onClick={() => { setCustomPriceFrom(''); setCustomPriceTo(''); applyFilters(); }}>×</button>
                  </div>
                ) : (
                  appliedFilters.priceRanges?.map((range) => (
                    <div key={`price-${range}`} className="selected-filter-tag">
                      <span>{range}</span>
                      <button onClick={() => removeFilter('priceRanges', range)}>×</button>
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
                  <button className="reset-all-filters" onClick={resetAllFilters}>Скинути всі</button>
                )}
              </div>
            )}
          </div>

          {isSearchPage && searchQuery && (
            <div className="filter-section">
              <h4>Категорія</h4>
              <div className="filter-items-container" ref={(el) => (filterItemsRefs.current['categories'] = el)}>
                <div className="filter-items filter-items-single-column">
                  {getVisibleItems(filters.categories, 'categories').map((category, index) => {
                    const isDisabled = disabledFilters.categories.has(category);
                    return (
                      <label key={index} className={isDisabled ? 'disabled' : ''} ref={(el) => (filterRefs.current[`categories-${category}`] = el)}>
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
              </div>
              {filters.categories.length > 6 && (
                <button className="show-more-btn" onClick={() => toggleShowMore('categories')}>
                  {showMore.categories ? 'Менше ↑' : 'Більше ↓'}
                </button>
              )}
            </div>
          )}

          <div className="filter-section">
            <h4>Бренд</h4>
            <input
              type="text"
              className="brand-search-input"
              placeholder="Пошук бренду..."
              value={brandSearch}
              onChange={handleBrandSearch}
            />
            <div className="filter-items-container" ref={(el) => (filterItemsRefs.current['brands'] = el)}>
              <div className="filter-items">
                {getVisibleItems(filters.brands, 'brands').map((brand, index) => {
                  const isDisabled = disabledFilters.brands.has(brand);
                  return (
                    <label
                      key={index}
                      className={`${brand.length > 13 ? 'span-two-columns' : ''} ${isDisabled ? 'disabled' : ''}`}
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
            </div>
            {filters.brands.length > 12 && (
              <button className="show-more-btn" onClick={() => toggleShowMore('brands')}>
                {showMore.brands ? 'Менше ↑' : 'Більше ↓'}
              </button>
            )}
          </div>

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
            <div className="filter-items-container" ref={(el) => (filterItemsRefs.current['priceRanges'] = el)}>
              <div className="filter-items">
                {getVisibleItems(filters.priceRanges, 'priceRanges').map((range, index) => {
                  const isDisabled = disabledFilters.priceRanges.has(range.label);
                  return (
                    <label key={index} className={isDisabled ? 'disabled' : ''} ref={(el) => (filterRefs.current[`priceRanges-${range.label}`] = el)}>
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
            </div>
            {filters.priceRanges.length > 12 && (
              <button className="show-more-btn" onClick={() => toggleShowMore('priceRanges')}>
                {showMore.priceRanges ? 'Менше ↑' : 'Більше ↓'}
              </button>
            )}
          </div>

          <div className="filter-section">
            <h4>Об’єм</h4>
            <div className="filter-items-container" ref={(el) => (filterItemsRefs.current['volumes'] = el)}>
              <div className="filter-items">
                {getVisibleItems(filters.volumes, 'volumes').map((volume, index) => {
                  const isDisabled = disabledFilters.volumes.has(volume);
                  return (
                    <label key={index} className={isDisabled ? 'disabled' : ''} ref={(el) => (filterRefs.current[`volumes-${volume}`] = el)}>
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
            </div>
            {filters.volumes.length > 12 && (
              <button className="show-more-btn" onClick={() => toggleShowMore('volumes')}>
                {showMore.volumes ? 'Менше ↑' : 'Більше ↓'}
              </button>
            )}
          </div>

          <div className="filter-section">
            <h4>Тип</h4>
            <div className="filter-items-container" ref={(el) => (filterItemsRefs.current['types'] = el)}>
              <div className="filter-items filter-items-single-column">
                {getVisibleItems(filters.types, 'types').map((type, index) => {
                  const isDisabled = disabledFilters.types.has(type);
                  return (
                    <label key={index} className={isDisabled ? 'disabled' : ''} ref={(el) => (filterRefs.current[`types-${type}`] = el)}>
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
            </div>
            {filters.types.length > 6 && (
              <button className="show-more-btn" onClick={() => toggleShowMore('types')}>
                {showMore.types ? 'Менше ↑' : 'Більше ↓'}
              </button>
            )}
          </div>

          {activeFilter && (
            <button
              className="filter-tag"
              ref={tagRef}
              onClick={applyFilters}
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

          <button className="apply-filters-btn" onClick={applyFilters}>
            Показати товари ({previewProductCount})
          </button>
        </div>

        <div className="products">
          <div className={`products-list ${!isLoading ? 'loaded' : ''}`}>
            {filteredProducts.length > 0 ? (
              filteredProducts
                .slice(
                  isPaginated ? (currentPage - 1) * productsPerPage : (startPage - 1) * productsPerPage,
                  isPaginated ? currentPage * productsPerPage : startPage * productsPerPage + loadMorePages * productsPerPage
                )
                .map((product, index) => (
                  <div key={`${product.id}-${index}`} className="product-card-container">
                    <Link to={`/product/${product.id}`} className="product-card">
                      <h3>{getProductName(product)}</h3>
                      <img
                        src={product.images && product.images.length > 0 ? product.images[0] : '/img/placeholder.webp'}
                        alt={product.name}
                        onError={(e) => (e.target.src = '/img/placeholder.webp')}
                      />
                      <p className="price">{getMinPrice(product.store_prices)} грн</p>
                      <p>{product.description || 'Опис відсутній'}</p>
                    </Link>
                    <div
                      className={`heart-icon ${savedProducts.has(product.id) ? 'saved' : ''}`}
                      onClick={(e) => handleHeartClick(product.id, e)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={savedProducts.has(product.id) ? '#d32f2f' : 'none'}
                        stroke="#d32f2f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </div>
                    {showLoginPrompt[product.id] && (
                      <div className="login-prompt">
                        Увійдіть в <Link to="/login" className="login-link">аккаунт</Link> щоб додати до бажаного
                      </div>
                    )}
                  </div>
                ))
            ) : (
              !isLoading && <p>Товари не знайдено</p>
            )}
          </div>
          {!isLoading && totalProducts > productsPerPage && (
            <div className="pagination-container">
              {((startPage - 1 + loadMorePages) * productsPerPage) < totalProducts && (
                <button className="load-more-btn" onClick={handleLoadMore}>Завантажити ще</button>
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
      </div>
    </div>
  );
}

export default ProductList;