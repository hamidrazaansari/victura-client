import { useState, useContext, useEffect } from 'react';
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
import { CounterContext } from '../context/ContextProvider';
import axios from 'axios';
import { BaseUrl } from '../utills/BaseUrl';


function CartSidebar() {
    const [show, setShow] = useState(false);
    const [reletedProduct, setReletedProduct] = useState([]);

    const { count, data, removeItemById, quantities } = useContext(CounterContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/products/`);
                setReletedProduct(response.data?.body);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchData();
    }, [data]);

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


const totalMrp = data.reduce((acc, product) => {
    const price = product.selectedSize?.mrp || 0;
    const qty = quantities[product._id] || 1; // get the quantity for this product
    return acc + price * qty;
}, 0);

const totalSalePrice = data.reduce((acc, product) => {
    const price = product.selectedSize?.salePrice || 0;
    const qty = quantities[product._id] || 1;
    return acc + price * qty;
}, 0);

    const totalDiscount = totalMrp - totalSalePrice;
    const discountPercentage = totalMrp ? Math.round((totalDiscount / totalMrp) * 100) : 0;


    return (
        <>
            <Button variant="transparent" onClick={handleShow} className="me-2 position-relative">
                <img className='img-fluid' src={Bag} alt="bag icon" />
                {count > 0 && <span className='cart-indecator'>{count}</span>}

            </Button>
            <Offcanvas show={show} className='cartSidebar' onHide={handleClose} placement='end' backdropClassName='offcanvasBackdrop' >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="product-container">
                        <div className="row">
                            {data && data.map((product) => {
                                const quantity = quantities[product._id] || 1;

                                return (
                                    <div className="col-12 cart-box">
                                        <div className="d-flex">
                                            <div className="imgBox">
                                                <img src={Fan} alt="fan" />
                                            </div>
                                            <div className="contnet">
                                                <h2>{product?.name}</h2>
                                                <div className="price">
                                                    <span className="cutprice">₹{product.selectedSize?.mrp * quantity || '0.00'}</span>
                                                    <p className="actualprice">₹{product.selectedSize?.salePrice * quantity || '0.00'}</p>
                                                    {product.selectedSize && (
                                                        <span className="discount">
                                                            -{Math.round(
                                                                ((product.selectedSize.mrp - product.selectedSize.salePrice) / product.selectedSize.mrp) * 100
                                                            )}
                                                            %
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="d-flex">
                                                    <p>Qty: </p>
                                                    <QuantityInput productId={product._id} />
                                                </div>

                                                <div className="remove" style={{ cursor: "pointer" }} onClick={() => removeItemById(product._id)}>
                                                    <img src={del} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="related-product">
                        <h3>Related Products</h3>
                        <Slider {...settings}>

                            {reletedProduct && reletedProduct.map((product) => {                                
                                return (
                                    <div className="cart-box">
                                        <div className="d-flex">
                                            <div className="imgBox">
                                                <img src={Fan} alt="" />
                                            </div>
                                            <div className="contnet">
                                                <h2>{product.name}</h2>
                                                <div className="price">
                                                    <span className='cutprice'>{product.variants[0]?.sizes[0]?.mrp}</span>
                                                    <p className='actualprice'>{product.variants[0]?.sizes[0]?.salePrice}</p>
                                                    <span className='discount'>-40% Off</span>
                                                </div>
                                                <Link to={'/'}>Add To Cart</Link>



                                            </div>
                                        </div>
                                    </div>
                                )
                            })}


                        </Slider>
                    </div>
                </Offcanvas.Body>
                <div className="offcanvas-footer">
                    <div className="d-flex justify-content-between align-items-center">
                        <p>You Saved: <span className='save'>SAVE {discountPercentage}%</span></p>
                        <p className='text-secondary'>₹ {totalDiscount.toFixed(2)}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Total :</p>
                        <p className='text-end'><strong>₹ {totalSalePrice.toFixed(2)}</strong> <br /> <span>(incl. of all taxes)</span></p>
                    </div>
                    <button className='add-to-cart-btn w-100'>Checkout</button>
                </div>


            </Offcanvas>
        </>
    );
}

export default CartSidebar

