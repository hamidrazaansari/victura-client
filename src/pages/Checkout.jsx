import React, { useState, useEffect, useRef } from 'react'
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
import { toast, ToastContainer } from 'react-toastify'
import CheckoutLogin from '../components/CheckoutLogin'
import Coupon from '../components/Coupon'
import CheckoutAddress from '../components/CheckoutAddress'


function Checkout() {
    const [edit, setEdit] = useState(false)
    const [data, setData] = useState([])
    const [editAddress, setEditAddress] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [appliedDiscount, setAppliedDiscount] = useState(0);
    const [cupon, setCupon] = useState('')
    const [cuponCode, setCuponCode] = useState('')
    const [appliedCouponCodes, setAppliedCouponCodes] = useState('');
    const [cuponsError, setCuponsError] = useState('')



    const [orderData, setOrderData] = useState({
        shippingAddress: {},
        billingAddress: {},
        products: [],
        paymentMethod: "cod"
    });

    console.log(orderData);


    const token = localStorage.getItem('victuraAuthToken')

    const location = useLocation()
    const cartdata = location.state?.data || [];
    const totalPrice = location.state.totalMrp || 0;
    const totalDiscount = location.state.totalDiscount || 0;

    const childSubmitRef = useRef(null); // useRef to store the child's submit function




    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/userAddress`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const addresses = response.data?.body || [];

            setData(addresses);
            setEdit(addresses.length === 0); // ✅ Show form if no address
            setIsEditing(false);
            setEditAddress(null);

            if (addresses.length > 0) {
                const firstAddress = addresses[0];
                setSelectedAddressId(firstAddress._id); // ✅ Select default

                const addressObj = {
                    name: firstAddress.name,
                    email: firstAddress.email,
                    state: firstAddress.state,
                    city: firstAddress.city,
                    line1: firstAddress.line1,
                    line2: firstAddress.line2,
                    line3: firstAddress.line3,
                    locality: firstAddress.locality,
                    landmark: firstAddress.landmark,
                    contact: firstAddress.contact,
                    zipcode: firstAddress.zipcode,
                    addressType: firstAddress.addressType
                };

                setOrderData(prev => ({
                    ...prev,
                    shippingAddress: addressObj,
                    billingAddress: addressObj
                }));
            }

        } catch (err) {
            console.error('Error fetching address:', err);
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
        setSelectedAddressId(selectedAddress._id)
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
        console.log('for', formData);

        const addressObj = {
            name: formData.name,
            email: formData.email,
            state: formData.state,
            city: formData.city,
            line1: formData.line1,
            line2: formData.line2,
            line3: formData.line3,
            locality: formData.locality,
            landmark: formData.landmark,
            contact: formData.contact,
            zipcode: formData.zipcode,
            addressType: formData.addressType
        };

        setOrderData(prev => ({
            ...prev,
            shippingAddress: addressObj,
            billingAddress: addressObj
        }));

    }

    const handleAddSubmit = async () => {
        if (childSubmitRef.current) {
            return await childSubmitRef.current(); // ✅ await the child's promise
        }
        return true; // fallback
    };

    const handlePlaceOrder = async () => {
        const addressSaved = await handleAddSubmit();

        if (!addressSaved) {
            toast.error("Failed to save address");
            return;
        }

        try {
            const response = await axios.post(`${BaseUrl}/orders`, orderData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.status === 200) {
                toast.success(response.data?.message);
                // redirect or clear cart if needed
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || 'Failed to place order');
        }
    };


    const handleCuponApply = (code) => {
        const foundCupon = cupon.find(c => c.couponCode === code);

        if (!foundCupon) {
            setCuponsError("Invalid Coupon Code");
            return;
        }

        // Prevent re-applying same coupon
        if (code === appliedCouponCodes) {
            setCuponsError("Coupon already applied.");
            return;
        }

        let discount = 0;
        if (foundCupon.discountType === "AMOUNT") {
            discount = foundCupon.discount;
        } else if (foundCupon.discountType === "PERCENTAGE") {
            discount = (totalPrice * foundCupon.discount) / 100;
        }

        setAppliedDiscount(discount);
        setAppliedCouponCodes(code);
        setCuponCode(code); // Show it in input
        setCuponsError('')
    };

    const handleRemoveCoupon = () => {
        setAppliedDiscount(0);
        setAppliedCouponCodes('');
        setCuponCode('');
        setCuponsError('')
    };

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
                                <div className={`addBox ${selectedAddressId === add._id ? 'active' : ''}`} key={ind} onClick={() => (handleTakeAddreseData(add))}>
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
                                        <></>
                                        // <button className='cutomeaddaddressbtn mx-0 mt-3' onClick={() => setEdit(false)}>Cancel</button>
                                    )
                                )
                            }
                        </div>

                        {/* ✅ Always show form if `edit` is true */}
                        {edit && (
                            <div className='mt-4' style={{ paddingLeft: "130px" }}>
                                <CheckoutAddress
                                    onSaveData={handleGetFormData}
                                    editAddress={editAddress}
                                    isEditing={isEditing}
                                    setIsEditing={setEdit}
                                    triggerSubmit={(submitFn) => (childSubmitRef.current = submitFn)}
                                />
                            </div>
                        )}

                        <Coupon setCupon={setCupon} handleCuponApply={handleCuponApply} setCuponCode={setCuponCode} cuponCode={cuponCode} cupon={cupon} appliedCouponCodes={appliedCouponCodes} handleRemoveCoupon={handleRemoveCoupon} cuponsError={cuponsError} />

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
                                        <div className='d-flex align-items-center' style={{ marginLeft: "100px" }} key={product._id}>
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
                                    <p>Sub Total:</p>
                                    <span>₹{totalPrice}.00</span>
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
                                    <span>-₹{totalDiscount}.00</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <p>Coupon Discount:</p>
                                    <span>-₹{appliedDiscount}.00</span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h3>Total:</h3>
                                    <h3>₹{((totalPrice + CODConvienceFee - totalDiscount) - appliedDiscount).toFixed(2)}</h3>
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
