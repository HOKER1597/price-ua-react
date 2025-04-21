import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import products from '../data/products';
import './ProductList.css';

function ProductList({ searchTerm }) {
  const { categoryId } = useParams();
  const location = useLocation();
  
  // Get query parameter 'type'
  const queryParams = new URLSearchParams(location.search);
  const initialType = queryParams.get('type') || '';

  // State for all filters
  const [filters, setFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: [],
  });

  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);

  // State for preview product count
  const [previewProductCount, setPreviewProductCount] = useState(0);

  // State for pagination and "Load More"
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;
  const [isPaginated, setIsPaginated] = useState(true);
  const [startPage, setStartPage] = useState(1);
  const [loadMorePages, setLoadMorePages] = useState(1);

  // State for show more/less filters
  // eslint-disable-next-line no-unused-vars
  const [showMore, setShowMore] = useState({
    brands: false,
    priceRanges: false,
    volumes: false,
    types: false,
  });

  // State for selected filters (not yet applied)
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: initialType ? [initialType] : [],
  });

  // State for applied filters (after clicking "Show Products")
  const [appliedFilters, setAppliedFilters] = useState({
    brands: [],
    priceRanges: [],
    volumes: [],
    types: initialType ? [initialType] : [],
  });

  // State for brand search
  const [brandSearch, setBrandSearch] = useState('');

  // State for custom price range
  const [customPriceFrom, setCustomPriceFrom] = useState('');
  const [customPriceTo, setCustomPriceTo] = useState('');

  // State for active filter (type and value, e.g., { type: 'brands', value: 'Head & Shoulders' })
  const [activeFilter, setActiveFilter] = useState(null);

  // State for disabled filter options
  const [disabledFilters, setDisabledFilters] = useState({
    brands: new Set(),
    priceRanges: new Set(),
    volumes: new Set(),
    types: new Set(),
  });

  // Ref for positioning the filter tag
  const filterRefs = useRef({});
  const tagRef = useRef(null);

  // Initialize filters when category or search term changes
  useEffect(() => {
    // Get all products for the current category
    let categoryProducts = products.filter(product => product.category === categoryId)
      .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Apply initial type filter if present
    if (initialType) {
      categoryProducts = categoryProducts.filter(product =>
        product.specs.type === initialType
      );
    }

    // Calculate product counts for brands and types
    const brandCounts = {};
    const typeCounts = {};
    products
      .filter(product => product.category === categoryId)
      .forEach(product => {
        const brand = product.specs.brand;
        const type = product.specs.type;
        brandCounts[brand] = (brandCounts[brand] || 0) + 1;
        if (type) {
          typeCounts[type] = (typeCounts[type] || 0) + 1;
        }
      });

    // Set initial filters
    const allBrands = [...new Set(products
      .filter(product => product.category === categoryId)
      .map(product => product.specs.brand))]
      .sort((a, b) => brandCounts[b] - brandCounts[a]); // Sort by product count descending
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
    const allVolumes = [...new Set(products
      .filter(product => product.category === categoryId && product.specs.volume)
      .map(product => product.specs.volume))]
      .sort((a, b) => {
        // Extract numeric part from volume strings (e.g., "100ml" -> 100)
        const numA = parseFloat(a.replace(/[^0-9.]/g, '')) || 0;
        const numB = parseFloat(b.replace(/[^0-9.]/g, '')) || 0;
        return numA - numB;
      });
    const allTypes = [...new Set(products
      .filter(product => product.category === categoryId && product.specs.type)
      .map(product => product.specs.type))]
      .sort((a, b) => typeCounts[b] - typeCounts[a]); // Sort by product count descending

    setFilters({
      brands: allBrands,
      priceRanges: allPriceRanges,
      volumes: allVolumes,
      types: allTypes,
    });

    // Set initial filtered products
    setFilteredProducts(categoryProducts);
    setPreviewProductCount(categoryProducts.length);

    // Reset pagination
    setCurrentPage(1);
    setStartPage(1);
    setLoadMorePages(1);
    setIsPaginated(true);

    // Reset selected and applied filters, preserving initialType
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

    // Reset brand search and custom price
    setBrandSearch('');
    setCustomPriceFrom('');
    setCustomPriceTo('');

    // Reset disabled filters
    setDisabledFilters({
      brands: new Set(),
      priceRanges: new Set(),
      volumes: new Set(),
      types: new Set(),
    });

    // Auto-check the type checkbox if present in URL
    if (initialType) {
      setTimeout(() => {
        const typeCheckbox = document.querySelector(`input[name="type"][value="${initialType}"]`);
        if (typeCheckbox) {
          typeCheckbox.checked = true;
        }
      }, 0);
    }
  }, [categoryId, searchTerm, initialType]);

  // Update product count and disabled filters when selected filters or custom price change
  useEffect(() => {
    // Function to check product count for a specific filter option
    const getFilterOptionProductCount = (filterType, value) => {
      // Start with the current selected filters
      let testFilters = { ...selectedFilters };

      // Replace the filter type's values with only the tested value
      testFilters[filterType] = [value];

      let updatedProducts = products.filter(product => product.category === categoryId);

      // Apply filters for brands
      if (testFilters.brands.length > 0) {
        updatedProducts = updatedProducts.filter(product =>
          testFilters.brands.includes(product.specs.brand)
        );
      }

      // Apply filters for price (use custom price if defined, else predefined ranges)
      if (customPriceFrom !== '' && customPriceTo !== '' && filterType !== 'priceRanges') {
        const from = parseFloat(customPriceFrom) || 0;
        const to = parseFloat(customPriceTo) || Infinity;
        updatedProducts = updatedProducts.filter(product =>
          product.price >= from && product.price <= to
        );
      } else if (testFilters.priceRanges.length > 0) {
        updatedProducts = updatedProducts.filter(product => {
          return testFilters.priceRanges.some(rangeLabel => {
            const range = filters.priceRanges.find(r => r.label === rangeLabel) || 
                          { min: 0, max: Infinity };
            return product.price >= range.min && product.price < range.max;
          });
        });
      }

      // Apply filters for volume
      if (testFilters.volumes.length > 0) {
        updatedProducts = updatedProducts.filter(product =>
          product.specs.volume && testFilters.volumes.includes(product.specs.volume)
        );
      }

      // Apply filters for type
      if (testFilters.types.length > 0) {
        updatedProducts = updatedProducts.filter(product =>
          product.specs.type && testFilters.types.includes(product.specs.type)
        );
      }

      // Filter by search term
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return updatedProducts.length;
    };

    let updatedProducts = products.filter(product => product.category === categoryId);

    // Apply selected filters
    if (selectedFilters.brands.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        selectedFilters.brands.includes(product.specs.brand)
      );
    }

    // Apply price filters (custom price takes precedence)
    if (customPriceFrom !== '' && customPriceTo !== '') {
      const from = parseFloat(customPriceFrom) || 0;
      const to = parseFloat(customPriceTo) || Infinity;
      updatedProducts = updatedProducts.filter(product =>
        product.price >= from && product.price <= to
      );
    } else if (selectedFilters.priceRanges.length > 0) {
      updatedProducts = updatedProducts.filter(product => {
        return selectedFilters.priceRanges.some(rangeLabel => {
          const range = filters.priceRanges.find(r => r.label === rangeLabel) || 
                        { min: 0, max: Infinity };
          return product.price >= range.min && product.price < range.max;
        });
      });
    }

    if (selectedFilters.volumes.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        product.specs.volume && selectedFilters.volumes.includes(product.specs.volume)
      );
    }

    if (selectedFilters.types.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        product.specs.type && selectedFilters.types.includes(product.specs.type)
      );
    }

    updatedProducts = updatedProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setPreviewProductCount(updatedProducts.length);

    // Update disabled filters for all categories
    const newDisabledFilters = {
      brands: new Set(),
      priceRanges: new Set(),
      volumes: new Set(),
      types: new Set(),
    };

    // Check brands
    filters.brands.forEach(brand => {
      if (!selectedFilters.brands.includes(brand) && getFilterOptionProductCount('brands', brand) === 0) {
        newDisabledFilters.brands.add(brand);
      }
    });

    // Check price ranges (disable all if custom price is active)
    if (customPriceFrom !== '' && customPriceTo !== '') {
      filters.priceRanges.forEach(range => {
        newDisabledFilters.priceRanges.add(range.label);
      });
    } else {
      filters.priceRanges.forEach(range => {
        if (!selectedFilters.priceRanges.includes(range.label) && getFilterOptionProductCount('priceRanges', range.label) === 0) {
          newDisabledFilters.priceRanges.add(range.label);
        }
      });
    }

    // Check volumes
    filters.volumes.forEach(volume => {
      if (!selectedFilters.volumes.includes(volume) && getFilterOptionProductCount('volumes', volume) === 0) {
        newDisabledFilters.volumes.add(volume);
      }
    });

    // Check types
    filters.types.forEach(type => {
      if (!selectedFilters.types.includes(type) && getFilterOptionProductCount('types', type) === 0) {
        newDisabledFilters.types.add(type);
      }
    });

    setDisabledFilters(newDisabledFilters);
  }, [selectedFilters, customPriceFrom, customPriceTo, categoryId, searchTerm, filters]);

  // Handle clicks outside the filter tag
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isFilterClick = event.target.closest('.filter-items input[type="checkbox"]');
      const isTagClick = tagRef.current && tagRef.current.contains(event.target);
      if (!isFilterClick && !isTagClick) {
        setActiveFilter(null); // Hide the tag
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle filter selection
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const currentValues = prev[filterType] || [];
      let updatedValues;
      if (currentValues.includes(value)) {
        updatedValues = currentValues.filter(v => v !== value);
      } else {
        updatedValues = [...currentValues, value];
      }
      const updatedFilters = {
        ...prev,
        [filterType]: updatedValues,
      };
      // Clear custom price if selecting a predefined price range
      if (filterType === 'priceRanges') {
        setCustomPriceFrom('');
        setCustomPriceTo('');
      }
      return updatedFilters;
    });
    // Set active filter
    setActiveFilter({ type: filterType, value });
  };

  // Remove a single filter
  const removeFilter = (filterType, value) => {
    setSelectedFilters(prev => {
      const updatedValues = (prev[filterType] || []).filter(v => v !== value);
      const updatedFilters = {
        ...prev,
        [filterType]: updatedValues,
      };

      // Update applied filters
      setAppliedFilters({
        ...prev,
        [filterType]: updatedValues,
      });

      // Apply filters with updated state
      applyFilters(updatedFilters);

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
    });
    // Apply filters after reset
    applyFilters(emptyFilters);
  };

  // Apply filters
  const applyFilters = (customFilters = selectedFilters) => {
    let updatedProducts = products.filter(product => product.category === categoryId);

    // Initialize empty arrays if filters are undefined
    const safeFilters = {
      brands: customFilters.brands || [],
      priceRanges: customFilters.priceRanges || [],
      volumes: customFilters.volumes || [],
      types: customFilters.types || [],
    };

    // Filter by brand
    if (safeFilters.brands.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        safeFilters.brands.includes(product.specs.brand)
      );
    }

    // Filter by price (custom price takes precedence)
    if (customPriceFrom !== '' && customPriceTo !== '') {
      const from = parseFloat(customPriceFrom) || 0;
      const to = parseFloat(customPriceTo) || Infinity;
      updatedProducts = updatedProducts.filter(product =>
        product.price >= from && product.price <= to
      );
    } else if (safeFilters.priceRanges.length > 0 && filters.priceRanges) {
      updatedProducts = updatedProducts.filter(product => {
        return safeFilters.priceRanges.some(rangeLabel => {
          const range = filters.priceRanges.find(r => r.label === rangeLabel) || 
                        { min: 0, max: Infinity };
          return product.price >= range.min && product.price < range.max;
        });
      });
    }

    // Filter by volume
    if (safeFilters.volumes.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        product.specs.volume && safeFilters.volumes.includes(product.specs.volume)
      );
    }

    // Filter by type
    if (safeFilters.types.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        product.specs.type && safeFilters.types.includes(product.specs.type)
      );
    }

    // Filter by search term
    updatedProducts = updatedProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update applied filters if not using customFilters
    if (customFilters === selectedFilters) {
      setAppliedFilters({ ...safeFilters });
    }

    setFilteredProducts(updatedProducts);
    setCurrentPage(1);
    setStartPage(1);
    setLoadMorePages(1);
    setIsPaginated(true);
    setActiveFilter(null); // Hide tag after applying
  };

  // Toggle show more/less
  const toggleShowMore = (filterType) => {
    setShowMore(prev => ({
      ...prev,
      [filterType]: !prev[filterType],
    }));
  };

  // Handle brand search input
  const handleBrandSearch = (e) => {
    setBrandSearch(e.target.value);
  };

  // Handle custom price input
  const handleCustomPriceChange = (field, value) => {
    const numValue = value.replace(/[^0-9]/g, ''); // Allow only numbers
    if (field === 'from') {
      setCustomPriceFrom(numValue);
    } else {
      setCustomPriceTo(numValue);
    }
    // Clear predefined price ranges if custom price is entered
    if (numValue !== '') {
      setSelectedFilters(prev => ({
        ...prev,
        priceRanges: [],
      }));
      setAppliedFilters(prev => ({
        ...prev,
        priceRanges: [],
      }));
    }
  };

  // Limit to 12 items for brands, 6 for types, unlimited for others
  const getVisibleItems = (items, filterType) => {
    if (!items) return [];
    
    let filteredItems = items;
    
    if (filterType === 'brands') {
      // Apply brand search filter
      filteredItems = items.filter(brand =>
        brand.toLowerCase().includes(brandSearch.toLowerCase())
      );
      if (showMore.brands || filteredItems.length <= 12) {
        // Sort alphabetically when showing more
        return [...filteredItems].sort((a, b) => a.localeCompare(b));
      }
      return filteredItems.slice(0, 12); // Already sorted by product count
    }
    
    if (filterType === 'types') {
      if (showMore.types || items.length <= 6) {
        // Sort alphabetically when showing more
        return [...items].sort((a, b) => a.localeCompare(b));
      }
      return items.slice(0, 6); // Already sorted by product count
    }
    
    if (showMore[filterType] || items.length <= 12) {
      return items;
    }
    return items.slice(0, 12);
  };

  // Modify product name
  const getProductName = (product) => {
    return `${product.name} (${product.specs.volume})`;
  };

  // Pagination
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

  // Compute products to display
  const paginatedProducts = isPaginated
    ? filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
      )
    : filteredProducts.slice(
        (startPage - 1) * productsPerPage,
        (startPage - 1 + loadMorePages) * productsPerPage
      );

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calculate total applied filters
  const totalAppliedFilters = (
    (appliedFilters.brands?.length || 0) +
    (appliedFilters.priceRanges?.length || 0) +
    (appliedFilters.volumes?.length || 0) +
    (appliedFilters.types?.length || 0) +
    (customPriceFrom !== '' && customPriceTo !== '' ? 1 : 0)
  );

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
                {appliedFilters.brands?.map(brand => (
                  <div key={`brand-${brand}`} className="selected-filter-tag">
                    <span>{brand}</span>
                    <button onClick={() => removeFilter('brands', brand)}>×</button>
                  </div>
                ))}
                {(customPriceFrom !== '' && customPriceTo !== '') ? (
                  <div key="custom-price" className="selected-filter-tag">
                    <span>{customPriceFrom}-{customPriceTo} грн</span>
                    <button onClick={() => {
                      setCustomPriceFrom('');
                      setCustomPriceTo('');
                      applyFilters();
                    }}>×</button>
                  </div>
                ) : (
                  appliedFilters.priceRanges?.map(range => (
                    <div key={`price-${range}`} className="selected-filter-tag">
                      <span>{range}</span>
                      <button onClick={() => removeFilter('priceRanges', range)}>×</button>
                    </div>
                  ))
                )}
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
                    className={`${brand.length > 16 ? 'span-two-columns' : ''} ${isDisabled ? 'disabled' : ''}`}
                    ref={el => (filterRefs.current[`brands-${brand}`] = el)}
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
                    ref={el => (filterRefs.current[`priceRanges-${range.label}`] = el)}
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
                    ref={el => (filterRefs.current[`volumes-${volume}`] = el)}
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
                    ref={el => (filterRefs.current[`types-${type}`] = el)}
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

          {/* "Show Products" tag, dynamically positioned */}
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

          {/* Apply filters button (for convenience) */}
          <button className="apply-filters-btn" onClick={() => applyFilters()}>
            Показати товари ({previewProductCount})
          </button>
        </div>

        {/* Products column */}
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

      {/* Pagination and "Load More" button */}
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