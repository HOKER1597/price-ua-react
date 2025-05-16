import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Register() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [animate, setAnimate] = useState(false);
  const [fieldAnimations, setFieldAnimations] = useState({
    nickname: false,
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
    setFieldAnimations({
      nickname: false,
      email: false,
      password: false,
    });

    const timers = [
      setTimeout(() => setFieldAnimations(prev => ({ ...prev, nickname: true })), 100),
      setTimeout(() => setFieldAnimations(prev => ({ ...prev, email: true })), 200),
      setTimeout(() => setFieldAnimations(prev => ({ ...prev, password: true })), 300),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://price-ua-react-backend.onrender.com/register', {
        nickname,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Помилка сервера');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRegister();
    }
  };

  return (
    <div className="auth-page">
      <div className={`auth-container ${animate ? 'animate' : ''}`}>
        <h2 className="auth-title">Створити аккаунт</h2>
        {error && <p className="error">{error}</p>}
        <label className="auth-label">Нікнейм</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          onKeyPress={handleKeyPress}
          className={`auth-input ${fieldAnimations.nickname ? 'field-animate' : ''}`}
          placeholder="Введіть нікнейм"
        />
        <label className="auth-label">Пошта</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
          className={`auth-input ${fieldAnimations.email ? 'field-animate' : ''}`}
          placeholder="Введіть пошту"
        />
        <label className="auth-label">Пароль</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          className={`auth-input ${fieldAnimations.password ? 'field-animate' : ''}`}
          placeholder="Введіть пароль"
        />
        <button onClick={handleRegister} className="auth-button">
          Створити аккаунт
        </button>
        <p className="auth-switch">
          Вже маєте аккаунт? <Link to="/login">Увійти</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;