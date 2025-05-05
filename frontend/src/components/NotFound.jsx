import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'error.main' }}>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome} sx={{ mt: 3 }}>
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
