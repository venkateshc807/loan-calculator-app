import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';


const ThemeContext = createContext();
const CurrencyContext = createContext();


export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 
  const [currency, setCurrency] = useState('INR');  


  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);


  const changeCurrency = useCallback((newCurrency) => {
    setCurrency(newCurrency);
  }, []);


  const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  const currencyContextValue = useMemo(
    () => ({ currency, changeCurrency }),
    [currency, changeCurrency]
  );


  return (
    <ThemeContext.Provider value={themeContextValue}>
      <CurrencyContext.Provider value={currencyContextValue}>
        {children}
      </CurrencyContext.Provider>
    </ThemeContext.Provider>
  );
};


export const useAppTheme = () => useContext(ThemeContext);


export const useCurrency = () => useContext(CurrencyContext);
