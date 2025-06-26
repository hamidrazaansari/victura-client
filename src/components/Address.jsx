import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/admin.css';
import CountryStateCity from './CountryStateCity';
import { BaseUrl } from '../utills/BaseUrl';
import { toast, ToastContainer } from 'react-toastify';
import { FaHome } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";


const addressTypes = [
  { value: 'HOME', icon: <FaHome />, label: 'Home' },
  { value: 'OFFICE', icon: <PiBuildingOfficeFill />, label: 'Office' },
  { value: 'OTHER', icon: <PiBuildingOfficeFill />, label: 'Other' },
];

function Address({ editAddress, isEditing, setIsEditing, onSaveData }) {
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

  const [formData, setFormData] = useState(initialForm || editAddress);
  const [errors, setErrors] = useState({
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
  });
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
  const handleSubmit = async () => {
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
      window.location.reload()

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
      }

      return false;
    }
  };

const handleEditData = async () => {
  try {
    const token = localStorage.getItem('victuraAuthToken');

    const addressData = {
      name: formData.name,
      email: formData.email,
      state: formData.state,
      city: formData.city,
      line1: formData.line1,
      line2: formData.line2,
      line3: formData.line3,
      locality: formData.locality,
      landmark: formData.landmark,
      contact: formData.contact,
      zipcode: formData.zipcode,
      addressType: formData.addressType,
    };

    const response = await axios.put(`${BaseUrl}/userAddress/${editAddress._id}`, addressData, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    if (response.status === 200) {
      toast.success('Address updated successfully!');
      setIsEditing(false);
      onSaveData(); // Refresh list
      setFormData(initialForm);
      setCurrentState('');
    }
  } catch (error) {
    if (error.response?.data?.errors) {
      const newErrors = {};
      Object.keys(error.response.data.errors).forEach(key => {
        newErrors[key] = error.response.data.errors[key];
      });
      setErrors(newErrors);
    } else {
      console.error('Error updating address:', error);
    }
  }
};


const handleSave = () => {
  if (isEditing) {
    handleEditData();
  } else {
    handleSubmit();
  }
};

  return (
    <>
      <ToastContainer />
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
                  <div className="form-check me-3 ps-0" key={type.value}>
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

            <button
              className='add-to-cart-btn'
              onClick={() => handleSave(editAddress)}
            >
              {isEditing ? 'Update Address' : 'Save Address'}
            </button>
          </div>
        </div>
      </div>
    </>

  );
}

export default Address; 


