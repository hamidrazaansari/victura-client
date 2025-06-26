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
  const [error, setError] = useState({});
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [name, setName] = useState('')

  const inputRefs = useRef([]);
  const navigate = useNavigate()

  const location = useLocation()
  const token = location?.state.token
  const mobile = location?.state.mobile
  const locations = location?.state.locations
  const username = location?.state.username

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
      const payload = !username.name ? { otp, name } : { otp };

      const response = await axios.post(`${BaseUrl}/users/verifyAccount`, payload, {
        headers: {
          Authorization: `Bearer ${token}`, // if needed
        }
      });

         const victuraAuthToken = response?.data?.body?.token

      if (response.data) {
        localStorage.setItem('victuraAuthToken', victuraAuthToken);
        if(locations === '/victura/checkout'){
          navigate(-1)
        }
        else{
          navigate(-2)

        }
      }

      // handle success
    } catch (error) {
      if (error.response?.data?.errors) {
        // Backend sent field-level validation errors
        setError(error.response.data.errors);
      } else if (error.response?.data?.message) {
        // Backend sent a general message
        setError({ general: error.response.data.message });
      } else {
        // Network error or something unexpected
        setError({ general: 'Something went wrong. Please try again.' });
      }

      console.error('Verification error:', error);
    }
    finally {
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
      setError({resendOtp:'Something went wrong. Please Log in again.'});

    }
  };




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
            </div>


            <div className="input-field">
              {
                !username?.name ?
                  <input
                    type="text"
                    className='form-control'
                    placeholder='Enter Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  :
                  ''
              }

            </div>


            <button
              className='add-to-cart-btn mt-0'
              onClick={handleVerifyOtp}

            >
              {loading ? 'Verifying...' : 'Verify OTP'} <img src={Arrow} alt="Arrow" />
            </button>

              {error.general && <div className="text-danger">{error.general}</div>}
              {error.otp && <div className="text-danger">{error.otp}</div>}
              {error.nameinput && <div className="text-danger">{error.nameinput}</div>}
              {error.resendOtp && <div className="text-danger">{error.resendOtp}</div>}

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
      </div>
    </>

  );
}

export default Otp;
