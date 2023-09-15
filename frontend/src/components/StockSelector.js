import React from 'react';

const StockSelector = ({ selectedStock, setSelectedStock, stockData }) => {
  const handleStockChange = (event) => {
    setSelectedStock(event.target.value);
  };

  return (
    <div>
      <label>Select a Stock: </label>
      <select onChange={handleStockChange} value={selectedStock}>
      <option>Please Select</option>
        {stockData.map((stock) => (
        
          <option key={stock.name} value={stock.name}>
            {stock.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StockSelector;
