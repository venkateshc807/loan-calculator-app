import { useState } from 'react';

const useEMICalculator = () => {
  const [emiResult, setEmiResult] = useState(null);
  const [error, setError] = useState('');


  const calculateEMI = (loanAmount, interestRate, loanTerm) => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const months = parseInt(loanTerm);


    if (!principal || !annualRate || !months || principal <= 0 || annualRate <= 0 || months <= 0) {
      setError('Please enter valid positive numbers for all fields.');
      setEmiResult(null);
      return;
    }

    setError('');
    

    const monthlyRate = annualRate / 12 / 100;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    const result = {
      emi: emi.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      principal,
      interestRate: annualRate,
      loanTerm: months
    };

    setEmiResult(result);
  };

  return { emiResult, error, calculateEMI };
};

export default useEMICalculator;
