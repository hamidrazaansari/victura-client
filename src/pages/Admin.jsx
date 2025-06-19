import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../assets/css/admin.css'
import Order from '../components/Order';
import Address from '../components/Address';
import { BaseUrl } from '../utills/BaseUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";

import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import AdminSidebar from '../components/AdminSidebar';
import Gender from '../components/Gender';


function Admin() {
    const [data, setData] = useState('');

    const token = localStorage.getItem('victuraAuthToken')
    async function fetchData() {
        try {
            const response = await axios.get(`${BaseUrl}/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setData(response.data?.body)
        } catch (err) {
            console.error('Error resending OTP:', err);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    console.log(data);
    

    return (
        <div>
            <NavBar />
            <div className="container my-4">
                <div className="breadcrumb">
                    <p>Home</p><span>/</span><p>My Account</p>
                </div>
            </div>
            <div className="account pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <AdminSidebar userData={data} />
                        </div>
                        <div className="col-lg-8">
                            <form action="#" class="form-account-details form-has-password">
                                <div class="account-info">
                                    <h5 class="title">Information</h5>
                                    <div class="cols mb_20">
                                        <fieldset class="">
                                            <input class="" type="text" placeholder="First Name*" name="text" tabindex="2" value={data.name} aria-required="true" required="" />
                                        </fieldset>
                            
                                    </div>
                                    <div class="cols mb_20">
                                        <fieldset class="">
                                            <input class="" type="email" placeholder="Username or email address*" name="email" tabindex="2" value="incite@gmail.com" aria-required="true" required="" />
                                        </fieldset>
                                        <fieldset class="">
                                            <input class="" type="text" placeholder="Phone*" name="text" tabindex="2" value={data.mobile} aria-required="true" required="" />
                                        </fieldset>
                                    </div>
                                    <div className="cols mb_20">
                                        <Gender/>
                                    </div>
                                </div>
                                {/* <div class="account-password mt-4">
                                    <h5 class="title">Change Password</h5>
                                    <fieldset class="position-relative password-item mb_20">
                                        <input class="input-password" type="password" placeholder="Password*" name="password" tabindex="2" value="" aria-required="true" required="" />
                                        <span class="toggle-password unshow">
                                            <i class="icon-eye-hide-line"></i>
                                        </span>
                                    </fieldset>
                                    <fieldset class="position-relative password-item mb_20">
                                        <input class="input-password" type="password" placeholder="New Password*" name="password" tabindex="2" value="" aria-required="true" required="" />
                                        <span class="toggle-password unshow">
                                            <i class="icon-eye-hide-line"></i>
                                        </span>
                                    </fieldset>
                                    <fieldset class="position-relative password-item">
                                        <input class="input-password" type="password" placeholder="Confirm Password*" name="password" tabindex="2" value="" aria-required="true" required="" />
                                        <span class="toggle-password unshow">
                                            <i class="icon-eye-hide-line"></i>
                                        </span>
                                    </fieldset>
                                </div> */}
                                <button class="add-to-cart-btn my-4 w-50" style={{ background: "#000", height: "45px" }}>Edit Account</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Admin

