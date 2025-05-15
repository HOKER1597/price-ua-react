import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard animate-page">
      <h2>Адмін-панель</h2>
      <div className="button-container">
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