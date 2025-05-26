import React from 'react'
import '../assets/css/admin.css'
function AccountDetails() {
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
                        <label htmlFor="">E-mail address*</label>
                        <input type="text" className='form-control' />
                    </div>

                    <button className='add-to-cart-btn'>Save Address</button>
                </div>
            </div>

        </div>
    )
}

export default AccountDetails

