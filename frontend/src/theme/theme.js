import { createTheme } from '@mui/material/styles';


const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',   
    },
    text: {
      primary: '#000000', 
      secondary: '#555555', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 400,
    },
    body1: {
      fontWeight: 400,
    },
  },
};

const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', 
    },
    secondary: {
      main: '#f48fb1', 
    },
    background: {
      default: '#121212', 
      paper: '#1d1d1d',   
    },
    text: {
      primary: '#ffffff', 
      secondary: '#e0e0e0', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 400,
    },
    body1: {
      fontWeight: 400,
    },
  },
};

export const createAppTheme = (mode) => {
  return createTheme(mode === 'dark' ? darkTheme : lightTheme);
};
