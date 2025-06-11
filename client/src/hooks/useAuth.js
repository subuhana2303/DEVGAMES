import { useEffect, useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(() => {
    const userInfo = localStorage.getItem('user');
    return userInfo ? JSON.parse(userInfo) : null;
  });

  const login = (userData, token) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  const isLoggedIn = !!user;

  return { user, isLoggedIn, login, logout };
};

export default useAuth;
