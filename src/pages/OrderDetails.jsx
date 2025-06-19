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
import AdminSIdebar from '../components/AdminSIdebar';
import Fan from '../assets/image/socalMedia/fan.png'


function OrderDetails() {
  
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
                            <AdminSIdebar />
                        </div>
                        <div className="col-lg-8">
                            <div class="my-account-content">
                                <div class="account-order-details">
                                    <div class="wd-form-order">
                                        <div class="order-head">
                                            <figure class="img-product">
                                                <img src={Fan}  alt="product"/>
                                            </figure>
                                            <div class="content">
                                                <div class="badge">In Progress</div>
                                                <h6 class="mt-8 fw-5">Order #17493</h6>
                                            </div>
                                        </div>
                                        <div class="tf-grid-layout md-col-2 gap-15">
                                            <div class="item">
                                                <div class="text-2 text_black-2">Item</div>
                                                <div class="text-2 mt_4 fw-6">Fan</div>
                                            </div>
                                            <div class="item">
                                                <div class="text-2 text_black-2">Courier</div>
                                                <div class="text-2 mt_4 fw-6">Induction ciling fan</div>
                                            </div>
                                            <div class="item">
                                                <div class="text-2 text_black-2">Start Time</div>
                                                <div class="text-2 mt_4 fw-6">13 April 2025, 01:20</div>
                                            </div>
                                            <div class="item">
                                                <div class="text-2 text_black-2">Address</div>
                                                <div class="text-2 mt_4 fw-6">There are many variations of passages of Lorem Ipsum available, but the majority ...</div>
                                            </div>
                                        </div>
                                        <div class="widget-tabs style-3 widget-order-tab">
                                            <ul class="widget-menu-tab">
                                                <li class="item-title active">
                                                    <span class="inner">Order History</span>
                                                </li>


                                                <li class="item-title">
                                                    <span class="inner">Receiver</span>
                                                </li>
                                            </ul>
                                            <div class="widget-content-tab">
                                                <div class="widget-content-inner active">
                                                    <div class="widget-timeline">
                                                        <ul class="timeline">
                                                            <li>
                                                                <div class="timeline-badge success"></div>
                                                                <div class="timeline-box">
                                                                    <a class="timeline-panel" href="javascript:void(0);">
                                                                        <div class="text-2 fw-6">Product Shipped</div>
                                                                        <span>10/03/2025 4:30pm</span>
                                                                    </a>
                                                                    <p><strong>Courier Service : </strong>FedEx World Service Center</p>
                                                                    <p><strong>Estimated Delivery Date : </strong>12/05/2025</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="timeline-badge success"></div>
                                                                <div class="timeline-box">
                                                                    <a class="timeline-panel" href="javascript:void(0);">
                                                                        <div class="text-2 fw-6">Product Shipped</div>
                                                                        <span>10/03/2025 4:30pm</span>
                                                                    </a>
                                                                    <p><strong>Courier Service : </strong>FedEx World Service Center</p>
                                                                    <p><strong>Estimated Delivery Date : </strong>12/05/2025</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="timeline-badge"></div>
                                                                <div class="timeline-box">
                                                                    <a class="timeline-panel" href="javascript:void(0);">
                                                                        <div class="text-2 fw-6">Product Packaging</div>
                                                                        <span>10/04/2025 4:34pm</span>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="timeline-badge"></div>
                                                                <div class="timeline-box">
                                                                    <a class="timeline-panel" href="javascript:void(0);">
                                                                        <div class="text-2 fw-6">Order Placed</div>
                                                                        <span>10/04/2025 4:34pm</span>
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>


                                                <div class="widget-content-inner">
                                                    <p class="text-2 text-success">Thank you Your order has been received</p>
                                                    <ul class="mt_20">
                                                        <li>Order Number : <span class="fw-7">#17493</span></li>
                                                        <li>Date : <span class="fw-7"> 17/07/2024, 02:34pm</span></li>
                                                        <li>Total : <span class="fw-7">$18.95</span></li>
                                                        <li>Payment Methods : <span class="fw-7">Cash on Delivery</span></li>

                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
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

export default OrderDetails
