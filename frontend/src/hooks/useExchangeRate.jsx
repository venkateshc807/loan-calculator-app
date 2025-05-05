import { useState, useEffect } from 'react';


const useExchangeRate = (baseCurrency, targetCurrencies) => {
  const [exchangeRate, setExchangeRate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true);
      try {

        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/abfb8bfd47e5c54ce33b258e/latest/${baseCurrency}`
        );
        const data = await response.json();

        if (data.result !== 'success') {
          throw new Error('Failed to fetch exchange rates');
        }

        const filteredRates = {};
        targetCurrencies.forEach((currency) => {
          filteredRates[currency] = data.conversion_rates[currency];
        });

        setExchangeRate(filteredRates);
      } catch (err) {
        setError('Failed to fetch exchange rates.');
      } finally {
        setLoading(false);
      }
    };

    if (baseCurrency && targetCurrencies.length > 0) {
      fetchExchangeRates();
    }
  }, [baseCurrency, targetCurrencies]);

  return { exchangeRate, loading, error };
};

export default useExchangeRate;
