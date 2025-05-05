import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import useExchangeRate from '../hooks/useExchangeRate'; 

const CurrencyConverter = ({ inrAmount }) => {
  const [currencies] = useState(['USD', 'EUR', 'GBP', 'AUD', 'JPY']);
  const { exchangeRate, loading, error } = useExchangeRate('INR', currencies);

  if (!inrAmount) return null;

  return (
    <Box mt={4}>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          EMI in Other Currencies
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <List>
            {currencies.map((currency) => (
              <ListItem key={currency} divider>
                <ListItemText
                  primary={`${currency}: ${(inrAmount * exchangeRate[currency]).toFixed(2)}`}
                  secondary={`1 INR = ${exchangeRate[currency].toFixed(4)} ${currency}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
};

export default CurrencyConverter;
