import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/admin.css';
import CountryStateCity from './CountryStateCity';
import { BaseUrl } from '../utills/BaseUrl';
import { toast } from 'react-toastify';
import { FaHome } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";

const addressTypes = [
  { value: 'HOME', icon: <FaHome />, label: 'Home' },
  { value: 'OFFICE', icon: <PiBuildingOfficeFill />, label: 'Office' },
  { value: 'OTHER', icon: <PiBuildingOfficeFill />, label: 'Other' },
];

function CheckoutAddress({ onSaveData, editAddress, setIsEditing, triggerSubmit }) {
  const initialForm = {
    name: '',
    email: '',
    state: '',
    city: '',
    line1: '',
    line2: '',
    line3: '',
    locality: '',
    landmark: '',
    contact: '',
    zipcode: '',
    addressType: ''
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [currentState, setCurrentState] = useState('');

  useEffect(() => {
    if (editAddress) {
      setFormData(editAddress);
      setCurrentState({ name: editAddress.state });
    }
  }, [editAddress]);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      state: currentState?.name,
    }));
  }, [currentState]);

  // ✅ Register submit function to parent
  useEffect(() => {
    if (triggerSubmit) {
      triggerSubmit(submitAddressData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    let error = '';

    if (name === 'name' || name === 'city') {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        error = `${name} must only contain letters.`;
      }
      updatedValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'zipcode' || name === 'contact') {
      if (!/^\d*$/.test(value)) {
        error = `${name} must only contain numbers.`;
      }
      updatedValue = value.replace(/\D/g, '');
    }

    setFormData(prev => ({ ...prev, [name]: updatedValue }));
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // ✅ Core function: used in both submit & placeOrder
  const submitAddressData = async () => {
    try {
      const token = localStorage.getItem('victuraAuthToken');
      const url = editAddress
        ? `${BaseUrl}/userAddress/${editAddress._id}`
        : `${BaseUrl}/userAddress`;

      const method = editAddress ? 'put' : 'post';

      await axios[method](url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      onSaveData(formData);
      setFormData(initialForm);
      setCurrentState('');
      if (editAddress) setIsEditing(false);

      return true;
    } catch (error) {
      if (error.response?.data?.errors) {
        const newErrors = {};
        Object.keys(error.response.data.errors).forEach(key => {
          newErrors[key] = error.response.data.errors[key];
        });
        setErrors(newErrors);
      } else {
        console.error('Error saving address:', error);
        toast.error('Failed to save address');
      }

      return false;
    }
  };

  return (
    <div className='dashboard'>
      <h3>Shipping address</h3>
      <div className="row">
        <div style={{ width: "90%" }}>
          {[
            { name: 'name', placeholder: 'Name*' },
            { name: 'email', placeholder: 'Email*' },
            { name: 'contact', placeholder: 'Mobile*' },
            { name: 'zipcode', placeholder: 'Zipcode*' },
            { name: 'line1', placeholder: 'Address line1*' },
            { name: 'line2', placeholder: 'Address line2' },
            { name: 'line3', placeholder: 'Address line3' },
            { name: 'locality', placeholder: 'Locality' },
            { name: 'landmark', placeholder: 'Landmark' },
            { name: 'city', placeholder: 'City*' },
          ].map(({ name, placeholder }) => (
            <div className="input-box d-flex" key={name}>
              <div className="w-100">
                <input
                  type="text"
                  className='form-control'
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                />
                {errors[name] && <small className="text-danger">{errors[name]}</small>}
              </div>
            </div>
          ))}

          <CountryStateCity
            currentState={currentState}
            setCurrentState={setCurrentState}
            errors={errors}
          />

          <div className="input-box d-flex">
            <div className="d-flex align-items-center">
              {addressTypes.map((type) => (
                <div className="form-check me-3" key={type.value}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="addressType"
                    id={`addressType-${type.value}`}
                    value={type.value}
                    checked={formData.addressType === type.value}
                    onChange={(e) => setFormData(prev => ({ ...prev, addressType: e.target.value }))}
                  />
                  <label className="form-check-label" htmlFor={`addressType-${type.value}`}>
                    {type.label}
                  </label>
                </div>
              ))}
            </div>
            {errors.addressType && (
              <div className="w-100">
                <small className="text-danger">{errors.addressType}</small>
              </div>
            )}
          </div>

          {/* 🔧 Optional test button (not needed in production) */}
          {/* <button onClick={submitAddressData}>Submit</button> */}
        </div>
      </div>
    </div>
  );
}

export default CheckoutAddress;
