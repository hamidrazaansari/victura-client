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
];

function Address({ editAddress, isEditing, onSave, setIsEditing, onSaveData }) {
  const initialForm = {
    name: '',
    email: '',
    country: '',
    state: '',
    city: '',
    address: '',
    mobile: '',
    pincode: '',
    addressType: ''
  };

  const [formData, setFormData] = useState(initialForm || editAddress);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    country: '',
    state: '',
    city: '',
    address: '',
    mobile: '',
    pincode: '',
    addressType: ''
  });
  const [country, setCountry] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [existingAddresses, setExistingAddresses] = useState([]);


  useEffect(() => {
    const fetchAddresses = async () => {
      const token = localStorage.getItem('victuraAuthToken');
      try {
        const res = await axios.get(`${BaseUrl}/userAddress`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setExistingAddresses(res.data?.body || []);
      } catch (err) {
        console.error("Error fetching addresses:", err);
      }
    };
    fetchAddresses();
  }, []);


  useEffect(() => {
    if (editAddress) {
      setFormData(editAddress);
      const countryObj = { name: editAddress.country };
      const stateObj = { name: editAddress.state };
      const cityObj = { name: editAddress.city };
      setCountry(countryObj);
      setCurrentState(stateObj);
      setCurrentCity(cityObj);
    }
  }, [editAddress]);

  // Sync location values to formData
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      country: country?.name,
      state: currentState?.name,
      city: currentCity?.name
    }));
  }, [country, currentState, currentCity, formData.address]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'name' && !/^[a-zA-Z\s]*$/.test(value)) {
      error = 'Name should only contain alphabets';
    } else if ((name === 'pincode' || name === 'mobile') && !/^\d*$/.test(value)) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} should only contain numbers`;
    }

    if (name === 'name' && !/^[a-zA-Z\s]*$/.test(value)) {
      value = value.replace(/[^a-zA-Z\s]/g, '');
    } else if ((name === 'pincode' || name === 'mobile') && !/^\d*$/.test(value)) {
      value = value.replace(/\D/g, '');
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  const token = localStorage.getItem('victuraAuthToken');


  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('victuraAuthToken');
      await axios.post(`${BaseUrl}/userAddress`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      toast.success('Address saved successfully!');
      setFormData(initialForm);
      setCountry('');
      setCurrentState('');
      setCurrentCity('');
      onSave();
      onSaveData(formData);

    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const newErrors = {};
        Object.keys(error.response.data.errors).forEach(key => {
          newErrors[key] = error.response.data.errors[key];
        });
        setErrors(newErrors);
      } else {
        console.error('Error saving address:', error);
        toast.error('Failed to save address');
      }
    }
  };

  const handleEditData = async () => {
    try {
      const token = localStorage.getItem('victuraAuthToken');
      const addressData = {
        name: formData.name,
        email: formData.email,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        address: formData.address,
        mobile: formData.mobile,
        pincode: formData.pincode,
        addressType: formData.addressType,
      };

      const response = await axios.put(`${BaseUrl}/userAddress/${editAddress._id}`, addressData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if (response.status === 200) {
        setIsEditing(false)
        toast.success('Address updated successfully!');

      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const newErrors = {};
        Object.keys(error.response.data.errors).forEach(key => {
          newErrors[key] = error.response.data.errors[key];
        });
        setErrors(newErrors);
      } else {
        console.error('Error updating address:', error);
        toast.error('Failed to update address');
      }
    }
  };

  const handleSave = () => {
    if (!isEditing) {
      alert()
      handleSubmit()
    }
    handleEditData()
  };

  return (
    <>
      <ToastContainer />
      <div className='dashboard'>
        <h3>Shipping address</h3>
        <div className="row">
          <div style={{ width: "90%" }}>

            <div className="input-box d-flex">
              <div className="d-flex align-items-center">
                {addressTypes.map((type) => (
                  <div className="form-check me-3" key={type.value}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="addressType"
                      id={type.label}
                      value={type.value}
                      checked={formData.addressType === type.value}
                      onChange={(e) => setFormData({ ...formData, addressType: e.target.value })}
                    />
                    <label className="form-check-label" htmlFor={type.label}>
                      {type.icon} {type.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className="w-100">
                {errors.addressType && <small className="text-danger" style={{ left: "30px", bottom: "-10px" }}>{errors.addressType}</small>}
              </div>
            </div>
            {/* Name */}
            <div className="input-box d-flex">
              {/* <label>Name*</label> */}
              <div className="w-100">
                <input type="text" className='form-control' name="name" placeholder='Name*' value={formData.name} onChange={handleChange} />
                {errors.name && <small className="text-danger" style={{ left: "58px", bottom: "-17px" }}>{errors.name}</small>}
              </div>
            </div>

            {/* Email */}
            <div className="input-box d-flex">
              {/* <label>Email*</label> */}
              <div className="w-100">
                <input type="text" className='form-control' name="email" placeholder='Email*' value={formData.email} onChange={handleChange} />
                {errors.email && <small className="text-danger" style={{ left: "58px", bottom: "-17px" }}>{errors.email}</small>}
              </div>
            </div>

            {/* Country/State/City */}
            <CountryStateCity
              setCountry={setCountry}
              country={country}
              currentCity={currentCity}
              setCurrentCity={setCurrentCity}
              currentState={currentState}
              setCurrentState={setCurrentState}
              errors={errors}
            />

            {/* Street Address */}
            <div className="input-box d-flex" style={{ height: "120px" }}>
              {/* <label>Street address*</label> */}
              <div className="w-100">
                <input type="text" className='form-control' name="address" placeholder='Address' value={formData.address} onChange={handleChange} />
                {errors.address && <small className="text-danger" style={{ left: "120px", bottom: "-17px" }}>{errors.address}</small>}
              </div>
            </div>

            {/* Phone */}
            <div className="input-box d-flex">
              {/* <label>Phone Number*</label> */}
              <div className="w-100">
                <input type="text" className='form-control' placeholder='Mobile*' name="mobile" value={formData.mobile} onChange={handleChange} />
                {errors.mobile && <small className="text-danger" style={{ left: "120px", bottom: "-17px" }}>{errors.mobile}</small>}
              </div>
            </div>

            {/* Zipcode */}
            <div className="input-box d-flex">
              {/* <label>Zipcode*</label> */}
              <div className="w-100">
                <input type="text" placeholder='Zipcode*' className='form-control' name="pincode" value={formData.pincode} onChange={handleChange} />
                {errors.pincode && <small className="text-danger" style={{ left: "72px", bottom: "-17px" }}>{errors.pincode}</small>}
              </div>
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
