import React, { useState, useMemo } from 'react';
import { Container, Box, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import CalculatorForm from './components/CalculatorForm';
import EMIResult from './components/EMIResult';
import CurrencyConverter from './components/CurrencyConverter';
import Navbar from './components/Navbar'; // Reusable navbar
import { AppProvider, useAppTheme, useCurrency } from './context/AppContext'; // useAppTheme renamed
import { createAppTheme } from './theme/theme';
import NotFound from './components/NotFound'; // Import NotFound component

const AppContent = () => {
  const [emiResult, setEmiResult] = useState(null);
  const { theme } = useAppTheme();  // Access theme from context
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
      <Router> {/* Wrap the app in Router for routing */}
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/notfound" element={<NotFound />} /> {/* Add a route for NotFound */}
          <Route path="*" element={<NotFound />} /> {/* Handle unknown routes */}
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
