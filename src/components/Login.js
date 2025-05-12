import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [animate, setAnimate] = useState(false);
  const [fieldAnimations, setFieldAnimations] = useState({
    identifier: false,
    password: false,
    nickname: false,
    email: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
    // Ініціалізація анімацій полів
    setFieldAnimations({
      identifier: false,
      password: false,
      nickname: false,
      email: false,
    });

    // Запуск анімацій полів з затримкою
    const timers = [
      setTimeout(() => setFieldAnimations(prev => ({ ...prev, identifier: true })), 100),
      setTimeout(() => setFieldAnimations(prev => ({ ...prev, password: true })), 200),
      setTimeout(() => setFieldAnimations(prev => ({ ...prev, nickname: true })), 300),
      setTimeout(() => setFieldAnimations(prev => ({ ...prev, email: true })), 400),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isLogin]);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://price-ua-react-backend.onrender.com/login', {
        identifier,
        password,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/');
      // Оновлення сторінки після перенаправлення
      setTimeout(() => window.location.reload(), 100);
    } catch (err) {
      setError(err.response?.data?.error || 'Помилка сервера');
    }
  };

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
      isLogin ? handleLogin() : handleRegister();
    }
  };

  const handleSwitch = (newIsLogin) => {
    // Скидання анімацій перед перемиканням
    setAnimate(false);
    setFieldAnimations({
      identifier: false,
      password: false,
      nickname: false,
      email: false,
    });
    // Затримка для завершення рендерингу перед перезапуском анімації
    setTimeout(() => {
      setIsLogin(newIsLogin);
      setAnimate(true);
    }, 50);
  };

  return (
    <div className="auth-page">
      <div className={`auth-container ${animate ? 'animate' : ''}`}>
        {isLogin ? (
          <>
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
            <p className="auth-switch" onClick={() => handleSwitch(false)}>
              Створити аккаунт
            </p>
          </>
        ) : (
          <>
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
            <p className="auth-switch" onClick={() => handleSwitch(true)}>
              Увійти
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;