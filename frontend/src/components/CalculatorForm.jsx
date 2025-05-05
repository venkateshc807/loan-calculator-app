import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid
} from '@mui/material';
import useEMICalculator from '../hooks/useEMICalculator';

const CalculatorForm = ({ onCalculate }) => {
  const { emiResult, error, calculateEMI } = useEMICalculator();

  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateEMI(Number(loanAmount), Number(interestRate), Number(loanTerm));
  };


  useEffect(() => {
    if (emiResult && onCalculate) {
      onCalculate(emiResult);
    }
  }, [emiResult, onCalculate]);

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom align="center">
        Loan EMI Calculator
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Loan Amount (₹)"
              placeholder="Enter loan amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              fullWidth
              required
              inputProps={{ min: 0 }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Annual Interest Rate (%)"
              placeholder="e.g. 7.5"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              fullWidth
              required
              inputProps={{ min: 0, step: "0.01" }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Loan Term (in months)"
              placeholder="e.g. 60"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              fullWidth
              required
              inputProps={{ min: 1 }}
            />
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Typography color="error">{error}</Typography>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Calculate EMI
            </Button>
          </Grid>
        </Grid>
      </form>

      {emiResult && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            EMI Calculation Result
          </Typography>
          <Typography>📅 Monthly EMI: ₹{emiResult.emi.toLocaleString()}</Typography>
          <Typography>💰 Total Payment: ₹{emiResult.totalPayment.toLocaleString()}</Typography>
          <Typography>💸 Total Interest: ₹{emiResult.totalInterest.toLocaleString()}</Typography>
        </Box>
      )}
    </Paper>
  );
};

export default CalculatorForm;
