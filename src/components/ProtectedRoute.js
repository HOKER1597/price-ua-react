import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';

function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const checkToken = async () => {
      // Skip validation if already on login page to avoid infinite redirects
      if (location.pathname === '/login') {
        console.log('On login page, skipping token validation');
        setIsAuthenticated(false);
        return;
      }

      const token = localStorage.getItem('token');
      console.log('Checking token:', { token: token ? 'present' : 'missing' });

      if (!token) {
        console.log('No token found, redirecting to login');
        setIsAuthenticated(false);
        return;
      }

      try {
        console.log('Making API call to /profile');
        const response = await axios.get('https://price-ua-react-backend.onrender.com/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Token validation successful:', response.data);
        setIsAuthenticated(true);
      } catch (err) {
        console.error('Token validation failed:', {
          status: err.response?.status,
          data: err.response?.data,
          message: err.message,
        });
        if (
          err.response?.status === 401 ||
          err.response?.status === 403 ||
          err.response?.data?.error?.toLowerCase().includes('недійсний токен') ||
          err.response?.data?.error?.toLowerCase().includes('jwt expired')
        ) {
          console.log('Invalid or expired token, clearing token and redirecting to login');
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        } else {
          console.error('Unexpected error during token validation:', err);
          setIsAuthenticated(false); // Redirect on any error to be safe
        }
      }
    };

    checkToken();
  }, [location.pathname]);

  if (isAuthenticated === null) {
    return <div>Перевірка авторизації...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />;
}

export default ProtectedRoute;