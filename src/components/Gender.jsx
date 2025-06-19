import React, { useState } from 'react';

const Gender = () => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="gender-selector d-flex mb-0 align-items-center justify-content-center">
      <div className="gender-options">
        <label className={`gender-card ${gender === 'male' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
          />
          <span>Male</span>
        </label>

        <label className={`gender-card ${gender === 'female' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
          />
          <span>Female</span>
        </label>

        <label className={`gender-card ${gender === 'other' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={gender === 'other'}
            onChange={handleGenderChange}
          />
          <span>Other</span>
        </label>
      </div>
    </div>
  );
};

export default Gender;
