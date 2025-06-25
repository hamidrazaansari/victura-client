import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../assets/css/admin.css'
import Order from '../components/Order';
import Address from '../components/Address';
import { BaseUrl, FileUrl } from '../utills/BaseUrl';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";

import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import AdminSidebar from '../components/AdminSIdebar';
import Fan from '../assets/image/socalMedia/fan.png'


function MyOrder() {

    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem('victuraAuthToken')
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await axios.get(`${BaseUrl}/orders/userOrders`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                console.log(response);

                if (response.status === 200) {
                    setOrder(response.data.body)
                }
            } catch (error) {
                console.log(error);

            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

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
                            <AdminSidebar />
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
                                            {
                                                order && order.map((order, indx) => {
                                                    return (
                                                        <tr class="tf-order-item" key={indx}>
                                                            <td>
                                                                <img src={`${FileUrl}/${order?.products[0]?.images[0]}`} alt="Product Image" />
                                                            </td>
                                                            <td>
                                                                #{order.orderId}
                                                            </td>
                                                            <td>
                                                                August 1, 2024
                                                            </td>
                                                            <td>
                                                                {order.orderStatus}
                                                            </td>
                                                            <td>
                                                                {order.totalAmount}.0 for 1 items
                                                            </td>
                                                            <td>
                                                                <Link to={`/order-details/${order._id}`} className='add-to-cart-btn mb-0 px-3' >View </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

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
