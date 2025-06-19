import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { BaseUrl, FileUrl } from '../utills/BaseUrl'
import Address from '../components/Address'
import Footer from '../components/Footer'
import { FaHome } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { useLocation } from 'react-router-dom'
import '../assets/css/checkout.css'
import Fan from '../assets/image/product/fan.png'
import Accordion from 'react-bootstrap/Accordion';
import { toast, ToastContainer } from 'react-toastify'
import CheckoutLogin from '../components/CheckoutLogin'


function Checkout() {
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState([])
    const [cupon, setCupon] = useState('')
    const [cuponCode, setCuponCode] = useState('')
    const [editAddress, setEditAddress] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [appliedDiscount, setAppliedDiscount] = useState(0);
    const [appliedCouponCodes, setAppliedCouponCodes] = useState([]);


    const [orderData, setOrderData] = useState({
        shippingAddress: {},
        billingAddress: {},
        products: [],
        paymentMethod: "cod"
    });

    const token = localStorage.getItem('victuraAuthToken')

    const location = useLocation()
    const cartdata = location.state?.data || [];
    const totalPrice = location.state?.totalPrice || 0;


    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/userAddress`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            const addresses = response.data?.body || []
            setData(addresses)
            setEdit(addresses.length === 0) // ✅ Open form directly if 0 address
            setIsEditing(false)
            setEditAddress(null)
        } catch (err) {
            console.error('Error fetching address:', err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleEditAddress = (address) => {
        setEditAddress(address)
        setEdit(true)
        setIsEditing(true)
    }

    const handleAddAddress = () => {
        setEditAddress(null)
        setEdit(true)
        setIsEditing(false)
    }


    const CODConvienceFee = 50


    useEffect(() => {
        if (cartdata && cartdata.length > 0) {
            const productsList = cartdata.map(item => ({
                product: item._id,
                qty: 1,
                color: item.selectedVariant?.color?._id,
                size: item.selectedSize?.size?._id,
            }));

            setOrderData(prev => ({
                ...prev,
                products: productsList
            }));
        }
    }, [cartdata]);

    const handleTakeAddreseData = (selectedAddress) => {
        const addressObj = {
            name: selectedAddress.name,
            line1: selectedAddress.address,
            city: selectedAddress.city,
            state: selectedAddress.state,
            country: selectedAddress.country,
            contact: selectedAddress.mobile,
            zipcode: selectedAddress.pincode,
            type: selectedAddress.addressType
        };

        setOrderData(prev => ({
            ...prev,
            shippingAddress: addressObj,
            billingAddress: addressObj
        }));
    };

    const handleGetFormData = (formData) => {
        const addressObj = {
            name: formData.name,
            line1: formData.address,
            city: formData.city,
            state: formData.state,
            country: formData.country,
            contact: formData.mobile,
            zipcode: formData.pincode,
            type: formData.addressType
        };

        setOrderData(prev => ({
            ...prev,
            shippingAddress: addressObj,
            billingAddress: addressObj
        }));

    }

    const handlePlaceOrder = async () => {

        try {

            const response = await axios.post(`${BaseUrl}/orders`, orderData, {
                headers: { Authorization: `Bearer ${token}` }
            })

            if (response.status === 200) {
                toast.success(response.data?.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message)


        }
    }

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

    const handleCuponApply = (cuponCode) => {
        const foundCupon = cupon.find(c => c.couponCode === cuponCode);

        if (!foundCupon) {
            toast.error("Invalid Coupon Code");
            return;
        }

        let discount = 0;

        if (foundCupon.discountType === "AMOUNT") {
            discount = foundCupon.discount;
        } else if (foundCupon.discountType === "PERCENT") {
            discount = (totalPrice * foundCupon.discount) / 100;
        }

        setAppliedDiscount(discount);
        setAppliedCouponCodes((prev) => [...prev, cuponCode]);
        toast.success(`Coupon applied! You saved ₹${discount}`);
    };

    const handleCuponClick = (code) => {
        setCuponCode(code)
        handleCuponApply(code)
    }

    return (
        <>
            <NavBar />
            <ToastContainer closeOnClick />

            <div className='checkout'>
                <div className="row">
                    <div className="col-lg-6 py-3 pb-5" >
                        <div className=" my-4" style={{ marginLeft: "130px" }}>
                            <div className="breadcrumb">
                                <p>Home</p><span>/</span><p>Product</p><span>/</span><p>Checkout</p>
                            </div>
                        </div>
                        <div className="addreses" style={{ paddingLeft: "20%" }}>
                            {/* ✅ Show list only if data exists */}
                            {data.length > 0 && data.map((add, ind) => (
                                <div className="addBox" key={ind} onClick={() => (handleTakeAddreseData(add))}>
                                    <p className='fw-bold mb-0'>Ship to</p>
                                    {/* <div className="d-flex align-items-center justify-content-between">
                                            <span>{add.addressType === "HOME" ? <FaHome /> : <PiBuildingOfficeFill />}</span>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="addressType"
                                            />
                                        </div> */}
                                    <p>
                                        {add.name},
                                        {add.address},
                                        {add.city},
                                        {add.state},
                                        {add.country},
                                        {add.mobile},
                                        {add.pincode}
                                    </p>
                                    <button className='edit-btn' onClick={() => handleEditAddress(add)}>Edit</button>
                                    {/* <div className="d-flex">
                                                <button onClick={() => handleDelete(add._id)}>Delete</button>
                                        </div> */}
                                </div>
                            ))}


                            {data.length > 0 && !edit ? (
                                <button
                                    className='cutomeaddaddressbtn mx-0 mt-3'
                                    onClick={handleAddAddress}
                                >
                                    <span className='fs-4 me-1'>+</span> Add a new address
                                </button>
                            )
                                :
                                (
                                    !localStorage.getItem("victuraAuthToken") ? (
                                        // If token exists, show login input and button
                                        <CheckoutLogin />

                                    ) : (
                                        // Otherwise, show Cancel button
                                        <button className='cutomeaddaddressbtn mx-0 mt-3' onClick={() => setEdit(false)}>Cancel</button>
                                    )
                                )
                            }
                        </div>

                        {/* ✅ Always show form if `edit` is true */}
                        {edit && (
                            <div className='mt-4' style={{ paddingLeft: "130px" }}>
                                <Address
                                    editAddress={editAddress}
                                    isEditing={isEditing}
                                    onSave={fetchData}
                                    setIsEditing={setEdit}
                                    onSaveData={handleGetFormData}
                                    indicator={true}
                                />
                            </div>
                        )}

                        <div className="cuponBox">
                            <h2>Apply Coupon Codes</h2>
                            <div className="d-flex align-items-center justify-content-between">
                                <input type="text" className='form-control cuponField' placeholder='Enter Discount Code'  value={cuponCode} />
                                <button className='add-to-cart-btn' style={{ width: "130px", margin:"0" , marginRight: "10px", height: "45px" , fontSize:"14px" }} onClick={() => handleCuponApply(cuponCode)}>{appliedCouponCodes ? 'Applied' : 'Apply'}</button>
                            </div>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>All Coupons</Accordion.Header>
                                    <Accordion.Body>
                                        {
                                            cupon && cupon.map((cupon, idx) => {
                                                return (
                                                    <>
                                                        <div className=" cupon  cd-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h3>{cupon.couponCode}</h3>
                                                                <p>Flat {cupon.discount}{cupon.discountType === "AMOUNT" ? '₹' : "%"} Off on cart amount.</p>
                                                            </div>
                                                            <button className='apply' onClick={() => handleCuponClick(cupon.couponCode)}>{appliedCouponCodes.includes(cupon.couponCode) ? 'Applied' : 'Apply'}</button>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>

                        <div className="pricing">
                            <h2>Payment</h2>
                            <p className='my-2'>All transactions are secure and encrypted.</p>
                            <div className="form-check me-3" >
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="addressType"
                                    // id={type.label}
                                    // value={type.value}
                                    checked
                                // onChange={(e) => setFormData({ ...formData, addressType: e.target.value })}
                                />
                                <label className="form-check-label" htmlFor=''>
                                    Cash on Delivery (COD)
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{ background: "#F5F5F5", paddingRight: "10%" }}>
                        <div className="stickySummary">
                            <div className="productbox">
                                {cartdata && cartdata.map((product) => {
                                    return (
                                        <div className='d-flex align-items-center justify-content-center' key={product._id}>
                                            <img src={`${FileUrl}/${product.selectedSize?.images[0]}`} alt="Fan" />
                                            <div className="productInfo">
                                                <h4>{product.name}</h4>
                                                <span className='saleprice'>₹{product.selectedSize.salePrice} .00</span>
                                                <p className='qty'>Qty : 1</p>
                                                <div className='colorSize'><span>{product.selectedVariant?.color?.name}</span> <span>{product?.selectedSize?.size?.title}</span></div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className="summary-box">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <p className='fw-bold'>Order summary</p>
                                    <span className='fw-bold'>Subtotal</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <p>Items(s):</p>
                                    <span>{cartdata.length}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <p>Shipping:</p>
                                    <span>₹0.00</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <p>COD Convience Fee</p>
                                    <span>₹{CODConvienceFee}.00</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <p>Discount:</p>
                                    <span>₹{appliedDiscount}.00</span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <p>Total:</p>
                                    <span>₹{totalPrice}.00</span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h3>Grand Total:</h3>
                                    <h3>₹{(totalPrice + CODConvienceFee - appliedDiscount).toFixed(2)}</h3>
                                </div>
                                <button className='add-to-cart-btn' onClick={handlePlaceOrder}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Checkout
