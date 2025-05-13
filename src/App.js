import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import CategorySubcategories from './components/CategorySubcategories';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Account from './components/Account';
import Wishlist from './components/Wishlist';
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
              <Route path="/account" element={<Account />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </div>
        </div>
      </Router>
    </DragDropProvider>
  );
}

export default App;