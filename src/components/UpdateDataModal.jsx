import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { BaseUrl } from '../utills/BaseUrl';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

function UpdateDataModal({ show, handleClose }) {
  const [name, setName] = useState('');

  const token = localStorage.getItem('victuraAuthToken')

  const navigate = useNavigate()

  const handleUpdateData = async (e) => {
    try {
      await axios.put(`${BaseUrl}/users/updateProfile`, { name }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      console.log('Data Updated...');
      toast.info('Data Updated...')
      navigate(-4)
    } catch (err) {
      console.error('Error resending OTP:', err);

    }
  }
  return (
    <>
      <Modal className='updataData' show={show} >

        <Modal.Body>
          <div className="update-box">
            <h2>Update Details</h2>
            <div className="input-box mt-4">
              <input type="text" className='form-control' placeholder='Name*' value={name} onChange={(e) => {
                const input = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(input)) {
                  setName(input);
                }
              }} />
            </div>
            <div className="input-box mt-4">
              <input type="text" className='form-control' placeholder='Email' />
            </div>

            <button className='add-to-cart-btn' onClick={handleUpdateData}>Update Details</button>
          </div>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default UpdateDataModal;