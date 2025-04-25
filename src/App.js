import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import CategorySubcategories from './components/CategorySubcategories';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;