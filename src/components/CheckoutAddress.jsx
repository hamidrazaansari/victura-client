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

function CheckoutAddress({onSaveData , editAddress, setIsEditing , triggerSubmit }) {
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
            const stateObj = { name: editAddress.state };
            setCurrentState(stateObj);
        }
    }, [editAddress]);

    // Sync location values to formData
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
                error = `${name.charAt(0).toUpperCase() + name.slice(1)} should only contain alphabets`;
            }
            updatedValue = value.replace(/[^a-zA-Z\s]/g, '');
        } else if (name === 'zipcode' || name === 'contact') {
            if (!/^\d*$/.test(value)) {
                error = `${name.charAt(0).toUpperCase() + name.slice(1)} should only contain numbers`;
            }
            updatedValue = value.replace(/\D/g, '');
        } else {
            // 🔓 Allow anything for other fields (no validation or formatting)
            updatedValue = value;
            error = '';
        }

        setFormData(prev => ({ ...prev, [name]: updatedValue }));
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const submitAddressData = async () => {
        try {
            const token = localStorage.getItem('victuraAuthToken');
            await axios.post(`${BaseUrl}/userAddress`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            onSaveData(formData);
            setFormData(initialForm);
            setCurrentState('');

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
                state: formData.state,
                city: formData.city,
                line1: formData.line1,
                line2: formData.line2,
                line3: formData.line3,
                locality: formData.locality,
                landmark: formData.landmark,
                contact: formData.contact,
                zipcode: formData.zipcode,
                addressType: formData.addressType
            };

            const response = await axios.put(`${BaseUrl}/userAddress/${editAddress._id}`, addressData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 200) {
                setIsEditing(false)

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
            }
        }
    };

    return (
        <>
            <div className='dashboard'>
                <h3>Shipping address</h3>
                <div className="row">
                    <div style={{ width: "90%" }}>

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

                        {/* Phone */}
                        <div className="input-box d-flex">
                            {/* <label>Phone Number*</label> */}
                            <div className="w-100">
                                <input type="text" className='form-control' placeholder='Mobile*' name="contact" value={formData.contact} onChange={handleChange} />
                                {errors.contact && <small className="text-danger" style={{ left: "120px", bottom: "-17px" }}>{errors.contact}</small>}
                            </div>
                        </div>

                        {/* Zipcode */}
                        <div className="input-box d-flex">
                            {/* <label>Zipcode*</label> */}
                            <div className="w-100">
                                <input type="text" placeholder='Zipcode*' className='form-control' name="zipcode" value={formData.zipcode} onChange={handleChange} />
                                {errors.zipcode && <small className="text-danger" style={{ left: "72px", bottom: "-17px" }}>{errors.zipcode}</small>}
                            </div>
                        </div>
                        {/* Line 1*/}
                        <div className="input-box d-flex">
                            {/* <label>Zipcode*</label> */}
                            <div className="w-100">
                                <input type="text" placeholder='Address line1*' className='form-control' name="line1" value={formData.line1} onChange={handleChange} />
                                {errors.line1 && <small className="text-danger" style={{ left: "72px", bottom: "-17px" }}>{errors.line1}</small>}
                            </div>
                        </div>
                        {/* Line 2 */}
                        <div className="input-box d-flex">
                            {/* <label>Zipcode*</label> */}
                            <div className="w-100">
                                <input type="text" placeholder='Address line2' className='form-control' name="line2" value={formData.line2} onChange={handleChange} />
                                {errors.line2 && <small className="text-danger" style={{ left: "72px", bottom: "-17px" }}>{errors.line2}</small>}
                            </div>
                        </div>
                        {/* Line 3 */}
                        <div className="input-box d-flex">
                            {/* <label>Zipcode*</label> */}
                            <div className="w-100">
                                <input type="text" placeholder='Address line3' className='form-control' name="line3" value={formData.line3} onChange={handleChange} />
                                {errors.line3 && <small className="text-danger" style={{ left: "72px", bottom: "-17px" }}>{errors.line3}</small>}
                            </div>
                        </div>
                        {/* locality  */}
                        <div className="input-box d-flex">
                            {/* <label>Zipcode*</label> */}
                            <div className="w-100">
                                <input type="text" placeholder='locality' className='form-control' name="locality" value={formData.locality} onChange={handleChange} />
                                {errors.locality && <small className="text-danger" style={{ left: "72px", bottom: "-17px" }}>{errors.locality}</small>}
                            </div>
                        </div>
                        {/* landmark  */}
                        <div className="input-box d-flex">
                            {/* <label>Zipcode*</label> */}
                            <div className="w-100">
                                <input type="text" placeholder='Landmark' name='landmark' className='form-control' value={formData.landmark} onChange={handleChange} />
                                {errors.landmark && <small className="text-danger" style={{ left: "72px", bottom: "-17px" }}>{errors.landmark}</small>}
                            </div>
                        </div>
                        {/* city  */}
                        <div className="input-box d-flex">
                            {/* <label>Zipcode*</label> */}
                            <div className="w-100">
                                <input type="text" placeholder='City*' className='form-control' name="city" value={formData.city} onChange={handleChange} />
                                {errors.city && <small className="text-danger" style={{ left: "72px", bottom: "-17px" }}>{errors.city}</small>}
                            </div>
                        </div>
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
                                            id={`addressType-${type.value}`} // unique ID
                                            value={type.value}
                                            checked={formData?.addressType === type.value}
                                            onChange={(e) => setFormData(prev => ({ ...prev, addressType: e.target.value }))}
                                        />
                                        <label className="form-check-label" htmlFor={`addressType-${type.value}`}>
                                            {type.label}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div className="w-100">
                                {errors.addressType && <small className="text-danger" style={{ left: "30px", bottom: "-10px" }}>{errors.addressType}</small>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default CheckoutAddress;
