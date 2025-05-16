import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate();

  // Check token validity on component mount
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        // Make a test API call to verify token (e.g., fetch user profile or a protected endpoint)
        await axios.get('https://price-ua-react-backend.onrender.com/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (err) {
        console.error('Error validating token:', err);
        if (err.response?.status === 401 || err.response?.status === 403) {
          navigate('/login');
        }
      }
    };

    checkToken();
  }, [navigate]);

  return (
    <div className="admin-dashboard animate-page">
      <h2>Адмін-панель</h2>
      <div className="button-container">
        <Link to="/admin/brand-create" className="admin-button">
          Додати бренд
        </Link>
        <Link to="/admin/brand-edit" className="admin-button">
          Редагувати бренд
        </Link>
        <Link to="/admin/store-create" className="admin-button">
          Додати магазин
        </Link>
        <Link to="/admin/store-edit" className="admin-button">
          Редагувати магазин
        </Link>
        <Link to="/admin/product-create" className="admin-button">
          Створити новий товар
        </Link>
        <Link to="/admin/product-edit" className="admin-button">
          Редагувати товар
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;