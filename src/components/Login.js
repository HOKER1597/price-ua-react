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
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
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

  return (
    <div className="auth-page">
      <div className={`auth-container ${animate ? 'animate' : ''}`}>
        <h2 className="auth-title">{isLogin ? 'Увійти в аккаунт' : 'Створити аккаунт'}</h2>
        {error && <p className="error">{error}</p>}
        {isLogin ? (
          <>
            <label className="auth-label">Нікнейм або пошта</label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              onKeyPress={handleKeyPress}
              className="auth-input"
              placeholder="Введіть нікнейм або пошту"
            />
            <label className="auth-label">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="auth-input"
              placeholder="Введіть пароль"
            />
            <button onClick={handleLogin} className="auth-button">
              Увійти
            </button>
            <p className="auth-switch" onClick={() => setIsLogin(false)}>
              Створити аккаунт
            </p>
          </>
        ) : (
          <>
            <label className="auth-label">Нікнейм</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              onKeyPress={handleKeyPress}
              className="auth-input"
              placeholder="Введіть нікнейм"
            />
            <label className="auth-label">Пошта</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="auth-input"
              placeholder="Введіть пошту"
            />
            <label className="auth-label">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="auth-input"
              placeholder="Введіть пароль"
            />
            <button onClick={handleRegister} className="auth-button">
              Створити аккаунт
            </button>
            <p className="auth-switch" onClick={() => setIsLogin(true)}>
              Увійти
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;