import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../assets/css/login.css'
import Arrow from '../assets/image/arrow-white.png'
import { BaseUrl } from '../utills/BaseUrl'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import LoginImage from '../assets/image/loginPageImage.png'
import mail from '../assets/image/socalMedia/mail.png'
import CountryCode from '../components/CountryCode'
import { IoMailOutline } from "react-icons/io5";


function LoginSignup() {
  const [mobile, setMobile] = useState('')
  const [loading, setLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(true)
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

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  }

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(`${BaseUrl}/users/register`, { mobile });

      if (response.data?.body?.token) {
        const token = response.data.body.token;
        navigate('/otp', { state: {token , mobile:`+${countrycode} ${mobile}` } });
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
    <div className='login'>
      <NavBar />
      <div className="container my-4">
        <div className="breadcrumb">
          <p>Home</p><span>/</span><p>Login</p>
        </div>
      </div>
      <div className="container">
        <div className="login-box">
          <h1><span>Introducing</span> BLDC Fan</h1>
          <p>Let the breeze do the talking</p>
          <img src={LoginImage} className='fanImg' alt="BLDC Fan" />
          <h2>Login with OTP</h2>
          <p>Enter your log In details</p>
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
          <div className="form-check ps-0">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault3"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault3">
              <p className='condition-text'>I accept that I have read & understand
                Privacy Policy and Terms & Conditions.</p>
            </label>
          </div>







        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginSignup
