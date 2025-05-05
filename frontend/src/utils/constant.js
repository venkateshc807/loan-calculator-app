export const API_BASE_URL = "https://api.example.com";  
export const API_GET_CURRENCY_RATES = `${API_BASE_URL}/currency-rates`;  
export const API_GET_EMI_RATES = `${API_BASE_URL}/emi-rates`;  

export const CURRENCY_LIST = [
  { code: 'INR', name: 'Indian Rupee' },
  { code: 'USD', name: 'United States Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },

];


export const DEFAULT_CURRENCY = 'INR';  


export const EMI_INTEREST_RATE = 0.08;  


export const MAX_LOAN_AMOUNT = 1000000; 
export const MIN_LOAN_AMOUNT = 1000;  

export const THEME_MODES = ['light', 'dark'];  

export const DEFAULT_THEME = 'light'; 


export const LOAN_TENURE_OPTIONS = [
  { value: 12, label: '12 months' },
  { value: 24, label: '24 months' },
  { value: 36, label: '36 months' },
  { value: 48, label: '48 months' },
  { value: 60, label: '60 months' },
];
