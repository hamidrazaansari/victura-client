import React, { useState } from 'react'
import '../assets/css/login.css'
import Arrow from '../assets/image/arrow-white.png'
import { BaseUrl } from '../utills/BaseUrl'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import CountryCode from '../components/CountryCode'


function CheckoutLogin() {
    const [mobile, setMobile] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [countrycode, setCountryCode] = useState('')

    const CountryCodeChange = (countryCode) => {
        setCountryCode(countryCode)
    }


    const navigate = useNavigate()

    const handleNumChange = (e) => {
        const input = e.target.value;
        const numericValue = input.replace(/\D/g, '');
        setMobile(numericValue);
    }


    const handleRegisterUser = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await axios.post(`${BaseUrl}/users/register`, { mobile });

            if (response.data?.body?.token) {
                const token = response.data.body.token;
                    navigate('/otp', { state: {token , mobile:`${mobile}` , locations: location.pathname } });
            } else {
                console.log('Token not found in response');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setError(error.response?.data?.errors)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='login-box justify-content-start align-items-start'>
            <h2 style={{textAlign:"start" , marginBottom:"5px"}}>Login</h2>
            <p style={{ fontSize:"14px"}}>You're almost there! Just log in to complete your checkout</p>
            <div className="input-box">
                <CountryCode
                    CountryCodeChange={CountryCodeChange}
                    defaultCountryCode={`91`}
                />
                <input
                    type="text"
                    className='form-control inputMobile'
                    placeholder='Phone number'
                    value={mobile}
                    onChange={handleNumChange}
                />
                {error.mobile ? <small >{error.mobile}</small> : ''}
            </div>
            <button
                className='add-to-cart-btn'
                onClick={handleRegisterUser}
            // disabled={!isChecked || loading} // Disable when unchecked or loading
            >
                {loading ? 'Please wait...' : 'Receive OTP'}
                <img src={Arrow} alt="Arrow" />
            </button>
        </div>
    )
}

export default CheckoutLogin
