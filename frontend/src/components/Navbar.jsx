import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  useTheme,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useAppTheme, useCurrency } from '../context/AppContext';

const Navbar = () => {
  const muiTheme = useTheme();
  const { theme, toggleTheme } = useAppTheme();
  const { currency, changeCurrency } = useCurrency();
  const navigate = useNavigate(); // Get navigate function

  // Navigate to Not Found page
  const handleGoToNotFound = () => {
    navigate('/notfound');
  };

  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EMI Calculator
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {muiTheme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <Button
            startIcon={<CurrencyExchangeIcon />}
            onClick={() => changeCurrency(currency === 'INR' ? 'USD' : 'INR')}
            sx={{ ml: 2 }}
            color="inherit"
          >
            {currency}
          </Button>

          {/* Button to go to Not Found page with a contrasting background */}
          <Button
            variant="contained"
            color="error" // Using Material UI's 'error' color for a strong contrast
            onClick={handleGoToNotFound}
            sx={{
              ml: 2,
              backgroundColor: muiTheme.palette.error.main,  // Apply error color dynamically
              '&:hover': {
                backgroundColor: muiTheme.palette.error.dark, // Darken on hover
              },
            }}
          >
            Go to Not Found Page
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
