import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [animate, setAnimate] = useState(false);
  const [fieldAnimations, setFieldAnimations] = useState({
    identifier: false,
    password: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
    setFieldAnimations({
      identifier: false,
      password: false,
    });

    const timers = [
      setTimeout(() => setFieldAnimations(prev => ({ ...prev, identifier: true })), 100),
      setTimeout(() => setFieldAnimations(prev => ({ ...prev, password: true })), 200),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://price-ua-react-backend.onrender.com/login', {
        identifier,
        password,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/');
      setTimeout(() => window.location.reload(), 100);
    } catch (err) {
      setError(err.response?.data?.error || 'Помилка сервера');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="auth-page">
      <div className={`auth-container ${animate ? 'animate' : ''}`}>
        <h2 className="auth-title">Увійти в аккаунт</h2>
        {error && <p className="error">{error}</p>}
        <label className="auth-label">Нікнейм або пошта</label>
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          onKeyPress={handleKeyPress}
          className={`auth-input ${fieldAnimations.identifier ? 'field-animate' : ''}`}
          placeholder="Введіть нікнейм або пошту"
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
        <button onClick={handleLogin} className="auth-button">
          Увійти
        </button>
        <p className="auth-switch">
          Немає аккаунта? <Link to="/register">Створити аккаунт</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;