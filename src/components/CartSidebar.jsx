import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Bag from '../assets/image/bag.png'
import Fan from '../assets/image/product/fan.png'
import del from '../assets/image/product/delete.png'
import QuantityInput from './QuantityInput';
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../assets/css/cart-sidebar.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function CartSidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    }

    return (
        <>
            <Button variant="transparent" onClick={handleShow} className="me-2">
                <img className='img-fluid' src={Bag} alt="bag icon" />
            </Button>
            <Offcanvas show={show} className='cartSidebar' onHide={handleClose} placement='end' backdropClassName='offcanvasBackdrop' >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="product-container">
                        <div className="row">
                            <div className="col-12 cart-box">
                                <div className="d-flex">
                                    <div className="imgBox">
                                        <img src={Fan} alt="" />
                                    </div>
                                    <div className="contnet">
                                        <h2>GLIDER BLDC & INDUCTION</h2>
                                        <div className="price">
                                            <span className='cutprice'> ₹5,699.00</span>
                                            <p className='actualprice'> ₹3,699.00</p>
                                            <span className='discount'>-40% Off</span>
                                        </div>
                                        <div className="d-flex">
                                            <p>Qty: </p>
                                            <QuantityInput />
                                        </div>

                                        <div className="remove">
                                            <img src={del} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 cart-box">
                                <div className="d-flex">
                                    <div className="imgBox">
                                        <img src={Fan} alt="" />
                                    </div>
                                    <div className="contnet">
                                        <h2>GLIDER BLDC & INDUCTION</h2>
                                        <div className="price">
                                            <span className='cutprice'> ₹5,699.00</span>
                                            <p className='actualprice'> ₹3,699.00</p>
                                            <span className='discount'>-40% Off</span>
                                        </div>
                                        <div className="d-flex">
                                            <p>Qty: </p>
                                            <QuantityInput />
                                        </div>

                                        <div className="remove">
                                            <img src={del} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 cart-box">
                                <div className="d-flex">
                                    <div className="imgBox">
                                        <img src={Fan} alt="" />
                                    </div>
                                    <div className="contnet">
                                        <h2>GLIDER BLDC & INDUCTION</h2>
                                        <div className="price">
                                            <span className='cutprice'> ₹5,699.00</span>
                                            <p className='actualprice'> ₹3,699.00</p>
                                            <span className='discount'>-40% Off</span>
                                        </div>
                                        <div className="d-flex">
                                            <p>Qty: </p>
                                            <QuantityInput />
                                        </div>

                                        <div className="remove">
                                            <img src={del} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="related-product">
                        <h3>Related Products</h3>
                        <Slider {...settings}>
                            <div className="cart-box">
                                <div className="d-flex">
                                    <div className="imgBox">
                                        <img src={Fan} alt="" />
                                    </div>
                                    <div className="contnet">
                                        <h2>ETOILE</h2>
                                        <div className="price">
                                            <span className='cutprice'> ₹5,699.00</span>
                                            <p className='actualprice'> ₹3,699.00</p>
                                            <span className='discount'>-40% Off</span>
                                        </div>
                                        <Link to={'/'}>Add To Cart</Link>



                                    </div>
                                </div>
                            </div>
                            <div className="cart-box">
                                <div className="d-flex">
                                    <div className="imgBox">
                                        <img src={Fan} alt="" />
                                    </div>
                                    <div className="contnet">
                                        <h2>GLIDER BLDC & INDUCTION</h2>
                                        <div className="price">
                                            <span className='cutprice'> ₹5,699.00</span>
                                            <p className='actualprice'> ₹3,699.00</p>
                                            <span className='discount'>-40% Off</span>
                                        </div>
                                        <Link to={'/'}>Add To Cart</Link>



                                    </div>
                                </div>
                            </div>
                            <div className="cart-box">
                                <div className="d-flex">
                                    <div className="imgBox">
                                        <img src={Fan} alt="" />
                                    </div>
                                    <div className="contnet">
                                        <h2>GLIDER BLDC & INDUCTION</h2>
                                        <div className="price">
                                            <span className='cutprice'> ₹5,699.00</span>
                                            <p className='actualprice'> ₹3,699.00</p>
                                            <span className='discount'>-40% Off</span>
                                        </div>
                                        <Link to={'/'}>Add To Cart</Link>



                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Offcanvas.Body>
                <div className="offcanvas-footer">
                    <div className="d-flex justify-content-between align-items-center">
                        <p>You Saved: <span className='save'>SAVE 40%</span></p>
                        <p className='text-secondary'>₹ 2,000.00</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Total :</p>
                        <p className='text-end'><strong>₹ 3,699.00</strong> <br /> <span>(incl. of all taxes)</span></p>
                    </div>
                    <button className='add-to-cart-btn w-100'>Checkout</button>
                </div>


            </Offcanvas>
        </>
    );
}

export default CartSidebar

