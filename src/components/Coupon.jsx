import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { BaseUrl } from '../utills/BaseUrl';

function Coupon({ setCupon, handleCuponApply, setCuponCode, cuponCode, cupon, appliedCouponCodes, handleRemoveCoupon , cuponsError }) {




    useEffect(() => {
        const fetchCupon = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/coupons`);
                setCupon(response.data?.body);
                console.log(response.data);

            } catch (error) {
                console.error("Failed to fetch coupons:", error);
            }
        };

        fetchCupon();
    }, []);


    const handleCuponClick = (code) => {
        setCuponCode(code)
        handleCuponApply(code)
    }
    return (
        <div>
            <div className="cuponBox">
                <h2>Apply Coupon Codes</h2>
                <div className="d-flex align-items-center justify-content-between">
                    <input type="text" className='form-control cuponField' placeholder='Enter Discount Code' value={cuponCode} onChange={(e)=> setCuponCode(e.target.value)} />
                    {appliedCouponCodes ? (
                        <button
                            className='add-to-cart-btn bg-danger text-white mb-0'
                            style={{ width: "130px", marginRight: "10px", height: "45px", fontSize: "14px" }}
                            onClick={handleRemoveCoupon}
                        >
                            Remove
                        </button>
                    ) : (
                        <button
                            className='add-to-cart-btn mb-0'
                            style={{ width: "130px", marginRight: "10px", height: "45px", fontSize: "14px" }}
                            onClick={() => handleCuponApply(cuponCode)}
                        >
                            Apply
                        </button>
                    )} 

                </div>
                    <small style={{fontSize:"12px" , fontFamily:"inter" , color :"#dc3545" , position:"relative" , top:"-11px" , left:"13px"}}>{!cuponsError ? '' : cuponsError} </small>


                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>All Coupons</Accordion.Header>
                        <Accordion.Body>
                            {
                                cupon && cupon.map((cupon, idx) => {
                                    return (
                                        <>
                                            <div className=" cupon  d-flex align-items-center justify-content-between">
                                                <div>
                                                    <h3>{cupon.couponCode}</h3>
                                                    <p>Flat {cupon.discount}{cupon.discountType === "AMOUNT" ? '₹' : "%"} Off on cart amount.</p>
                                                </div>
                                                <button className={`apply`} style={{ color: `${appliedCouponCodes.includes(cupon.couponCode) ? '#C1252A' : ''}` }} onClick={() => handleCuponClick(cupon.couponCode)}>{appliedCouponCodes.includes(cupon.couponCode) ? 'Applied' : 'Apply'}</button>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </div>
    )
}

export default Coupon