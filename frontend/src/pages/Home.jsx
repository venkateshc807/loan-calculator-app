import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import CalculatorForm from '../components/CalculatorForm';
import EMIResult from '../components/EMIResult';
import CurrencyConverter from '../components/CurrencyConverter';
import { useTheme } from '../context/AppContext'; 

const Home = () => {
  const [emiResult, setEmiResult] = useState(null); 
  const { theme } = useTheme(); 
  
  return (
    <Container maxWidth="sm">
      <Box my={4} sx={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', padding: 3 }}>
        <CalculatorForm onCalculate={(result) => setEmiResult(result)} />
        
        {emiResult && (
          <>
            <EMIResult result={emiResult} />
            <CurrencyConverter inrAmount={emiResult.emi} />
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
