// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Wishlist.css';

// function Wishlist() {
//   const [savedProducts, setSavedProducts] = useState([]);
//   const [savedCategories, setSavedCategories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showCategoryModal, setShowCategoryModal] = useState(false);
//   const [newCategoryName, setNewCategoryName] = useState('');
//   const [editingCategoryId, setEditingCategoryId] = useState(null);
//   const [editingCategoryName, setEditingCategoryName] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user'));
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (!user || !token) {
//       navigate('/login');
//       return;
//     }

//     const fetchWishlist = async () => {
//       setIsLoading(true);
//       try {
//         const [productsResponse, categoriesResponse] = await Promise.all([
//           axios.get('https://price-ua-react-backend.onrender.com/saved-products', {
//             headers: { Authorization: `Bearer ${token}` },
//           }),
//           axios.get('https://price-ua-react-backend.onrender.com/saved-categories', {
//             headers: { Authorization: `Bearer ${token}` },
//           }),
//         ]);

//         const productIds = productsResponse.data.savedProductIds;
//         if (productIds.length > 0) {
//           const productsResponse = await axios.get('https://price-ua-react-backend.onrender.com/products', {
//             params: { ids: productIds.join(',') },
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           setSavedProducts(productsResponse.data.products || []);
//         } else {
//           setSavedProducts([]);
//         }

//         setSavedCategories(categoriesResponse.data.categories || []);
//       } catch (error) {
//         console.error('Помилка завантаження бажаного:', error);
//         setError('Не вдалося завантажити список бажаного. Спробуйте ще раз.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchWishlist();
//   }, [user, token, navigate]);

//   const getMinPrice = (storePrices) => {
//     if (!storePrices || storePrices.length === 0) return 0;
//     return Math.min(...storePrices.map(sp => sp.price));
//   };

//   const getProductName = (product) => {
//     return `${product.name} (${product.volume || 'Об’єм не вказано'})`;
//   };

//   const handleCreateCategory = async () => {
//     if (!newCategoryName.trim()) {
//       setError('Назва категорії не може бути порожньою');
//       return;
//     }
//     try {
//       const response = await axios.post(
//         'https://price-ua-react-backend.onrender.com/saved-categories',
//         { name: newCategoryName },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setSavedCategories([...savedCategories, response.data.category]);
//       setNewCategoryName('');
//       setShowCategoryModal(false);
//       setError('');
//     } catch (error) {
//       console.error('Помилка створення категорії:', error);
//       setError(error.response?.data?.error || 'Помилка сервера');
//     }
//   };

//   const handleEditCategory = (category) => {
//     setEditingCategoryId(category.id);
//     setEditingCategoryName(category.name);
//   };

//   const handleUpdateCategory = async (categoryId) => {
//     if (!editingCategoryName.trim()) {
//       setError('Назва категорії не може бути порожньою');
//       return;
//     }
//     try {
//       const response = await axios.put(
//         `https://price-ua-react-backend.onrender.com/saved-categories/${categoryId}`,
//         { name: editingCategoryName },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setSavedCategories(
//         savedCategories.map((cat) =>
//           cat.id === categoryId ? response.data.category : cat
//         )
//       );
//       setEditingCategoryId(null);
//       setEditingCategoryName('');
//       setError('');
//     } catch (error) {
//       console.error('Помилка оновлення категорії:', error);
//       setError(error.response?.data?.error || 'Помилка сервера');
//     }
//   };

//   const handleDeleteCategory = async (categoryId) => {
//     try {
//       await axios.delete(
//         `https://price-ua-react-backend.onrender.com/saved-categories/${categoryId}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setSavedCategories(savedCategories.filter((cat) => cat.id !== categoryId));
//     } catch (error) {
//       console.error('Помилка видалення категорії:', error);
//       setError(error.response?.data?.error || 'Помилка сервера');
//     }
//   };

//   const handleRemoveProduct = async (productId) => {
//     try {
//       await axios.delete(
//         `https://price-ua-react-backend.onrender.com/saved-products/${productId}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setSavedProducts(savedProducts.filter((product) => product.id !== productId));
//     } catch (error) {
//       console.error('Помилка видалення з бажаного:', error);
//       setError(error.response?.data?.error || 'Помилка сервера');
//     }
//   };

//   return (
//     <div className="wishlist-page">
//       {isLoading && (
//         <div className="loading-overlay">
//           <div className="spinner-container">
//             <div className="spinner"></div>
//             <p>Завантаження...</p>
//           </div>
//         </div>
//       )}
//       <div className="wishlist-container">
//         <div className="wishlist-header">
//           <h2>Бажане</h2>
//           <button
//             className="create-category-btn"
//             onClick={() => setShowCategoryModal(true)}
//           >
//             Створити нову категорію
//           </button>
//         </div>
//         {error && <p className="error">{error}</p>}
//         <div className="products-list">
//           {savedProducts.length > 0 ? (
//             savedProducts.map((product, index) => (
//               <div key={`${product.id}-${index}`} className="product-card-container">
//                 <Link to={`/product/${product.id}`} className="product-card">
//                   <h3>{getProductName(product)}</h3>
//                   <img
//                     src={
//                       product.images && product.images.length > 0
//                         ? product.images[0]
//                         : '/img/placeholder.webp'
//                     }
//                     alt={product.name}
//                     onError={(e) => (e.target.src = '/img/placeholder.webp')}
//                   />
//                   <p className="price">{getMinPrice(product.store_prices)} грн</p>
//                   <p>{product.description || 'Опис відсутній'}</p>
//                 </Link>
//                 <div
//                   className="heart-icon saved"
//                   onClick={() => handleRemoveProduct(product.id)}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="#ff0000"
//                     stroke="#ff0000"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
//                   </svg>
//                 </div>
//               </div>
//             ))
//           ) : (
//             !isLoading && <p>Немає збережених товарів</p>
//           )}
//         </div>
//         {savedCategories.map((category) => (
//           <div key={category.id} className="category-section">
//             <div className="category-header">
//               {editingCategoryId === category.id ? (
//                 <div className="category-edit">
//                   <input
//                     type="text"
//                     value={editingCategoryName}
//                     onChange={(e) => setEditingCategoryName(e.target.value)}
//                     className="category-edit-input"
//                   />
//                   <button
//                     className="category-save-btn"
//                     onClick={() => handleUpdateCategory(category.id)}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="#388e3c"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <polyline points="20 6 9 17 4 12"></polyline>
//                     </svg>
//                   </button>
//                 </div>
//               ) : (
//                 <h3>{category.name}</h3>
//               )}
//               <div className="category-actions">
//                 <button
//                   className="category-action-btn"
//                   onClick={() => handleEditCategory(category)}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#333"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
//                     <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
//                   </svg>
//                 </button>
//                 <button
//                   className="category-action-btn"
//                   onClick={() => handleDeleteCategory(category.id)}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#333"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="3 6 5 6 21 6"></polyline>
//                     <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
//                     <line x1="10" y1="11" x2="10" y2="17"></line>
//                     <line x1="14" y1="11" x2="14" y2="17"></line>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <p>Немає товарів</p>
//           </div>
//         ))}
//       </div>
//       {showCategoryModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h3>Створити нову категорію</h3>
//             {error && <p className="error">{error}</p>}
//             <input
//               type="text"
//               value={newCategoryName}
//               onChange={(e) => setNewCategoryName(e.target.value)}
//               placeholder="Назва категорії"
//               className="modal-input"
//             />
//             <button className="modal-create-btn" onClick={handleCreateCategory}>
//               Створити категорію
//             </button>
//             <button
//               className="modal-close-btn"
//               onClick={() => {
//                 setShowCategoryModal(false);
//                 setNewCategoryName('');
//                 setError('');
//               }}
//             >
//               Скасувати
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Wishlist;