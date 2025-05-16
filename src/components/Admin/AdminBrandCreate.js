import React, { useState } from 'react';
import axios from 'axios';
import './AdminProductCreate.css';

function AdminBrandCreate() {
  const [formData, setFormData] = useState({
    name: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      await axios.post('https://price-ua-react-backend.onrender.com/admin/brand', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Бренд успішно створено!');
      setFormData({ name: '' });
    } catch (err) {
      setError(err.response?.data?.error || 'Не вдалося створити бренд. Перевірте дані.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-product-create animate-page">
      <h2 className="centered-heading">Додати новий бренд</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="save-button animate-field" disabled={isLoading}>
          {isLoading ? 'Збереження...' : 'Зберегти'}
        </button>
      </form>
    </div>
  );
}

export default AdminBrandCreate;