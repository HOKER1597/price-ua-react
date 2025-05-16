import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import CategorySubcategories from './components/CategorySubcategories';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Account from './components/Account';
import Wishlist from './components/Wishlist';
import AdminProductCreate from './components/Admin/AdminProductCreate';
import AdminProductEdit from './components/Admin/AdminProductEdit';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminBrandCreate from './components/Admin/AdminBrandCreate';
import AdminBrandEdit from './components/Admin/AdminBrandEdit';
import AdminStoreCreate from './components/Admin/AdminStoreCreate';
import AdminStoreEdit from './components/Admin/AdminStoreEdit';
import { DragDropProvider } from './DragDropSetup';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <DragDropProvider>
      <Router>
        <div className="app">
          <Header setSearchTerm={setSearchTerm} />
          <div className="content">
            <Routes>
              <Route path="/" element={<CategoryList />} />
              <Route path="/subcategories/:groupId" element={<CategorySubcategories />} />
              <Route path="/category/:categoryId" element={<ProductList searchTerm={searchTerm} />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/search" element={<ProductList searchTerm={searchTerm} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/account" element={<Account />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/admin/" element={<AdminDashboard />} />
              <Route path="/admin/brand-create" element={<AdminBrandCreate />} />
              <Route path="/admin/brand-edit" element={<AdminBrandEdit />} />
              <Route path="/admin/store-create" element={<AdminStoreCreate />} />
              <Route path="/admin/store-edit" element={<AdminStoreEdit />} />
              <Route path="/admin/product-create" element={<AdminProductCreate />} />
              <Route path="/admin/product-edit" element={<AdminProductEdit />} />
            </Routes>
          </div>
        </div>
      </Router>
    </DragDropProvider>
  );
}

export default App;