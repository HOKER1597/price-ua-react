import axios from 'axios';

export const setupAxiosInterceptors = (navigate, setUser) => {
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401 && error.response?.data?.error?.includes('jwt expired')) {
        logout(navigate, setUser);
      }
      return Promise.reject(error);
    }
  );
};

export const logout = (navigate, setUser) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  if (setUser) {
    setUser(null);
  }
  window.dispatchEvent(new Event('storage'));
  navigate('/login');
};