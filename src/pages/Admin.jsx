import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../assets/css/admin.css'
import Dashboard from '../components/Dashboard';
import Order from '../components/Order';
import Address from '../components/Address';
import AccountDetails from '../components/AccountDetails';
import { BaseUrl } from '../utills/BaseUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Admin() {

    const [edit, setEdit] = useState(false)
    const [address, setAddress] = useState(false)
    const token = localStorage.getItem('token');



    const navigate = useNavigate()

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        navigate('/')

    }

    const handleAddAddress = () => {
        setEdit(true)
    }

    return (
        <div>
            <NavBar />
            <div className="container my-4">
                <div className="breadcrumb">
                    <p>Home</p><span>/</span><p>My Account</p>
                </div>
            </div>
            <div className="admin">
                <div className="container" style={{ position: "relative" }}>
                    <button onClick={handleLogOut} className='logout' >Log out
                    </button>
                    <Tabs
                        defaultActiveKey="Dashboard"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="Dashboard" title="Dashboard">
                            <Dashboard />
                        </Tab>
                        <Tab eventKey="Orders" title="Orders (0)">
                            <Order />
                        </Tab>
                        <Tab eventKey="home" title="Address (0)">
                            <>
                                {
                                    !edit ?
                                        <div className='dashboard d-flex align-items-center justify-content-center flex-column'>
                                            <p className='fs-5 text-secondary'>You haven't saved any addresses yet.</p>
                                            <button className='add-to-cart-btn  mx-0' style={{ padding: "6px", paddingBottom: "8px", width: "200px" }} onClick={handleAddAddress} > <span className='fs-4 me-1'>+</span> Add Address</button>
                                        </div>
                                        :
                                        <Address />
                                }

                                {!address ?
                                    <div className='address'>
                                        <h3>Default Adresses</h3>
                                        <div className="addBox">
                                            <p>Wahid Alam  <br />
                                                India  <br />
                                                Shibaji park
                                                Durgapur  <br />
                                                West bengal  <br />
                                                8293088246  <br />
                                                713212</p>
                                                <div className="d-flex">
                                                    <button>Edit</button>
                                                    <button>Delete</button>
                                                </div>
                                        </div>
                                    </div>
                                    :
                                    <>
                                    </>
                                }

                            </>
                        </Tab>
                        {/* <Tab eventKey="Account" title="Account Details">
                            <AccountDetails />
                        </Tab> */}
                    </Tabs>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Admin