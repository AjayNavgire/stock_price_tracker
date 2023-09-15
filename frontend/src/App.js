import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockSelector from './components/StockSelector';
import PriceDisplay from './components/PriceDisplay';

function App() {
  const [selectedStock, setSelectedStock] = useState('');
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get('api/stock/list');

        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    // Fetch stock data initially
    fetchStockData();

    // Set up polling to fetch data every minute
    const intervalId = setInterval(fetchStockData, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="App">
      <h1>Mini Stock Price Tracker</h1>
      <StockSelector
        selectedStock={selectedStock}
        setSelectedStock={setSelectedStock}
        stockData={stockData}
      />
      <PriceDisplay selectedStock={selectedStock} stockData={stockData} />
    </div>
  );
}

export default App;
