import React from 'react';

const PriceDisplay = ({ selectedStock, stockData }) => {
  const selectedStockData = stockData.find((stock) => stock.name === selectedStock);

  return (
    <div>
      <h2>Price Display for {selectedStock}</h2>
      {selectedStockData ? (
        <p>Current Price: ₹{selectedStockData.price}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PriceDisplay;
