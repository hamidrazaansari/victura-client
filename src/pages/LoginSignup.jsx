import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../assets/css/login.css'
import Arrow from '../assets/image/arrow-white.png'
import { BaseUrl } from '../utills/BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LoginSignup() {
  const [mobile, setMobile] = useState('')
  const [loading, setLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(false) 
  const [error, setError] = useState('') 


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
        localStorage.setItem('token', token);
        navigate('/otp');
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
          <h2>Login / Sign up</h2>
          <p>Tell us your mobile number to login</p>
          <div className="input-box">
            <input 
              type="text" 
              className='form-control' 
              placeholder='Enter 10 Digit Mobile Number*' 
              value={mobile} 
              onChange={handleNumChange} 
            />
            {error.mobile ? <small >{error.mobile}</small>: ''}
          </div>

          <div className="form-check ps-0">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="flexCheckDefault3" 
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault3">
              By continuing, you agree to <a href="">Terms</a> of Use and <a href="">Privacy Policy</a>
            </label>
          </div>

          <button 
            className='add-to-cart-btn' 
            onClick={handleRegisterUser} 
            disabled={!isChecked || loading} // Disable when unchecked or loading
          >
            {loading ? 'Please wait...' : 'Receive OTP'} 
            <img src={Arrow} alt="Arrow" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginSignup
