import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminProductCreate.css';
import '../Wishlist.css'; // Import Wishlist.css for modal styles

function AdminBrandEdit() {
  const [brands, setBrands] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState('');
  const [formData, setFormData] = useState({ name: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete modal

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get('https://price-ua-react-backend.onrender.com/brands');
        setBrands(response.data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (err) {
        console.error('Помилка завантаження брендів:', err);
      }
    };
    fetchBrands();
  }, []);

  useEffect(() => {
    if (selectedBrandId) {
      const fetchBrand = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`https://price-ua-react-backend.onrender.com/brands/${selectedBrandId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setFormData({ name: response.data.name });
        } catch (err) {
          setError('Не вдалося завантажити дані бренду.');
        }
      };
      fetchBrand();
    }
  }, [selectedBrandId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    if (!formData.name) {
      setError('Назва бренду є обов’язковою');
      setIsLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.put(`https://price-ua-react-backend.onrender.com/admin/brand/${selectedBrandId}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Бренд успішно оновлено!');
    } catch (err) {
      setError(err.response?.data?.error || 'Не вдалося оновити бренд.');
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
      await axios.delete(`https://price-ua-react-backend.onrender.com/admin/brand/${selectedBrandId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Бренд успішно видалено!');
      setFormData({ name: '' });
      setSelectedBrandId('');
      setIsDeleteModalOpen(false);
    } catch (err) {
      setError(err.response?.data?.error || 'Не вдалося видалити бренд.');
    }
  };

  return (
    <>
      <div className="admin-product-create animate-page">
        <h2 className="centered-heading">Редагувати бренд</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group animate-field">
            <label>Виберіть бренд</label>
            <select
              value={selectedBrandId}
              onChange={(e) => setSelectedBrandId(e.target.value)}
              required
            >
              <option value="">Виберіть бренд</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group animate-field">
            <label>Назва бренду</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          {error && <div className="error-message centered-message">{error}</div>}
          {success && <div className="success-message centered-message">{success}</div>}
          <button type="submit" className="save-button animate-field" disabled={isLoading || !selectedBrandId}>
            {isLoading ? 'Збереження...' : 'Зберегти'}
          </button>
          <button
            type="button"
            className="save-button animate-field"
            style={{ backgroundColor: '#ff6f61', marginTop: '10px' }}
            onClick={handleOpenDeleteModal}
            disabled={!selectedBrandId}
          >
            Видалити
          </button>
        </form>
      </div>
      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <p>Ви точно хочете видалити цей бренд "{formData.name}"?</p>
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

export default AdminBrandEdit;