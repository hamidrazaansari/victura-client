import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../assets/css/admin.css'
import Order from '../components/Order';
import Address from '../components/Address';
import { BaseUrl, FileUrl } from '../utills/BaseUrl';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";

import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import AdminSIdebar from '../components/AdminSIdebar';
import Fan from '../assets/image/socalMedia/fan.png'
import moment from 'moment/moment';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabComponent({ order }) {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 mt-5"
        >
            <Tab eventKey="home" title="Order History">
                <div className="widget-content-inner active">
                    <div className="widget-timeline">
                        <ul className="timeline">
                            <li>
                                <div className="timeline-badge success"></div>
                                <div className="timeline-box">
                                    <a className="timeline-panel" href="javascript:void(0);">
                                        <div className="text-2 fw-6">Product Shipped</div>
                                        <span>10/03/2025 4:30pm</span>
                                    </a>
                                    <p><strong>Courier Service : </strong>FedEx World Service Center</p>
                                    <p><strong>Estimated Delivery Date : </strong>12/05/2025</p>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-badge success"></div>
                                <div className="timeline-box">
                                    <a className="timeline-panel" href="javascript:void(0);">
                                        <div className="text-2 fw-6">Product Shipped</div>
                                        <span>10/03/2025 4:30pm</span>
                                    </a>
                                    <p><strong>Courier Service : </strong>FedEx World Service Center</p>
                                    <p><strong>Estimated Delivery Date : </strong>12/05/2025</p>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-badge"></div>
                                <div className="timeline-box">
                                    <a className="timeline-panel" href="javascript:void(0);">
                                        <div className="text-2 fw-6">Product Packaging</div>
                                        <span>10/04/2025 4:34pm</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-badge"></div>
                                <div className="timeline-box">
                                    <a className="timeline-panel" href="javascript:void(0);">
                                        <div className="text-2 fw-6">Order Placed</div>
                                        <span>10/04/2025 4:34pm</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="profile" title="Ordered Items">
                <div className="order-box">
                    <div className="account-orders">
                        <div className="wrap-account-order">
                            <table className="table" style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ fontWeight: "bold", textAlign: "left" }}>
                                        <th className="text-center" style={{ verticalAlign: "top" }}>Product</th>
                                        <th style={{ verticalAlign: "top" }}>SKU</th>
                                        <th style={{ verticalAlign: "top" }}>Price</th>
                                        <th style={{ verticalAlign: "top" }}>Watt</th>
                                        <th style={{ verticalAlign: "top" }}>Qty</th>
                                        <th style={{ verticalAlign: "top" }}>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.products && order.products?.map((product) => {
                                        return (
                                            <tr>
                                                <td style={{ verticalAlign: "top", padding: "0 15px" }} key={product._id}>
                                                    <div style={{ display: "flex", alignItems: "flex-start" }}>

                                                        <img
                                                            src={`${FileUrl}/${product?.images[0]}`}
                                                            alt="product"
                                                            className='img-fluid'
                                                            style={{ width: "100px", marginRight: "10px" }}
                                                        />
                                                        <div>
                                                            <div className='mt-4'>{product?.name}</div>
                                                            <div style={{ color: "#666", fontSize: "12px" }}>
                                                                Color: White,<br /> Size: {product.size?.title}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ verticalAlign: "center" }}>{product?.product?.sku}</td>
                                                <td style={{ verticalAlign: "center" }}>₹{product.mrp}.18</td>
                                                <td style={{ verticalAlign: "center" }}>{product?.product?.watt}w</td>
                                                <td style={{ verticalAlign: "center" }}>{product.qty}</td>
                                                <td style={{ verticalAlign: "center" }}>₹{product.salePrice}.00</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </Tab>
            <Tab eventKey="contact" title="Shipping Address" >
                <div class="text-2">
										{order?.shippingAddress?.name}<br/>
										{order?.shippingAddress?.line1}, 
										{order?.shippingAddress?.line2}
										{order?.shippingAddress?.line3}
										{order?.shippingAddress?.city}<br/>
										{order?.shippingAddress?.state}- {order?.shippingAddress?.zipcode}<br/>	
										{'hamid.estaglobal@gmail.com'}<br/>
										{order.shippingAddress?.contact}<br/>
									</div>
            </Tab>
        </Tabs>
    );
}



function OrderDetails() {

    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    const token = localStorage.getItem(`victuraAuthToken`)
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await axios.get(`${BaseUrl}/orders/userOrders/${id}`, {
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

    console.log(order);

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
                            <div className="my-account-content">
                                <div className="account-order-details">
                                    <div className="wd-form-order">
                                        <div className="order-head">
                                            <div className="content">
                                                <div className="badge">In Progress</div>
                                                <h6 className="mt-8 fw-5 mb-0" style={{ fontSize: "23px", fontFamily: "boldInter" }}>Order #17493</h6>
                                            </div>
                                        </div>
                                        <div className="tf-grid-layout md-col-2 gap-15">
                                            <div className="item-date">
                                                <div className="text-2 text_black">Ordered At</div>
                                                <div className="date">{moment(order.updatedAt).format("DD-MM-YYYY HH:mm")}</div>
                                            </div>

                                        </div>

                                        <TabComponent order={order} />

                                        <div className="order-summary newSummary mt-4">
                                            <table className="table">
                                                <tbody>
                                                    {/* <tr>
                                                    <th className="text-end">Total:</th>
                                                    <td className="text-end">₹{order.totalAmount}.36</td>
                                                </tr> */}
                                                    {/* <tr>
                                                        <th className="text-end">GST (18%):</th>

                                                        <td className="text-end">₹1,043.64</td>
                                                    </tr> */}
                                                    <tr>
                                                        <th className="text-end">Grand Total:</th>
                                                        <td className="text-end"><strong>₹{order.totalAmount}.00</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-end">Payment Method:</th>
                                                        <td className="text-end"><strong>COD</strong></td>
                                                    </tr>
                                                </tbody></table>
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
