import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import '../assets/css/productListing.css';

const PriceSlider = () => {
  const [values, setValues] = useState([0, 100]);

  const handleChange = (newValues) => setValues(newValues);

  return (
    <div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        value={values}
        onChange={handleChange}
        min={0}
        max={4500}
        pearling
        minDistance={10}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      />

        <p className='text-center rangeValue'>₹ {values[0]}.00 - ₹ {values[1]}.00</p>
    </div>
  );
};

export default PriceSlider;
