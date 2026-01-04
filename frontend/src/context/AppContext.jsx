'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AppContext = createContext();

// App Context Provider Component
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  // Initialize user session from localStorage token
  useEffect(() => {
    const initializeSession = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
          setIsAuthenticated(true);
          // Fetch user data using token
          await fetchUserData(storedToken);
        }
      } catch (err) {
        setError('Failed to initialize session');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    initializeSession();
  }, []);

  // Fetch user data using token
  const fetchUserData = async (authToken) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getusery`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        throw new Error('Failed to fetch user data');
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError(err.message);
    }
  };

  

  // Login function
  const login = (authToken, userData) => {
    setToken(authToken);
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('token', authToken);
    setError(null);
  };

  // Logout function
  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    setError(null);
    router.push('/login');
  };

  // Update user profile
  const updateUser = (updatedData) => {
    const newUserData = { ...user, ...updatedData };
    setUser(newUserData);
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    error,
    token,
    login,
    logout,
    updateUser,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }
  return context;
};