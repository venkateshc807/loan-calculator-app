import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';

// Creating context for theme and currency
const ThemeContext = createContext();
const CurrencyContext = createContext();

// AppProvider component to manage theme and currency states
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');  // default theme is light
  const [currency, setCurrency] = useState('INR');  // default currency is INR

  // Toggle between light and dark themes
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  // Change currency between INR and USD
  const changeCurrency = useCallback((newCurrency) => {
    setCurrency(newCurrency);
  }, []);

  // Memoizing context values to avoid unnecessary re-renders
  const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  const currencyContextValue = useMemo(
    () => ({ currency, changeCurrency }),
    [currency, changeCurrency]
  );

  // Providing context values to child components
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <CurrencyContext.Provider value={currencyContextValue}>
        {children}
      </CurrencyContext.Provider>
    </ThemeContext.Provider>
  );
};

// Custom hook for accessing theme context
export const useAppTheme = () => useContext(ThemeContext);

// Custom hook for accessing currency context
export const useCurrency = () => useContext(CurrencyContext);
