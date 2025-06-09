import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../assets/css/login.css';
import Arrow from '../assets/image/arrow-white.png';
import { Link, useNavigate } from 'react-router-dom';
import Chech from '../assets/image/check.png';
import UpdateDataModal from '../components/UpdateDataModal';
import { BaseUrl } from '../utills/BaseUrl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function Otp() {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);
  

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let countdown;
    if (resendDisabled && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timer === 0) {
      setResendDisabled(false);
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [timer, resendDisabled]);

  const handleOtpChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    setOtp(numericValue);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');

    try {
      setLoading(true);
      const response = await axios.post(`${BaseUrl}/users/verifyAccount`, { otp }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      console.log(response);
      

      if (response.data) {
        toast.success(response.data?.message)
        navigate('/')

      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      console.error('OTP Verification Error:', error);
      toast.error(error.response?.data?.message)
      setError(error.response?.data.errors);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      setResendDisabled(true);
      setTimer(30);
      await axios.get(`${BaseUrl}/users/resendOtp`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      console.log('OTP Resent');
    } catch (err) {
      console.error('Error resending OTP:', err);
      setError(error.response?.data.errors);

    }
  };

  return (
    <div className='login'>
       <ToastContainer />
      <NavBar />
      <div className="container my-4">
        <div className="breadcrumb">
          <p>Home</p><span>/</span><p>Login</p>
        </div>
      </div>

      <div className="container">
        <div className="login-box">
          <h2>Login / Sign up</h2>
          <div className="input-box mt-4">
            <input
              type="text"
              className='form-control'
              placeholder='Enter OTP*'
              value={otp}
              onChange={handleOtpChange}
              maxLength={6}
            />
            {error.otp ? <small>{error.otp}</small>  : ''}
          </div>


          <button
            className='add-to-cart-btn mt-0'
            onClick={handleVerifyOtp}
           
          >
            {loading ? 'Verifying...' : 'Verify OTP'} <img src={Arrow} alt="Arrow" />
          </button>

          <p className='text-center mb-1 mt-3'>
            Resend OTP in <span>{resendDisabled ? `00:${timer < 10 ? `0${timer}` : timer}` : '00:00'}</span>
          </p>

          <p className='text-center'>
            <button
              className="btn btn-link text-dark text-decoration-underline"
              onClick={handleResendOtp}
              disabled={resendDisabled}
              style={{ cursor: resendDisabled ? 'not-allowed' : 'pointer' }}
            >
              Resend OTP
            </button>
          </p>

          {resendDisabled? <>
                    <button className='otp-sent'>
            <img src={Chech} alt="Check" /> OTP Sent Successfully
          </button>
          </> :
          ''
           }

        </div>
      </div>

      <Footer />
      <UpdateDataModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default Otp;
