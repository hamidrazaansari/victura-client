import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import '../assets/css/admin.css'
import Address from '../components/Address';
import { BaseUrl } from '../utills/BaseUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";

import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import AdminSidebar from '../components/AdminSidebar';

function MyAddress() {

    const [edit, setEdit] = useState(false)
    const [address, setAddress] = useState(false)
    const [data, setData] = useState('');

    const [editAddress, setEditAddress] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditAddress = (address) => {
        setEditAddress(address);
        setEdit(true)
        setIsEditing(true);
    };


   const token = localStorage.getItem('victuraAuthToken')
    async function fetchData() {
        try {
            const response = await axios.get(`${BaseUrl}/userAddress`, {
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


    const navigate = useNavigate()



    const handleAddAddress = () => {
        setEdit(true)
    }

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });

            if (result.isConfirmed) {
                const response = await axios.delete(`${BaseUrl}/userAddress/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                if (response.status === 200) {
                    // Remove the deleted address from state
                    setData(prevData => prevData.filter(address => address._id !== id));

                    Swal.fire("Deleted!", "Your address has been deleted.", "success");
                    toast.success("Address deleted successfully");
                }
            }
        } catch (error) {
            console.error("Delete error:", error);
            Swal.fire("Error!", "Failed to delete address", "error");
        }
    };




    return (
        <div>
            <NavBar />
            <div className="container my-4">
                <div className="breadcrumb">
                    <p>Home</p><span>/</span><p>My Addresses</p>
                </div>
            </div>
            <div className="account pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <AdminSidebar />
                        </div>
                        <div className="col-lg-8">
                            <>
                                {
                                    !edit ?
                                        <div className='dashboard d-flex align-items-center justify-content-center flex-column'>
                                            <p className='fs-5 text-secondary'>You haven't saved any addresses yet.</p>
                                            <button className='add-to-cart-btn  mx-0' style={{ padding: "6px", paddingBottom: "8px", width: "200px" , background:"#181818" }} onClick={handleAddAddress} > <span className='fs-4 me-1'>+</span> Add Address</button>
                                        </div>
                                        :
                                        <Address editAddress={editAddress} isEditing={isEditing} onSave={fetchData} setIsEditing={setEdit} />
                                }

                                {!address ?
                                    <div className='address'>
                                        <h3>Default Adresses</h3>
                                        {data && data.map((add, ind) => {
                                            return (
                                                <div className="addBox" key={ind}>
                                                    <span>{add.addressType === "HOME" ? <FaHome /> : <PiBuildingOfficeFill />}</span>
                                                    <p>{add.name} <br /> {add.email} <br />  {add.line1}  {add.line2} {add.line3} {add.locality}  {add.landmark} {add.city}   {add.state}    {add.contact} <br /> {add.zipcode}</p>
                                                       
                                                        
                                                        
                                                          
                                                        
                                                    <div className="d-flex">
                                                        <button onClick={() => handleEditAddress(add)}>Edit</button>
                                                        <button onClick={() => handleDelete(add._id)}>Delete</button>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                    :
                                    <>
                                    </>
                                }

                            </>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default MyAddress

