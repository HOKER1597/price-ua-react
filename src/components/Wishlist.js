import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useDrag, useDrop, useDragLayer } from 'react-dnd';
import './Wishlist.css';
import './ProductList.css'; // Import ProductList.css for shared styles

const ItemTypes = {
  PRODUCT: 'product',
};

function ProductCard({ product, savedProductIds, toggleSavedProduct, getProductName, getMinPrice, setDraggedProductId }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PRODUCT,
    item: { productId: product.id },
    end: () => setDraggedProductId(null), // Reset draggedProductId when drag ends
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="product-card-container"
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onDragStart={() => {
        console.log('Drag started, productId:', product.id);
        setDraggedProductId(product.id);
      }}
    >
      <Link to={`/product/${product.id}`} className="product-card">
        <h3>{getProductName(product)}</h3>
        <img
          src={product.images && product.images.length > 0 ? product.images[0] : '/img/placeholder.webp'}
          alt={product.name}
          onError={(e) => (e.target.src = '/img/placeholder.webp')}
        />
        <p className="price">{getMinPrice(product.store_prices)}</p>
        <p>{product.description || 'Опис відсутній'}</p>
      </Link>
      <div
        className={`heart-icon ${savedProductIds.includes(product.id) ? 'saved' : ''}`}
        onClick={() => toggleSavedProduct(product.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={savedProductIds.includes(product.id) ? '#d32f2f' : 'none'}
          stroke="#d32f2f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
    </div>
  );
}

function CategorySection({ category, editingCategoryId, editedCategoryName, setEditedCategoryName, handleUpdateCategory, startEditingCategory, openDeleteModal, draggedProductId, moveProductToCategory, products, savedProductIds, toggleSavedProduct, getProductName, getMinPrice, setDraggedProductId }) {
  const [{ isOver: isOverPlaceholder }, placeholderDrop] = useDrop(() => ({
    accept: ItemTypes.PRODUCT,
    drop: (item) => moveProductToCategory(item.productId, category.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const categoryProducts = products.filter((product) => product.saved_category_id === category.id);

  return (
    <div className="category-section">
      <div className="category-header">
        {editingCategoryId === category.id ? (
          <>
            <input
              type="text"
              value={editedCategoryName}
              onChange={(e) => setEditedCategoryName(e.target.value)}
              className="category-edit-input"
            />
            <div className="category-buttons">
              <button
                className="confirm-edit-btn"
                onClick={() => handleUpdateCategory(category.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#008000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </button>
              <button
                className="edit-category-btn"
                onClick={() => startEditingCategory(category)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                </svg>
              </button>
              <button
                className="delete-category-btn"
                onClick={() => openDeleteModal(category)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>
          </>
        ) : (
          <>
            <h3>{category.name}</h3>
            <div className="category-buttons">
              <button
                className="edit-category-btn"
                onClick={() => startEditingCategory(category)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                </svg>
              </button>
              <button
                className="delete-category-btn"
                onClick={() => openDeleteModal(category)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
      <div className="drop-container">
        <div className="category-products products-list loaded">
          {categoryProducts.length > 0 ? (
            categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                savedProductIds={savedProductIds}
                toggleSavedProduct={toggleSavedProduct}
                getProductName={getProductName}
                getMinPrice={getMinPrice}
                setDraggedProductId={setDraggedProductId}
              />
            ))
          ) : (
            <p className="no-products-text">Немає товарів у цій категорії</p>
          )}
          {draggedProductId && (
            <div ref={placeholderDrop} className={`placeholder-card ${isOverPlaceholder ? 'drop-target' : ''}`}>
              <span className="plus-icon">+</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Wishlist() {
  const [products, setProducts] = useState([]);
  const [savedProductIds, setSavedProductIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [productError, setProductError] = useState(null);
  const [categoryError, setCategoryError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState('');
  const [deleteCategory, setDeleteCategory] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteWithProductsModalOpen, setIsDeleteWithProductsModalOpen] = useState(false);
  const [draggedProductId, setDraggedProductId] = useState(null);
  const navigate = useNavigate();

  // Custom auto-scroll during drag
  const { clientOffset, isDragging } = useDragLayer((monitor) => ({
    clientOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  useEffect(() => {
    if (!isDragging || !clientOffset) return;

    const zoneHeight = 200; // Height of top/bottom auto-scroll zones (pixels)
    const scrollSpeed = 10; // Pixels per frame (~60fps, 16ms)
    let scrollInterval = null;

    const checkScroll = () => {
      const y = clientOffset.y;
      const windowHeight = window.innerHeight;

      if (y < zoneHeight) {
        console.log('Scrolling up, y:', y);
        window.scrollBy(0, -scrollSpeed);
      } else if (y > windowHeight - zoneHeight) {
        console.log('Scrolling down, y:', y);
        window.scrollBy(0, scrollSpeed);
      }
    };

    scrollInterval = setInterval(checkScroll, 16); // ~60fps

    return () => {
      if (scrollInterval) {
        console.log('Stopping auto-scroll');
        clearInterval(scrollInterval);
      }
    };
  }, [clientOffset, isDragging]);

  // Function to format product name consistently with ProductList
  const getProductName = (product) => {
    return `${product.name} (${product.volume || 'Об’єм не вказано'})`;
  };

  // Function to get minimum price from store_prices
  const getMinPrice = (storePrices) => {
    if (!storePrices || storePrices.length === 0) return 'Немає в наявності';
    return `${Math.min(...storePrices.map(sp => sp.price))} грн`;
  };

  // Drop hook for uncategorized placeholder card
  const [{ isOver: isOverUncategorizedPlaceholder }, uncategorizedPlaceholderDrop] = useDrop(() => ({
    accept: ItemTypes.PRODUCT,
    drop: (item) => moveProductToCategory(item.productId, null),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // Fetch wishlist and categories
  useEffect(() => {
    const fetchWishlistAndCategories = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      setIsLoading(true);

      // Fetch saved products with category IDs
      try {
        const savedResponse = await axios.get(
          'https://price-ua-react-backend.onrender.com/saved-products',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const savedProducts = savedResponse.data.savedProducts || [];
        const savedIds = savedProducts.map((sp) => sp.product_id);
        setSavedProductIds(savedIds);

        if (savedIds.length === 0) {
          setProducts([]);
        } else {
          const productPromises = savedIds.map((id) =>
            axios.get(`https://price-ua-react-backend.onrender.com/products/${id}`)
          );
          const productResponses = await Promise.all(productPromises);
          const fetchedProducts = productResponses.map((response, index) => ({
            ...response.data,
            saved_category_id: savedProducts.find((sp) => sp.product_id === response.data.id)?.saved_category_id || null,
          }));
          setProducts(fetchedProducts);
        }
      } catch (err) {
        console.error('Error fetching wishlist:', err);
        setProductError('Не вдалося завантажити список бажаного');
        if (err.response?.status === 401 || err.response?.status === 403) {
          navigate('/login');
        }
      }

      // Fetch categories
      try {
        const categoriesResponse = await axios.get(
          'https://price-ua-react-backend.onrender.com/categories',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCategories(categoriesResponse.data || []);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setCategoryError('Не вдалося завантажити категорії');
        if (err.response?.status === 401 || err.response?.status === 403) {
          navigate('/login');
        }
      }

      setIsLoading(false);
    };

    fetchWishlistAndCategories();
  }, [navigate]);

  // Toggle saved product
  const toggleSavedProduct = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      await axios.delete(`https://price-ua-react-backend.onrender.com/saved-products/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSavedProductIds(savedProductIds.filter((id) => id !== productId));
      setProducts(products.filter((product) => product.id !== productId));
    } catch (err) {
      console.error('Error removing product from wishlist:', err);
      setProductError('Не вдалося видалити товар із бажаного');
    }
  };

  // Handle category creation
  const handleAddCategory = async () => {
    const token = localStorage.getItem('token');
    if (!token || !newCategoryName.trim()) {
      setCategoryError('Введіть назву категорії');
      return;
    }

    try {
      const response = await axios.post(
        'https://price-ua-react-backend.onrender.com/categories',
        { name: newCategoryName.trim() },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCategories([...categories, response.data]);
      setNewCategoryName('');
      setIsModalOpen(false);
      setCategoryError(null);
    } catch (err) {
      console.error('Error adding category:', err);
      setCategoryError('Не вдалося додати категорію');
    }
  };

  // Handle start editing category
  const startEditingCategory = (category) => {
    setEditingCategoryId(category.id);
    setEditedCategoryName(category.name);
  };

  // Handle category name update
  const handleUpdateCategory = async (categoryId) => {
    const token = localStorage.getItem('token');
    if (!token || !editedCategoryName.trim()) {
      setCategoryError('Введіть назву категорії');
      return;
    }

    const originalCategories = [...categories];
    const updatedCategories = categories.map((cat) =>
      cat.id === categoryId ? { ...cat, name: editedCategoryName.trim() } : cat
    );
    setCategories(updatedCategories);
    setEditingCategoryId(null);
    setEditedCategoryName('');
    setCategoryError(null);

    try {
      await axios.put(
        `https://price-ua-react-backend.onrender.com/categories/${categoryId}`,
        { name: editedCategoryName.trim() },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error('Error updating category:', err);
      setCategoryError('Не вдалося оновити категорію');
      setCategories(originalCategories); // Revert on failure
    }
  };

  // Handle open delete confirmation modal
  const openDeleteModal = (category) => {
    setDeleteCategory(category);
    const categoryProducts = products.filter((p) => p.saved_category_id === category.id);
    if (categoryProducts.length > 0) {
      setIsDeleteWithProductsModalOpen(true);
    } else {
      setIsDeleteModalOpen(true);
    }
  };

  // Handle close delete confirmation modals
  const closeDeleteModal = () => {
    setDeleteCategory(null);
    setIsDeleteModalOpen(false);
    setIsDeleteWithProductsModalOpen(false);
    setCategoryError(null);
  };

  // Handle category deletion (empty category)
  const handleDeleteCategory = async () => {
    const token = localStorage.getItem('token');
    if (!token || !deleteCategory) {
      setCategoryError('Помилка видалення категорії');
      closeDeleteModal();
      return;
    }

    const originalCategories = [...categories];
    setCategories(categories.filter((cat) => cat.id !== deleteCategory.id));
    closeDeleteModal();

    try {
      await axios.delete(
        `https://price-ua-react-backend.onrender.com/categories/${deleteCategory.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Empty category deleted:', deleteCategory.id);
    } catch (err) {
      console.error('Error deleting category:', err);
      setCategoryError('Не вдалося видалити категорію');
      setCategories(originalCategories);
    }
  };

  // Handle category deletion with products (save products)
  const handleDeleteCategorySaveProducts = async () => {
    const token = localStorage.getItem('token');
    if (!token || !deleteCategory) {
      setCategoryError('Помилка видалення категорії');
      closeDeleteModal();
      return;
    }

    const originalCategories = [...categories];
    const originalProducts = [...products];
    setCategories(categories.filter((cat) => cat.id !== deleteCategory.id));
    setProducts(
      products.map((p) =>
        p.saved_category_id === deleteCategory.id ? { ...p, saved_category_id: null } : p
      )
    );
    closeDeleteModal();

    try {
      // Update products to uncategorized
      const categoryProducts = originalProducts.filter((p) => p.saved_category_id === deleteCategory.id);
      await Promise.all(
        categoryProducts.map((product) =>
          axios.patch(
            `https://price-ua-react-backend.onrender.com/saved-products/${product.id}`,
            { saved_category_id: null },
            { headers: { Authorization: `Bearer ${token}` } }
          )
        )
      );
      // Delete category
      await axios.delete(
        `https://price-ua-react-backend.onrender.com/categories/${deleteCategory.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Category deleted, products moved to uncategorized:', deleteCategory.id);
    } catch (err) {
      console.error('Error deleting category or moving products:', err);
      setCategoryError('Не вдалося видалити категорію або перемістити товари');
      setCategories(originalCategories);
      setProducts(originalProducts);
    }
  };

  // Handle category deletion with products (delete products and category)
  const handleDeleteCategoryDeleteProducts = async () => {
    const token = localStorage.getItem('token');
    if (!token || !deleteCategory) {
      setCategoryError('Помилка видалення категорії');
      closeDeleteModal();
      return;
    }

    const originalCategories = [...categories];
    const originalProducts = [...products];
    const originalSavedProductIds = [...savedProductIds];
    const categoryProducts = products.filter((p) => p.saved_category_id === deleteCategory.id);
    const categoryProductIds = categoryProducts.map((p) => p.id);

    // Update UI
    setCategories(categories.filter((cat) => cat.id !== deleteCategory.id));
    setProducts(products.filter((p) => !categoryProductIds.includes(p.id)));
    setSavedProductIds(savedProductIds.filter((id) => !categoryProductIds.includes(id)));
    closeDeleteModal();

    try {
      // Delete products
      await Promise.all(
        categoryProductIds.map((productId) =>
          axios.delete(
            `https://price-ua-react-backend.onrender.com/saved-products/${productId}`,
            { headers: { Authorization: `Bearer ${token}` } }
          )
        )
      );
      // Delete category
      await axios.delete(
        `https://price-ua-react-backend.onrender.com/categories/${deleteCategory.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Category and products deleted:', { categoryId: deleteCategory.id, productIds: categoryProductIds });
    } catch (err) {
      console.error('Error deleting category or products:', err);
      setCategoryError('Не вдалося видалити категорію або товари');
      setCategories(originalCategories);
      setProducts(originalProducts);
      setSavedProductIds(originalSavedProductIds);
    }
  };

  // Handle moving product to category (or uncategorized)
  const moveProductToCategory = async (productId, categoryId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((p) =>
        p.id === productId ? { ...p, saved_category_id: categoryId } : p
      );
      return updatedProducts;
    });
    setDraggedProductId(null);

    try {
      await axios.patch(
        `https://price-ua-react-backend.onrender.com/saved-products/${productId}`,
        { saved_category_id: categoryId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error('Error moving product to category:', err);
      setCategoryError('Не вдалося перемістити товар до категорії');
      setProducts((prevProducts) => [...prevProducts]);
      setDraggedProductId(null);
    }
  };

  // Handle modal open/close
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setNewCategoryName('');
    setIsModalOpen(false);
    setCategoryError(null);
  };

  // Filter uncategorized products
  const uncategorizedProducts = products.filter((product) => !product.saved_category_id);

  return (
    <div className="wishlist">
      <div className="wishlist-header">
        <h2>Список бажаного</h2>
        <button className="add-category-btn" onClick={openModal}>
          Додати категорію
        </button>
      </div>
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner-container">
            <div className="spinner"></div>
            <p>Завантаження...</p>
          </div>
        </div>
      )}
      {productError && !products.length && <div className="wishlist-error">{productError}</div>}
      {categoryError && <div className="wishlist-error">{categoryError}</div>}
      {!isLoading && products.length === 0 && !productError && (
        <div className="wishlist-empty">
          <h2>Ваш список бажаного порожній</h2>
          <p>Додайте товари до списку бажаного, щоб побачити їх тут.</p>
        </div>
      )}
      {!isLoading && uncategorizedProducts.length > 0 && (
        <div className="wishlist-products products-list loaded">
          {uncategorizedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              savedProductIds={savedProductIds}
              toggleSavedProduct={toggleSavedProduct}
              getProductName={getProductName}
              getMinPrice={getMinPrice}
              setDraggedProductId={setDraggedProductId}
            />
          ))}
          {draggedProductId && (
            <div ref={uncategorizedPlaceholderDrop} className={`placeholder-card ${isOverUncategorizedPlaceholder ? 'drop-target' : ''}`}>
              <span className="plus-icon">+</span>
            </div>
          )}
        </div>
      )}
      {!isLoading && categories.length > 0 && (
        <div className="category-sections">
          {categories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              editingCategoryId={editingCategoryId}
              editedCategoryName={editedCategoryName}
              setEditedCategoryName={setEditedCategoryName}
              handleUpdateCategory={handleUpdateCategory}
              startEditingCategory={startEditingCategory}
              openDeleteModal={openDeleteModal}
              draggedProductId={draggedProductId}
              moveProductToCategory={moveProductToCategory}
              products={products}
              savedProductIds={savedProductIds}
              toggleSavedProduct={toggleSavedProduct}
              getProductName={getProductName}
              getMinPrice={getMinPrice}
              setDraggedProductId={setDraggedProductId}
            />
          ))}
        </div>
      )}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <label htmlFor="category-name">Назва категорії:</label>
            <input
              id="category-name"
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Введіть назву категорії"
            />
            {categoryError && <div className="modal-error">{categoryError}</div>}
            <div className="modal-buttons">
              <button className="add-btn" onClick={handleAddCategory}>Додати</button>
              <button className="cancel-btn" onClick={closeModal}>Скасувати</button>
            </div>
          </div>
        </div>
      )}
      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <p>Ви точно хочете видалити категорію?</p>
            {categoryError && <div className="modal-error">{categoryError}</div>}
            <div className="modal-buttons">
              <button className="confirm-delete-btn" onClick={handleDeleteCategory}>Так</button>
              <button className="cancel-btn" onClick={closeDeleteModal}>Ні</button>
            </div>
          </div>
        </div>
      )}
      {isDeleteWithProductsModalOpen && (
        <div className="modal-overlay">
          <div className="delete-with-products-modal">
            <p>У цій категорії є товари, хочете їх зберегти?</p>
            {categoryError && <div className="modal-error">{categoryError}</div>}
            <div className="modal-buttons">
              <button className="add-btn" onClick={handleDeleteCategorySaveProducts}>Так, зберегти</button>
              <button className="delete-btn" onClick={handleDeleteCategoryDeleteProducts}>Ні, видалити</button>
              <button className="cancel-btn" onClick={closeDeleteModal}>Назад</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wishlist;