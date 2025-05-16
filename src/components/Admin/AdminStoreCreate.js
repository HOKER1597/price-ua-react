import React, { useState } from 'react';
import axios from 'axios';
import './AdminProductCreate.css';

function AdminStoreCreate() {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, logo: file });
    setPreviewImage(file ? URL.createObjectURL(file) : null);
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
      await axios.post('https://price-ua-react-backend.onrender.com/admin/store', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setSuccess('Магазин успішно створено!');
      setFormData({ name: '', logo: null, years_with_us: '', link: '' });
      setPreviewImage(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Не вдалося створити магазин. Перевірте дані.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-product-create animate-page">
      <h2 className="centered-heading">Додати новий магазин</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="save-button animate-field" disabled={isLoading}>
          {isLoading ? 'Збереження...' : 'Зберегти'}
        </button>
      </form>
    </div>
  );
}

export default AdminStoreCreate;