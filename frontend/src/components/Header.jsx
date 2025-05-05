import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          EMI Loan Calculator
        </Typography>

        <Box>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
