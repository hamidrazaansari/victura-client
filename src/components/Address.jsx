import React from 'react'
import '../assets/css/admin.css'
function Address() {
    return (
        <div className='dashboard'>
            <h3>Shipping address</h3>

            <div class="row">
                <div className="col-lg-8">
                    <div className="input-box d-flex">
                        <label htmlFor="">First name*</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="input-box d-flex">
                        <label htmlFor="">Last name*</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="input-box d-flex">
                        <label htmlFor="">Country / Region*</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="input-box d-flex " style={{height:"120px"}}>
                        <label htmlFor="">Street address*</label>
                        <div className='d-flex flex-column w-100'>
                        <input type="text" className='form-control ' />
                        <input type="text" className='form-control ' />
                        </div>
                    </div>
          
                    <div className="input-box d-flex">
                        <label htmlFor="">Town / City*</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="input-box d-flex">
                        <label htmlFor="">State*</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="input-box d-flex">
                        <label htmlFor="">Phone Number*</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="input-box d-flex">
                        <label htmlFor="">Zipcode*</label>
                        <input type="text" className='form-control' />
                    </div>
                    <button className='add-to-cart-btn'>Save Address</button>
                </div>
            </div>

        </div>
    )
}

export default Address

