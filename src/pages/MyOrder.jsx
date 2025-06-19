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
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";

import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import AdminSIdebar from '../components/AdminSIdebar';
import Fan from  '../assets/image/socalMedia/fan.png'


function MyOrder() {
    


    return (
        <div>
            <NavBar />
            <div className="container my-4">
                <div className="breadcrumb">
                    <p>Home</p><span>/</span><p>My Orders</p>
                </div>
            </div>
            <div className="account pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <AdminSIdebar  />
                        </div>
                        <div className="col-lg-8">
                            <div class="account-orders">
                            <div class="wrap-account-order">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="fw-6">Product</th>
                                            <th class="fw-6">Order Id</th>
                                            <th class="fw-6">Date</th>
                                            <th class="fw-6">Status</th>
                                            <th class="fw-6">Total</th>
                                            <th class="fw-6">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="tf-order-item">
                                            <td>
                                               <img src={Fan} alt="Product Image" />
                                            </td>
                                            <td>
                                                #123
                                            </td>
                                            <td>
                                                August 1, 2024
                                            </td>
                                            <td>
                                                On hold
                                            </td>
                                            <td>
                                                $200.0 for 1 items
                                            </td>
                                            <td>
                                               <Link to={'/order-details'} className='add-to-cart-btn mb-0' style={{background:"#000"}}>View </Link>
                                            </td>
                                        </tr>
                                        <tr class="tf-order-item">
                                            <td>
                                               <img src={Fan} alt="Product Image" />
                                            </td>
                                            <td>
                                                #123
                                            </td>
                                            <td>
                                                August 1, 2024
                                            </td>
                                            <td>
                                                On hold
                                            </td>
                                            <td>
                                                $200.0 for 1 items
                                            </td>
                                            <td>
                                               <Link to={'/order-details'} className='add-to-cart-btn mb-0' style={{background:"#000"}}>View </Link>
                                            </td>
                                        </tr>
                                        <tr class="tf-order-item">
                                            <td>
                                               <img src={Fan} alt="Product Image" />
                                            </td>
                                            <td>
                                                #123
                                            </td>
                                            <td>
                                                August 1, 2024
                                            </td>
                                            <td>
                                                On hold
                                            </td>
                                            <td>
                                                $200.0 for 1 items
                                            </td>
                                            <td>
                                               <Link to={'/order-details'} className='add-to-cart-btn mb-0' style={{background:"#000"}}>View </Link>
                                            </td>
                                        </tr>
                                        <tr class="tf-order-item">
                                            <td>
                                               <img src={Fan} alt="Product Image" />
                                            </td>
                                            <td>
                                                #123
                                            </td>
                                            <td>
                                                August 1, 2024
                                            </td>
                                            <td>
                                                On hold
                                            </td>
                                            <td>
                                                $200.0 for 1 items
                                            </td>
                                            <td>
                                               <Link to={'/order-details'} className='add-to-cart-btn mb-0' style={{background:"#000"}}>View </Link>
                                            </td>
                                        </tr>
                                        <tr class="tf-order-item">
                                            <td>
                                               <img src={Fan} alt="Product Image" />
                                            </td>
                                            <td>
                                                #123
                                            </td>
                                            <td>
                                                August 1, 2024
                                            </td>
                                            <td>
                                                On hold
                                            </td>
                                            <td>
                                                $200.0 for 1 items
                                            </td>
                                            <td>
                                               <Link to={'/order-details'} className='add-to-cart-btn mb-0' style={{background:"#000"}}>View </Link>
                                            </td>
                                        </tr>

                            
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default MyOrder
