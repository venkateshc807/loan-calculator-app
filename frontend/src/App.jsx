import React, { useState, useMemo } from 'react';
import { Container, Box, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import CalculatorForm from './components/CalculatorForm';
import EMIResult from './components/EMIResult';
import CurrencyConverter from './components/CurrencyConverter';
import Navbar from './components/Navbar'; 
import { AppProvider, useAppTheme, useCurrency } from './context/AppContext'; 
import { createAppTheme } from './theme/theme';
import NotFound from './components/NotFound';

const AppContent = () => {
  const [emiResult, setEmiResult] = useState(null);
  const { theme } = useAppTheme();  
  const muiTheme = useMemo(() => createAppTheme(theme), [theme]);

  const handleCalculate = (result) => {
    setEmiResult(result);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="sm">
        <Box my={4}>
          <CalculatorForm onCalculate={handleCalculate} />

          {emiResult && (
            <>
              <EMIResult result={emiResult} />
              <CurrencyConverter inrAmount={emiResult.emi} />
            </>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Router> 
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/notfound" element={<NotFound />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
