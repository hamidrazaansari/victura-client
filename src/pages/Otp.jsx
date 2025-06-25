import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../assets/css/login.css';
import Arrow from '../assets/image/arrow-white.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Chech from '../assets/image/check.png';
import UpdateDataModal from '../components/UpdateDataModal';
import { BaseUrl } from '../utills/BaseUrl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import LoginImage from '../assets/image/loginPageImage.png'
import { BiSolidPencil } from "react-icons/bi";



function Otp() {
  // const [otp, setOtp] = useState('');
  const [otps, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);

  const inputRefs = useRef([]);
  const navigate = useNavigate()

  const location = useLocation()
  const token = location?.state.token
  const mobile = location?.state.mobile
  const locations = location?.state.locations



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



  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (value) {
      const newOtp = [...otps];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input if available
      if (index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // On backspace, clear the current input and move to previous if it's already empty
    if (e.key === "Backspace") {
      const newOtp = [...otps];

      if (newOtp[index] === "") {
        if (index > 0) {
          inputRefs.current[index - 1].focus(); // Move focus to the previous input
        }
      } else {
        newOtp[index] = ""; // Clear current input
      }

      setOtp(newOtp);
    }
  };
  const otp = otps.join("");

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

      const name = response?.data?.body?.name;
      if (!name) handleShow();

      const victuraAuthToken = response?.data?.body?.token

      if (response.data) {
        toast.success(response.data?.message)
        localStorage.setItem('victuraAuthToken', victuraAuthToken);
        if(locations === '/victura/checkout'){
          navigate(-1)
        }
        else{
          navigate(-2)

        }

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
      await axios.get(`${BaseUrl}/users/resendOtp`, {
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

  console.log(locations);
  

  return (
    <>
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
            <h1><span>Introducing</span> BLDC Fan</h1>
            <p>Let the breeze do the talking</p>
            <img src={LoginImage} className='fanImg' alt="BLDC Fan" />
            <h2>Enter OTP</h2>
            <p className='mb-3'>The OTP is sent on Mobile number </p>

            <div className="edit-phone">
              <span className='m-3 mt-5'>{mobile}</span>
              <BiSolidPencil />
            </div>
            <div className="input-box mt-4">
              {/* <input
                type="text"
                className='form-control otpbox'
                placeholder='Enter OTP*'
                value={otp}
                onChange={handleOtpChange}
                maxLength={6}
              /> */}

              <div className='otp-container'>
                {otps.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className='input'
                  />
                ))}
              </div>
              {error.otp ? <small>{error.otp}</small> : ''}
            </div>


            <button
              className='add-to-cart-btn mt-0'
              onClick={handleVerifyOtp}

            >
              {loading ? 'Verifying...' : 'Verify OTP'} <img src={Arrow} alt="Arrow" />
            </button>

            <p className='text-center mb-1 mt-3'>
              Didn`t Receive the OTP? <span>{resendDisabled ? `00:${timer < 10 ? `0${timer}` : timer}` : '00:00'}</span>
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

            {resendDisabled ? <>
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
    </>

  );
}

export default Otp;
