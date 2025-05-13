import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Account.css';

function Account() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [animate, setAnimate] = useState(false);
  const [fieldAnimations, setFieldAnimations] = useState({
    email: false,
    gender: false,
    birthDate: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setEmail(parsedUser.email || '');
      setGender(parsedUser.gender || '');
      setBirthDate(parsedUser.birth_date ? parsedUser.birth_date.split('T')[0] : '');
      // Start animations
      setAnimate(true);
      setTimeout(() => setFieldAnimations({ email: true, gender: true, birthDate: true }), 100);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://price-ua-react-backend.onrender.com/update-user',
        {
          email,
          gender,
          birth_date: birthDate,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setUser(response.data.user);
      setSuccess('Дані успішно оновлено');
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Помилка сервера');
      setSuccess('');
    }
  };

  if (!user) return null;

  return (
    <div className="account-page">
      <div className={`account-container ${animate ? 'animate' : ''}`}>
        <div className="account-header">
          <div className="account-avatar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#555"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="account-nickname">{user.nickname}</h2>
        </div>
        <div className="account-details">
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <label className="account-label">Пошта</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`account-input ${fieldAnimations.email ? 'field-animate' : ''}`}
            placeholder="Введіть пошту"
          />
          <label className="account-label">Гендер</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={`account-input ${fieldAnimations.gender ? 'field-animate' : ''}`}
          >
            <option value="">Оберіть гендер</option>
            <option value="male">Чоловік</option>
            <option value="female">Жінка</option>
            <option value="other">Інше</option>
          </select>
          <label className="account-label">Дата народження</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className={`account-input ${fieldAnimations.birthDate ? 'field-animate' : ''}`}
          />
          <button onClick={handleUpdate} className="account-button">
            Оновити дані
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;