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
    code: '',
    features: [{ key: '', value: '' }],
    description: '',
    description_full: '',
    composition: '',
    usage: '',
    store_prices: [{ store_id: '', price: '', link: '' }],
  });
  const [previewImage, setPreviewImage] = useState(null);
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
      setPreviewImage(e.target.files[0]);
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

    // Validate required fields
    if (!formData.category_id || !formData.brand_id || !formData.name) {
      setError('Заповніть обов’язкові поля: категорія, бренд, назва');
      setIsLoading(false);
      return;
    }

    const token = localStorage.getItem('token');
    const formDataToSend = new FormData();

    // Append form data
    formDataToSend.append('category_id', formData.category_id);
    formDataToSend.append('brand_id', formData.brand_id);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('volume', formData.volume);
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

    const validStorePrices = formData.store_prices.filter(
      (store) => store.store_id && store.price && !isNaN(parseFloat(store.price))
    );
    formDataToSend.append('store_prices', JSON.stringify(validStorePrices));

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
        code: '',
        features: [{ key: '', value: '' }],
        description: '',
        description_full: '',
        composition: '',
        usage: '',
        store_prices: [{ store_id: '', price: '', link: '' }],
      });
      setPreviewImage(null);
    } catch (err) {
      console.error('Помилка створення товару:', {
        message: err.message,
        response: err.response ? err.response.data : 'No response data',
      });
      setError(err.response?.data?.error || 'Не вдалося створити товар. Перевірте дані або підключення до сервера.');
    } finally {
      setIsLoading(false);
    }
  };

  const featureOptions = [
    { key: 'brand', label: 'Бренд' },
    { key: 'country', label: 'Країна' },
    { key: 'type', label: 'Тип' },
    { key: 'class', label: 'Клас' },
    { key: 'category', label: 'Категорія' },
    { key: 'purpose', label: 'Призначення' },
    { key: 'gender', label: 'Стать' },
    { key: 'active_ingredients', label: 'Активні інгредієнти' },
  ];

  // Filter available feature options based on selected features
  const getAvailableFeatureOptions = (currentIndex) => {
    const selectedKeys = formData.features
      .filter((_, index) => index !== currentIndex)
      .map(f => f.key)
      .filter(key => key);
    return featureOptions.filter(option => !selectedKeys.includes(option.key));
  };

  // Filter available store options based on selected stores
  const getAvailableStoreOptions = (currentIndex) => {
    const selectedStoreIds = formData.store_prices
      .filter((_, index) => index !== currentIndex)
      .map(s => s.store_id)
      .filter(id => id);
    return stores.filter(store => !selectedStoreIds.includes(store.id.toString()));
  };

  return (
    <div className="admin-product-create animate-page">
      <h2>Створити новий товар</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group animate-field">
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
        <div className="form-group animate-field">
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
        <div className="form-group animate-field">
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
          <div key={index} className="form-group animate-field image-group">
            <label>Зображення {index + 1}</label>
            <div className="input-with-button">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleInputChange(e, index, 'image', 'image')}
              />
              {formData.images.length < 10 && index === formData.images.length - 1 && (
                <button type="button" className="add-button" onClick={addImageField}>
                  +
                </button>
              )}
            </div>
          </div>
        ))}
        {previewImage && (
          <div className="form-group animate-field image-preview">
            <label>Вигляд зображення</label>
            <img src={URL.createObjectURL(previewImage)} alt="Preview" />
          </div>
        )}
        <div className="form-group animate-field">
          <label>Об’єм</label>
          <input
            type="text"
            name="volume"
            value={formData.volume}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-group animate-field">
          <label>Код</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <h3>Характеристики</h3>
        {formData.features.map((feature, index) => (
          <div key={index} className="form-group feature-group animate-field">
            <div className="input-with-button">
              <select
                value={feature.key}
                onChange={(e) => handleInputChange(e, index, 'key', 'feature')}
              >
                <option value="">Виберіть характеристику</option>
                {getAvailableFeatureOptions(index).map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={feature.value}
                onChange={(e) => handleInputChange(e, index, 'value', 'feature')}
                placeholder="Значення"
              />
              {formData.features.length < 10 && index === formData.features.length - 1 && (
                <button type="button" className="add-button" onClick={addFeatureField}>
                  +
                </button>
              )}
            </div>
          </div>
        ))}
        <div className="form-group animate-field">
          <label>Короткий опис</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-group animate-field">
          <label>Повний опис</label>
          <textarea
            name="description_full"
            value={formData.description_full}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-group animate-field">
          <label>Склад</label>
          <textarea
            name="composition"
            value={formData.composition}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-group animate-field">
          <label>Використання</label>
          <textarea
            name="usage"
            value={formData.usage}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <h3>Ціни в магазинах</h3>
        {formData.store_prices.map((store, index) => (
          <div key={index} className="form-group store-price-group animate-field">
            <div className="input-with-button">
              <select
                value={store.store_id}
                onChange={(e) => handleInputChange(e, index, 'store_id', 'store_price')}
              >
                <option value="">Виберіть магазин</option>
                {getAvailableStoreOptions(index).map((store) => (
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
              {formData.store_prices.length < 10 && index === formData.store_prices.length - 1 && (
                <button type="button" className="add-button" onClick={addStorePriceField}>
                  +
                </button>
              )}
            </div>
          </div>
        ))}
        <button type="submit" className="save-button animate-field" disabled={isLoading}>
          {isLoading ? 'Збереження...' : 'Зберегти'}
        </button>
      </form>
    </div>
  );
}

export default AdminProductCreate;