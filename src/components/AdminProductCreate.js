import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminProductCreate.css';

function AdminProductCreate() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [stores, setStores] = useState([]);
  const [formData, setFormData] = useState({
    category_id: '',
    brand_id: '',
    name: '',
    volume: '',
    images: [null],
    rating: '',
    views: '',
    code: '',
    features: [{ key: '', value: '' }],
    description: '',
    description_full: '',
    composition: '',
    usage: '',
    store_prices: [{ store_id: '', price: '', link: '' }],
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://price-ua-react-backend.onrender.com/categories');
        setCategories(response.data.sort((a, b) => a.name_ua.localeCompare(b.name_ua)));
      } catch (err) {
        console.error('Помилка завантаження категорій:', err);
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await axios.get('https://price-ua-react-backend.onrender.com/brands');
        setBrands(response.data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (err) {
        console.error('Помилка завантаження брендів:', err);
      }
    };

    const fetchStores = async () => {
      try {
        const response = await axios.get('https://price-ua-react-backend.onrender.com/stores');
        setStores(response.data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (err) {
        console.error('Помилка завантаження магазинів:', err);
      }
    };

    fetchCategories();
    fetchBrands();
    fetchStores();
  }, []);

  const handleInputChange = (e, index, field, type) => {
    const { name, value } = e.target;
    if (type === 'image') {
      const newImages = [...formData.images];
      newImages[index] = e.target.files[0];
      setFormData({ ...formData, images: newImages });
    } else if (type === 'feature') {
      const newFeatures = [...formData.features];
      newFeatures[index][field] = value;
      setFormData({ ...formData, features: newFeatures });
    } else if (type === 'store_price') {
      const newStorePrices = [...formData.store_prices];
      newStorePrices[index][field] = value;
      setFormData({ ...formData, store_prices: newStorePrices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addImageField = () => {
    if (formData.images.length < 10) {
      setFormData({ ...formData, images: [...formData.images, null] });
    }
  };

  const addFeatureField = () => {
    if (formData.features.length < 10) {
      setFormData({ ...formData, features: [...formData.features, { key: '', value: '' }] });
    }
  };

  const addStorePriceField = () => {
    if (formData.store_prices.length < 10) {
      setFormData({
        ...formData,
        store_prices: [...formData.store_prices, { store_id: '', price: '', link: '' }],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const token = localStorage.getItem('token');
    const formDataToSend = new FormData();

    formDataToSend.append('category_id', formData.category_id);
    formDataToSend.append('brand_id', formData.brand_id);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('volume', formData.volume);
    formDataToSend.append('rating', formData.rating);
    formDataToSend.append('views', formData.views);
    formDataToSend.append('code', formData.code);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('description_full', formData.description_full);
    formDataToSend.append('composition', formData.composition);
    formDataToSend.append('usage', formData.usage);

    const featureMap = formData.features.reduce((acc, feature) => {
      if (feature.key && feature.value) {
        acc[feature.key] = feature.value;
      }
      return acc;
    }, {});
    formDataToSend.append('features', JSON.stringify(featureMap));

    formData.store_prices.forEach((store, index) => {
      if (store.store_id && store.price) {
        formDataToSend.append(`store_prices[${index}][store_id]`, store.store_id);
        formDataToSend.append(`store_prices[${index}][price]`, store.price);
        formDataToSend.append(`store_prices[${index}][link]`, store.link);
      }
    });

    formData.images.forEach((image) => {
      if (image) {
        formDataToSend.append('images', image);
      }
    });

    try {
      await axios.post('https://price-ua-react-backend.onrender.com/admin/product', formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Товар успішно створено!');
      setFormData({
        category_id: '',
        brand_id: '',
        name: '',
        volume: '',
        images: [null],
        rating: '',
        views: '',
        code: '',
        features: [{ key: '', value: '' }],
        description: '',
        description_full: '',
        composition: '',
        usage: '',
        store_prices: [{ store_id: '', price: '', link: '' }],
      });
    } catch (err) {
      console.error('Помилка створення товару:', err);
      setError('Не вдалося створити товар. Перевірте дані або підключення до сервера.');
    } finally {
      setIsLoading(false);
    }
  };

  const featureOptions = [
    'brand', 'country', 'type', 'class', 'category', 'purpose', 'gender', 'active_ingredients',
  ];

  return (
    <div className="admin-product-create">
      <h2>Створити новий товар</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Категорія</label>
          <select
            name="category_id"
            value={formData.category_id}
            onChange={(e) => handleInputChange(e)}
            required
          >
            <option value="">Виберіть категорію</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name_ua}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Бренд</label>
          <select
            name="brand_id"
            value={formData.brand_id}
            onChange={(e) => handleInputChange(e)}
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
        <div className="form-group">
          <label>Назва</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        {formData.images.map((image, index) => (
          <div key={index} className="form-group">
            <label>Зображення {index + 1}</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleInputChange(e, index, 'image', 'image')}
            />
          </div>
        ))}
        {formData.images.length < 10 && (
          <button type="button" className="add-button" onClick={addImageField}>
            +
          </button>
        )}
        <div className="form-group">
          <label>Об’єм</label>
          <input
            type="text"
            name="volume"
            value={formData.volume}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Рейтинг</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={(e) => handleInputChange(e)}
            min="0"
            max="5"
            step="0.1"
          />
        </div>
        <div className="form-group">
          <label>Перегляди</label>
          <input
            type="number"
            name="views"
            value={formData.views}
            onChange={(e) => handleInputChange(e)}
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Код</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        {formData.features.map((feature, index) => (
          <div key={index} className="form-group feature-group">
            <select
              value={feature.key}
              onChange={(e) => handleInputChange(e, index, 'key', 'feature')}
            >
              <option value="">Виберіть характеристику</option>
              {featureOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={feature.value}
              onChange={(e) => handleInputChange(e, index, 'value', 'feature')}
              placeholder="Значення"
            />
          </div>
        ))}
        {formData.features.length < 10 && (
          <button type="button" className="add-button" onClick={addFeatureField}>
            +
          </button>
        )}
        <div className="form-group">
          <label>Короткий опис</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Повний опис</label>
          <textarea
            name="description_full"
            value={formData.description_full}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Склад</label>
          <textarea
            name="composition"
            value={formData.composition}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Використання</label>
          <textarea
            name="usage"
            value={formData.usage}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        {formData.store_prices.map((store, index) => (
          <div key={index} className="form-group store-price-group">
            <select
              value={store.store_id}
              onChange={(e) => handleInputChange(e, index, 'store_id', 'store_price')}
            >
              <option value="">Виберіть магазин</option>
              {stores.map((store) => (
                <option key={store.id} value={store.id}>
                  {store.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={store.price}
              onChange={(e) => handleInputChange(e, index, 'price', 'store_price')}
              placeholder="Ціна"
              min="0"
              step="0.01"
            />
            <input
              type="text"
              value={store.link}
              onChange={(e) => handleInputChange(e, index, 'link', 'store_price')}
              placeholder="Посилання"
            />
          </div>
        ))}
        {formData.store_prices.length < 10 && (
          <button type="button" className="add-button" onClick={addStorePriceField}>
            +
          </button>
        )}
        <button type="submit" className="save-button" disabled={isLoading}>
          {isLoading ? 'Збереження...' : 'Зберегти'}
        </button>
      </form>
    </div>
  );
}

export default AdminProductCreate;