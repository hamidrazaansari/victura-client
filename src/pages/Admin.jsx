import React, { useEffect } from 'react'
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
    //   const token = localStorage.getItem('token');

    // useEffect(async()=>{
    //     try {
    //                      const response = await axios.get(`${BaseUrl}/users/profile`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     }
    //   });
    //   console.log(response);

    //     } catch (error) {
    //         console.log(error);

    //     }

    // },[])
    const navigate = useNavigate()

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        navigate('/')

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
                <div className="container" style={{position:"relative"}}>
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
                        <Tab eventKey="Orders" title="Orders">
                            <Order />
                        </Tab>
                        <Tab eventKey="home" title="Address">
                            <Address />
                        </Tab>
                        <Tab eventKey="Account" title="Account Details">
                            <AccountDetails />
                        </Tab>
                    </Tabs>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Admin