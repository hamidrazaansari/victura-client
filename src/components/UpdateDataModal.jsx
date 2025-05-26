import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UpdateDataModal({show , handleClose}) {
  return (
    <>
      <Modal className='updataData' show={show} onHide={handleClose}>

        <Modal.Body>
        <div className="update-box">
          <h2>Update Details</h2>
          <div className="input-box mt-4">
            <input type="text" className='form-control' placeholder='First Name*'  />
          </div>
          <div className="input-box mt-4">
            <input type="text" className='form-control' placeholder='Last Name*'  />
          </div>
          <div className="input-box mt-4">
            <input type="text" className='form-control' placeholder='Email*'  />
          </div>
          <button className='add-to-cart-btn'>Update Details</button>
        </div>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default UpdateDataModal;