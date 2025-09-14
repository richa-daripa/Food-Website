import React, { createContext, useState } from 'react';
import credentials from '../data';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const navigate=useNavigate();
  
  const login = (data) => {
    if (data.email === credentials.email && data.passwd === credentials.password) {
      setUser(credentials);
      return true;
    }
    return false;
  }

  const logout = () => {
    setUser(null);
    navigate('/');
  }

  return (
      <AuthContext.Provider value={{ user, login, logout}}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;