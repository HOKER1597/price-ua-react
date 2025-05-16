import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './AdminProductEdit.css';

function AdminProductEdit() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [stores, setStores] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [formData, setFormData] = useState({
    category_id: '',
    brand_id: '',
    name: '',
    volume: '',
    images: [{ type: 'new', file: null }],
    code: '',
    features: [{ key: '', value: '' }],
    description: '',
    description_full: '',
    composition: '',
    usage: '',
    store_prices: [{ store_id: '', price: '', link: '' }],
  });
  const [previewImages, setPreviewImages] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const productIdFromQuery = queryParams.get('productId');
    if (productIdFromQuery) {
      setSelectedProductId(productIdFromQuery);
    }
  }, [location]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://price-ua-react-backend.onrender.com/products?limit=1000');
        setProducts(response.data.products.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (err) {
        console.error('Помилка завантаження товарів:', err);
        setError('Не вдалося завантажити товари.');
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://price-ua-react-backend.onrender.com/categories/public');
        setCategories(response.data.sort((a, b) => a.name_ua.localeCompare(b.name_ua)));
      } catch (err) {
        console.error('Помилка завантаження категорій:', err);
        setError('Не вдалося завантажити категорії.');
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await axios.get('https://price-ua-react-backend.onrender.com/brands');
        setBrands(response.data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (err) {
        console.error('Помилка завантаження брендів:', err);
        setError('Не вдалося завантажити бренди.');
      }
    };

    const fetchStores = async () => {
      try {
        const response = await axios.get('https://price-ua-react-backend.onrender.com/stores');
        setStores(response.data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (err) {
        console.error('Помилка завантаження магазинів:', err);
        setError('Не вдалося завантажити магазини.');
      }
    };

    fetchProducts();
    fetchCategories();
    fetchBrands();
    fetchStores();
  }, []);

  useEffect(() => {
    if (selectedProductId) {
      const fetchProductDetails = async () => {
        try {
          const response = await axios.get(`https://price-ua-react-backend.onrender.com/products/${selectedProductId}`);
          const product = response.data;
          const featuresArray = Object.entries(product.features || {}).map(([key, value]) => ({
            key: key === 'hairType' ? 'type' : key,
            value: value || '',
          })).filter(f => f.key && f.value);
          const images = product.images
            .filter(url => url && !url.includes('placeholder.webp'))
            .map(url => ({ type: 'existing', url }));
          setFormData({
            category_id: product.category_id ? product.category_id.toString() : '',
            brand_id: product.brand_id ? product.brand_id.toString() : '',
            name: product.name || '',
            volume: product.volume || '',
            images: images.length > 0 ? images : [{ type: 'new', file: null }],
            code: product.code || '',
            features: featuresArray.length > 0 ? featuresArray : [{ key: '', value: '' }],
            description: product.description || '',
            description_full: product.description_full || '',
            composition: product.composition || '',
            usage: product.usage || '',
            store_prices: product.store_prices.length > 0 ? product.store_prices.map(sp => ({
              store_id: sp.store_id.toString(),
              price: sp.price.toString(),
              link: sp.link || '',
            })) : [{ store_id: '', price: '', link: '' }],
          });
          setPreviewImages(product.images.filter(url => url && !url.includes('placeholder.webp')));
        } catch (err) {
          console.error('Помилка завантаження деталей товару:', err);
          setError('Не вдалося завантажити дані товару.');
        }
      };
      fetchProductDetails();
    } else {
      setFormData({
        category_id: '',
        brand_id: '',
        name: '',
        volume: '',
        images: [{ type: 'new', file: null }],
        code: '',
        features: [{ key: '', value: '' }],
        description: '',
        description_full: '',
        composition: '',
        usage: '',
        store_prices: [{ store_id: '', price: '', link: '' }],
      });
      setPreviewImages([]);
    }
  }, [selectedProductId]);

  const handleInputChange = (e, index, field, type) => {
    const { name, value } = e.target;
    if (type === 'image') {
      const newImages = [...formData.images];
      const newPreviewImages = [...previewImages];
      if (e.target.files[0]) {
        newImages[index] = { type: 'new', file: e.target.files[0] };
        newPreviewImages[index] = URL.createObjectURL(e.target.files[0]);
      } else {
        newImages[index] = { type: 'new', file: null };
        newPreviewImages[index] = null;
      }
      setFormData({ ...formData, images: newImages });
      setPreviewImages(newPreviewImages);
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
      setFormData({ ...formData, images: [...formData.images, { type: 'new', file: null }] });
      setPreviewImages([...previewImages, null]);
    }
  };

  const removeImageField = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    const newPreviewImages = previewImages.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages.length > 0 ? newImages : [{ type: 'new', file: null }] });
    setPreviewImages(newPreviewImages.length > 0 ? newPreviewImages : []);
  };

  const addFeatureField = () => {
    if (formData.features.length < 10) {
      setFormData({ ...formData, features: [...formData.features, { key: '', value: '' }] });
    }
  };

  const removeFeatureField = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures.length > 0 ? newFeatures : [{ key: '', value: '' }] });
  };

  const addStorePriceField = () => {
    if (formData.store_prices.length < 10) {
      setFormData({
        ...formData,
        store_prices: [...formData.store_prices, { store_id: '', price: '', link: '' }],
      });
    }
  };

  const removeStorePriceField = (index) => {
    const newStorePrices = formData.store_prices.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      store_prices: newStorePrices.length > 0 ? newStorePrices : [{ store_id: '', price: '', link: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedProductId) {
      setError('Виберіть товар для редагування.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    if (!formData.category_id || !formData.brand_id || !formData.name) {
      setError('Заповніть обов’язкові поля: категорія, бренд, назва');
      setIsLoading(false);
      return;
    }

    const token = localStorage.getItem('token');
    const formDataToSend = new FormData();

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

    const existingImages = formData.images
      .filter(image => image.type === 'existing' && image.url && !image.url.includes('placeholder.webp'))
      .map(image => image.url);
    formDataToSend.append('existing_images', JSON.stringify(existingImages));

    formData.images.forEach((image) => {
      if (image.type === 'new' && image.file instanceof File) {
        formDataToSend.append('images', image.file);
      }
    });

    try {
      await axios.put(`https://price-ua-react-backend.onrender.com/admin/product/${selectedProductId}`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Товар успішно оновлено!');
    } catch (err) {
      console.error('Помилка оновлення товару:', {
        message: err.message,
        response: err.response ? err.response.data : 'No response data',
      });
      setError(err.response?.data?.error || 'Не вдалося оновити товар. Перевірте дані або підключення до сервера.');
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

  const getAvailableFeatureOptions = (currentIndex) => {
    const selectedKeys = formData.features
      .filter((_, index) => index !== currentIndex)
      .map(f => f.key)
      .filter(key => key);
    return featureOptions.filter(option => !selectedKeys.includes(option.key));
  };

  const getAvailableStoreOptions = (currentIndex) => {
    const selectedStoreIds = formData.store_prices
      .filter((_, index) => index !== currentIndex)
      .map(s => s.store_id)
      .filter(id => id);
    return stores.filter(store => !selectedStoreIds.includes(store.id.toString()));
  };

  return (
    <div className="admin-product-edit animate-page">
      <h2 className="centered-heading">Редагувати товар</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group animate-field">
          <label>Товар</label>
          <select
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
          >
            <option value="">Виберіть товар</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} (ID: {product.id})
              </option>
            ))}
          </select>
        </div>
        <div className="form-group animate-field">
          <label>Категорія</label>
          <select
            name="category_id"
            value={formData.category_id}
            onChange={(e) => handleInputChange(e)}
            required
            disabled={categories.length === 0}
          >
            <option value="">Виберіть категорію</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name_ua}
              </option>
            ))}
          </select>
          {categories.length === 0 && <p>Завантаження категорій...</p>}
        </div>
        <div className="form-group animate-field">
          <label>Бренд</label>
          <select
            name="brand_id"
            value={formData.brand_id}
            onChange={(e) => handleInputChange(e)}
            required
            disabled={brands.length === 0}
          >
            <option value="">Виберіть бренд</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
          {brands.length === 0 && <p>Завантаження брендів...</p>}
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
              <div className="button-group">
                {index === formData.images.length - 1 && formData.images.length < 10 && (
                  <>
                    <button type="button" className="add-button" onClick={addImageField}>
                      +
                    </button>
                    {formData.images.length > 1 && (
                      <button type="button" className="remove-button" onClick={() => removeImageField(index)}>
                        -
                      </button>
                    )}
                  </>
                )}
                {index !== formData.images.length - 1 && (
                  <button type="button" className="remove-button" onClick={() => removeImageField(index)}>
                    -
                  </button>
                )}
              </div>
            </div>
            {previewImages[index] && (
              <div className="image-preview">
                <img src={previewImages[index]} alt={`Preview ${index + 1}`} />
              </div>
            )}
          </div>
        ))}
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
              <div className="button-group">
                {index === formData.features.length - 1 && formData.features.length < 10 && (
                  <>
                    <button type="button" className="add-button" onClick={addFeatureField}>
                      +
                    </button>
                    {formData.features.length > 1 && (
                      <button type="button" className="remove-button" onClick={() => removeFeatureField(index)}>
                        -
                      </button>
                    )}
                  </>
                )}
                {index !== formData.features.length - 1 && (
                  <button type="button" className="remove-button" onClick={() => removeFeatureField(index)}>
                    -
                  </button>
                )}
              </div>
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
              <div className="button-group">
                {index === formData.store_prices.length - 1 && formData.store_prices.length < 10 && (
                  <>
                    <button type="button" className="add-button" onClick={addStorePriceField}>
                      +
                    </button>
                    {formData.store_prices.length > 1 && (
                      <button type="button" className="remove-button" onClick={() => removeStorePriceField(index)}>
                        -
                      </button>
                    )}
                  </>
                )}
                {index !== formData.store_prices.length - 1 && (
                  <button type="button" className="remove-button" onClick={() => removeStorePriceField(index)}>
                    -
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        {error && <div className="error-message centered-message">{error}</div>}
        {success && <div className="success-message centered-message">{success}</div>}
        <button type="submit" className="save-button animate-field" disabled={isLoading}>
          {isLoading ? 'Оновлення...' : 'Оновити товар'}
        </button>
      </form>
    </div>
  );
}

export default AdminProductEdit;