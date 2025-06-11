import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token && !user) {
      fetchProfile();
    }
  }, [token]);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/${getUserId()}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(res.data);
    } catch (err) {
      console.error('Error fetching profile:', err);
      logout();
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password
      });
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Login failed' };
    }
  };

  const register = async (username, email, password) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
        username,
        email,
        password
      });
      return { success: true, message: res.data.message };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Registration failed' };
    }
  };

  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('token');
  };

  const getUserId = () => {
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.userId;
    } catch (err) {
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
