import React, { useState } from 'react';
import '../assets/css/product-details.css'

const QuantityInput = ({ initialQuantity = 1, min = 1, max = 99 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > min) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value >= min && value <= max) {
      setQuantity(value);
    }
  };

  return (
    <div className='qntyBox' style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={handleDecrease} style={{ padding: '5px 10px' }}>–</button>
      <input
        type="text"
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
        style={{ width: '50px', textAlign: 'center', margin: '0 5px' }}
      />
      <button onClick={handleIncrease} style={{ padding: '5px 10px' }}>+</button>
    </div>
  );
};

export default QuantityInput;
