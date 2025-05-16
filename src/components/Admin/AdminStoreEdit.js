import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminProductCreate.css';
import '../Wishlist.css'; // Import Wishlist.css for modal styles

function AdminStoreEdit() {
  const [stores, setStores] = useState([]);
  const [selectedStoreId, setSelectedStoreId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    logo: null,
    years_with_us: '',
    link: ''
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete modal

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('https://price-ua-react-backend.onrender.com/stores');
        setStores(response.data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (err) {
        console.error('Пом ATVилка завантаження магазинів:', err);
      }
    };
    fetchStores();
  }, []);

  useEffect(() => {
    if (selectedStoreId) {
      const fetchStore = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`https://price-ua-react-backend.onrender.com/stores/${selectedStoreId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setFormData({
            name: response.data.name,
            logo: null,
            years_with_us: response.data.years_with_us || '',
            link: response.data.link || ''
          });
          setPreviewImage(response.data.logo || null);
        } catch (err) {
          setError('Не вдалося завантажити дані магазину.');
        }
      };
      fetchStore();
    }
  }, [selectedStoreId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, logo: file });
    setPreviewImage(file ? URL.createObjectURL(file) : formData.logo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    if (!formData.name) {
      setError('Назва магазину є обов’язковою');
      setIsLoading(false);
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    if (formData.logo) {
      data.append('logo', formData.logo);
    }
    data.append('years_with_us', formData.years_with_us);
    data.append('link', formData.link);

    try {
      const token = localStorage.getItem('token');
      await axios.put(`https://price-ua-react-backend.onrender.com/admin/store/${selectedStoreId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setSuccess('Магазин успішно оновлено!');
    } catch (err) {
      setError(err.response?.data?.error || 'Не вдалося оновити магазин.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setError(null);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://price-ua-react-backend.onrender.com/admin/store/${selectedStoreId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Магазин успішно видалено!');
      setFormData({ name: '', logo: null, years_with_us: '', link: '' });
      setSelectedStoreId('');
      setPreviewImage(null);
      setIsDeleteModalOpen(false);
    } catch (err) {
      setError(err.response?.data?.error || 'Не вдалося видалити магазин.');
    }
  };

  return (
    <>
      <div className="admin-product-create animate-page">
        <h2 className="centered-heading">Редагувати магазин</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group animate-field">
            <label>Виберіть магазин</label>
            <select
              value={selectedStoreId}
              onChange={(e) => setSelectedStoreId(e.target.value)}
              required
            >
              <option value="">Виберіть магазин</option>
              {stores.map((store) => (
                <option key={store.id} value={store.id}>
                  {store.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group animate-field">
            <label>Назва магазину</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group animate-field">
            <label>Логотип</label>
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleFileChange}
            />
            {previewImage && (
              <div className="image-preview">
                <label>Попередній перегляд</label>
                <img src={previewImage} alt="Preview" />
              </div>
            )}
          </div>
          <div className="form-group animate-field">
            <label>Роки співпраці</label>
            <input
              type="number"
              name="years_with_us"
              value={formData.years_with_us}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group animate-field">
            <label>Посилання</label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
            />
          </div>
          {error && <div className="error-message centered-message">{error}</div>}
          {success && <div className="success-message centered-message">{success}</div>}
          <button type="submit" className="save-button animate-field" disabled={isLoading || !selectedStoreId}>
            {isLoading ? 'Збереження...' : 'Зберегти'}
          </button>
          <button
            type="button"
            className="save-button animate-field"
            style={{ backgroundColor: '#ff6f61', marginTop: '10px' }}
            onClick={handleOpenDeleteModal}
            disabled={!selectedStoreId}
          >
            Видалити
          </button>
        </form>
      </div>
      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <p>Ви точно хочете видалити цей магазин "{formData.name}"?</p>
            {error && <div className="modal-error">{error}</div>}
            <div className="modal-buttons">
              <button className="wishlist-modal-confirm-delete-btn" onClick={handleDelete}>Так</button>
              <button className="wishlist-modal-cancel-btn" onClick={handleCloseDeleteModal}>Ні</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminStoreEdit;