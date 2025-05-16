import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
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