import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import '../assets/css/admin.css';

const countryOptions = [
  { value: 'India', label: 'India' },
  { value: 'USA', label: 'USA' },
  { value: 'UK', label: 'UK' },
  // Add more countries
];

const stateOptions = {
  India: [
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Karnataka', label: 'Karnataka' },
  ],
  USA: [
    { value: 'California', label: 'California' },
    { value: 'Texas', label: 'Texas' },
    { value: 'New York', label: 'New York' },
  ],
  UK: [
    { value: 'London', label: 'London' },
    { value: 'Manchester', label: 'Manchester' },
  ],
};

function Address() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    state: '',
    street: '',
    city: '',
    phone: '',
    zipcode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (selected) => {
    setFormData(prev => ({ ...prev, country: selected.value, state: '' }));
  };

  const handleStateChange = (selected) => {
    setFormData(prev => ({ ...prev, state: selected.value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://your-api-endpoint.com/save-address', formData);
      console.log('Success:', response.data);
      alert('Address saved successfully!');
    } catch (error) {
      console.error('Error saving address:', error);
      alert('Failed to save address');
    }
  };

  return (
    <div className='dashboard'>
      <h3>Shipping address</h3>
      <div className="row">
        <div className="col-lg-8">
          <div className="input-box d-flex">
            <label>Name*</label>
            <input type="text" className='form-control' name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="input-box d-flex">
            <label>Email*</label>
            <input type="text" className='form-control' name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="input-box d-flex">
            <label>Country / Region*</label>
            <Select styles={{width:"100%"}} options={countryOptions} onChange={handleCountryChange} />
          </div>

          <div className="input-box d-flex">
            <label>State*</label>
            <Select
              options={stateOptions[formData.country] || []}
              onChange={handleStateChange}
              isDisabled={!formData.country}
              styles={{width:"100%"}}
            />
          </div>

          <div className="input-box d-flex" style={{ height: "120px" }}>
            <label>Street address*</label>
            <input type="text" className='form-control' name="street" value={formData.street} onChange={handleChange} />
          </div>

          <div className="input-box d-flex">
            <label>Town / City*</label>
            <input type="text" className='form-control' name="city" value={formData.city} onChange={handleChange} />
          </div>

          <div className="input-box d-flex">
            <label>Phone Number*</label>
            <input type="text" className='form-control' name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="input-box d-flex">
            <label>Zipcode*</label>
            <input type="text" className='form-control' name="zipcode" value={formData.zipcode} onChange={handleChange} />
          </div>

          <button className='add-to-cart-btn' onClick={handleSubmit}>Save Address</button>
        </div>
      </div>
    </div>
  );
}

export default Address;
