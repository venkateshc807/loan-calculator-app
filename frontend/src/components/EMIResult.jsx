import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider
} from '@mui/material';

const EMIResult = ({ result }) => {
  if (!result) return null;

  const {
    emi,
    totalInterest,
    totalPayment,
    principal,
    interestRate,
    loanTerm
  } = result;

 
  const generateSchedule = () => {
    const schedule = [];
    let remainingPrincipal = principal;
    const monthlyRate = interestRate / 12 / 100;

    for (let month = 1; month <= loanTerm; month++) {
      const interest = remainingPrincipal * monthlyRate;
      const principalComponent = emi - interest;
      remainingPrincipal -= principalComponent;

      schedule.push({
        month,
        interest: interest.toFixed(2),
        principal: principalComponent.toFixed(2),
        balance: remainingPrincipal > 0 ? remainingPrincipal.toFixed(2) : '0.00'
      });
    }

    return schedule;
  };

  const schedule = generateSchedule();

  return (
    <Box sx={{ maxWidth: 800, margin: '2rem auto' }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom align="center">
          EMI Calculation Result
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography><strong>Loan Amount:</strong> ₹{principal}</Typography>
        <Typography><strong>Interest Rate:</strong> {interestRate}%</Typography>
        <Typography><strong>Loan Term:</strong> {loanTerm} months</Typography>
        <Typography><strong>Monthly EMI:</strong> ₹{emi}</Typography>
        <Typography><strong>Total Interest:</strong> ₹{totalInterest}</Typography>
        <Typography><strong>Total Payment:</strong> ₹{totalPayment}</Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" gutterBottom>
          Amortization Schedule:
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell>Principal</TableCell>
                <TableCell>Interest</TableCell>
                <TableCell>Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((row) => (
                <TableRow key={row.month}>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>₹{row.principal}</TableCell>
                  <TableCell>₹{row.interest}</TableCell>
                  <TableCell>₹{row.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default EMIResult;
