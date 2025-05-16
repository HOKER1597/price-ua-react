import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setupAxiosInterceptors, logout } from './auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Setup Axios interceptors
    setupAxiosInterceptors(navigate, setUser);

    // Initialize user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Listen for storage changes (e.g., logout in another tab)
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem('user');
      if (updatedUser) {
        setUser(JSON.parse(updatedUser));
      } else {
        setUser(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [navigate]);

  const handleLogout = () => {
    logout(navigate, setUser);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};