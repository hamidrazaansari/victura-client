import React, { useState, useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../assets/css/product-details.css';

import Fan from '../assets/image/product/fan.png';
import Rating from '../assets/image/product/yufu.png';
import upload from '../assets/image/upload.png';
import QuantityInput from '../components/QuantityInput';

import Remote from '../assets/image/productDetails/remote.png';
import Flash from '../assets/image/productDetails/flash.png';
import Meter from '../assets/image/productDetails/meter.png';
import Motor from '../assets/image/productDetails/motor.png';
import Stopwatch from '../assets/image/productDetails/stopwatch.png';
import Wind from '../assets/image/productDetails/wind.png';
import banner1 from '../assets/image/productDetails/banner2.png';
import banner2 from '../assets/image/productDetails/banner1.png';
import banner3 from '../assets/image/productDetails/banner3.png';
import arrow from '../assets/image/productDetails/arrow.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BestSellingProducts from '../components/BestSellingProducts';
import Experience from '../components/Experience';
import Amazone from '../assets/image/amazone.png';
import Flipkart from '../assets/image/flipkart.png';
import { Link, useLocation } from 'react-router-dom';
import { CounterContext } from '../context/ContextProvider';
import axios from 'axios'
import { BaseUrl, FileUrl } from '../utills/BaseUrl'
import parse from 'html-react-parser'


const slideData = [
    { img: Remote, label: 'Remote' },
    { img: Stopwatch, label: '4 KV Surge Protection' },
    { img: Wind, label: 'Highest Air Delivery (>220CMM)' },
    { img: Flash, label: '4 KV Surge Protection' },
    { img: Motor, label: 'Reliable Inverter Motor (BLDC)' },
    { img: Wind, label: 'Highest Air Delivery (>220CMM)' },
    { img: Meter, label: 'Full Speed Operation (110V-280V)' },
];

// Feature List
const featureList = [
    'Reverse rotation',
    'Breeze Mode',
    'Sleep Mode',
    'Timer',
    'Boost Speed',
    'RF remote',
];

// Specification List 
const specList = [
    'Motor speed: 350 RPM',
    'Power Consumption: 32W',
    'Fan Sweep Size: 1200 mm',
    'Air Delivery: 220 CMM',
    'Service Value: 6.87',
    'THD: <10%',
    'Speed Settings: 5 + Boost (370rpm)',
    'Winding Material: Copper',
    'Blade & Covers Material: Aluminium',
];

// related Product Slider 
const sliderSettings = {
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
};

// Feature Component  
const FeatureItem = ({ text }) => (

    <div className="d-flex featurebox">
        <img src={arrow} className="img-fluid" alt="arrow" />
        <p>{text}</p>
    </div>
);

const ProductDetails = () => {

    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectdImage, setSelectedImaeg] = useState([0])
    const [name, setName] = useState('');
    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (product?.variants?.length > 0) {
            const defaultVariant = product.variants[0];
            setSelectedVariant(defaultVariant);
            if (defaultVariant?.sizes?.length > 0) {
                setSelectedSize(defaultVariant.sizes[0]);
            }
        }
    }, [product]);

    // getting productId from product
    const location = useLocation();
    const productId = location.state
    

    // fetching product by Id 
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/products/${productId}`);
                setProduct(response.data?.body);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchData();
    }, [productId]);

    // handleProduct where for Only Number Can Enter 
    const handleChange = (e) => {
        const input = e.target.value;
        // Allow only letters and spaces
        const filtered = input.replace(/\D/g, '');
        setName(filtered);
    };

    // adding Data to cart
    const { addData } = useContext(CounterContext);
    
    const handeAddToCart = () => {
        if (!selectedVariant || !selectedSize) return;

        const cartItem = {
            ...product,
            selectedVariant,
            selectedSize
        };

        addData(cartItem);
    }


    // Handle color click
    const handleColorClick = (variant) => {
        setSelectedVariant(variant);
        // Auto-select first available size (if any)
        if (variant.sizes && variant.sizes.length > 0) {
            setSelectedSize(variant.sizes[0]);
        } else {
            setSelectedSize(null);
        }
    };
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const { quantities } = useContext(CounterContext);

const quantity = quantities[product._id] || 1;


    return (
        <>
            <NavBar />
            <div className="productDetails">
                <div className="stickyPos">
                    <div className="brdcrb">
                        <div className="container">
                            <div className="breadcrumb">
                                <p>Home</p><span>/</span><p>{product.category?.name}</p><span>/</span><p>{product.name}</p>
                            </div>
                        </div>
                    </div>

                    {/* Title & Price */}
                    <div className="titlePriceBox">
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-between">
                                <h2 style={{ width: "500px" }}>{product.name}</h2>
                                <div className="d-flex align-items-center">
                                    {/* <div className="price">
                                        <a target="_blank" href="https://www.amazon.in/Victura-Airmotion-Renacer-Delivery-Warranty/dp/B0D9MBXL38?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3L113L248B4Q0"><img src={Amazone} alt="amazone" className='img-fluid me-2' style={{ height: "40px", width: "40px" }} /></a>
                                        <a target="_blank" href="https://www.flipkart.com/victura-airmotion-aethra-bldc-high-speed-air-delivery-2-year-warranty-5-star-1200-mm-3-blade-ceiling-fan/p/itm437bd3a7fb8b7?pid=FANH3HTQNDJGT6XW&lid=LSTFANH3HTQNDJGT6XW7XCWEW&marketplace=FLIPKART&cmpid=content_fan_8965229628_gmc"><img src={Flipkart} alt="flipkart" className='img-fluid me-4' style={{ height: "40px", width: "40px" }} /></a>
                                        <span className="cutprice">₹5,699.00</span>
                                        <p className="actualprice">₹3,699.00</p>
                                        <span className="tax">(incl. of all taxes)</span>
                                        <span className="discount">-40%</span>
                                    </div> */}
                                    <div className="price">
                                        <a target="_blank" href="https://www.amazon.in/Victura-Airmotion-Renacer-Delivery-Warranty/dp/B0D9MBXL38?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3L113L248B4Q0"><img src={Amazone} alt="amazone" className='img-fluid me-2' style={{ height: "40px", width: "40px" }} /></a>
                                        <a target="_blank" href="https://www.flipkart.com/victura-airmotion-aethra-bldc-high-speed-air-delivery-2-year-warranty-5-star-1200-mm-3-blade-ceiling-fan/p/itm437bd3a7fb8b7?pid=FANH3HTQNDJGT6XW&lid=LSTFANH3HTQNDJGT6XW7XCWEW&marketplace=FLIPKART&cmpid=content_fan_8965229628_gmc"><img src={Flipkart} alt="flipkart" className='img-fluid me-4' style={{ height: "40px", width: "40px" }} /></a>

                                        <span className="cutprice">₹{selectedSize?.mrp * quantity || '0.00'}</span>
                                        <p className="actualprice">₹{selectedSize?.salePrice * quantity || '0.00'}</p>
                                        {selectedSize && (
                                            <span className="discount">
                                                -{Math.round(
                                                    ((selectedSize.mrp - selectedSize.salePrice) / selectedSize.mrp) * 100
                                                )}
                                                %
                                            </span>
                                        )}
                                    </div>
                                    <button className="add-to-cart-btn" onClick={handeAddToCart}>Add To Cart</button>
                                    <button className="buy-now-btn add-to-cart-btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="container">
                    <div className="row">
                        {/* Images */}
                        <div className="col-lg-6">
                            <div className="product-images-box">
                                <div className="row">
                                    <div className="col-2">
                                        {selectedSize?.images?.map((image, idx) => (
                                            <div key={idx} className="product-image-indecator" onClick={() => setSelectedImaeg([idx])}>
                                                <img src={`${FileUrl}/${image}`} alt={image} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-10">
                                        <div className="product-image">
                                            {/* <div className="d-flex justify-content-between">
                                                <h3>
                                                    {product.name}
                                                </h3>
                                                <img src={Rating} className="rating" alt="rating" />
                                            </div> */}
                                            <div className="image-main">
                                                <img src={`${FileUrl}/${selectedSize?.images[selectdImage]}`} alt="fan" className="img-fluid productImg" />
                                                <button className="add-to-cart-btn">
                                                    Save upto ₹1500* Per Year
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="col-lg-6 details">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h2>{product.name}</h2>
                                    <p>{parse(product.shortDescription ? product.shortDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, officiis?')}</p>
                                </div>
                                <button className="shere-btn">
                                    Share <img src={upload} alt="upload" />
                                </button>
                            </div>

                            <div className="colors">
                                <h4>Color - {selectedVariant ? selectedVariant.color?.name : ''}</h4>
                                <div className="color-box d-flex">
                                    {product?.variants?.map((variant, index) => (
                                        <div
                                            key={index}
                                            className={`color ${selectedVariant?._id === variant._id ? 'active' : ''}`}
                                            style={{
                                                background: !variant.color?.anotherCode
                                                    ? variant.color?.code
                                                    : `linear-gradient(0deg, ${variant.color?.anotherCode} 50%, ${variant?.color.code} 50%)`,
                                                cursor: "pointer"
                                            }} onClick={() => handleColorClick(variant)}
                                        ></div>
                                    ))}
                                </div>
                            </div>

                            <div className="d-flex">
                                <>
                                    {selectedVariant?.sizes?.length > 0 && (
                                        <div className="Size mt-3">
                                            <h4 >Sweep Size:</h4>
                                            <div className="d-flex gap-2 ">
                                                {selectedVariant.sizes.map((sizeItem, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={` sizeOption ${selectedSize?._id === sizeItem._id ? 'active' : ''}`}
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => handleSizeClick(sizeItem)}
                                                    >
                                                        {sizeItem.size.title}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>

                                <div className="Size watt">
                                    <h4 className="mb-4">Watt</h4>
                                    <span>35w</span>
                                </div>
                            </div>

                            <h4>Quantity</h4>
                            <QuantityInput productId={product._id} />

                            <div className="delivery">
                                <h4>Delivery Details</h4>
                                <div className="d-flex">
                                    <input type="text" placeholder="Pincode" value={name} onChange={handleChange} />
                                    <button className="add-to-cart-btn">Check Delivery Time</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Slider */}
                <div className="container">
                    <Slider className="slider" {...sliderSettings}>
                        {slideData.map(({ img, label }, idx) => (
                            <div key={idx} className="slide-box">
                                <img src={img} className="img-fluid" alt={label} />
                                <p>{label}</p>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Banners */}
                <div className="container">
                    <img src={banner1} alt="Banner 1" className="img-fluid" />
                </div>


                <Experience />


                <div className="container">
                    <img src={banner2} alt="Banner 2" className="img-fluid my-5" />
                </div>

                {/* Features & Specs */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className='featureHeading'>Features :</h2>
                            <div className="Features">
                                {featureList.map((feature, idx) => (
                                    <FeatureItem key={idx} text={feature} />
                                ))}
                            </div>
                            <h2 className='featureHeading'>Specifications :</h2>
                            <div className="Features">
                                {specList.map((spec, idx) => (
                                    <FeatureItem key={idx} text={spec} />
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='Additional'>
                                <h2>Additional Details</h2>
                                <div className="addit-box flex-column align-items-start mb-3">
                                    <h3>Description :</h3>
                                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia temporibus perferendis necessitatibus saepe tenetur delectus provident quo ducimus debitis cum libero porro molestiae doloribus ullam, eaque expedita non at nisi obcaecati error distinctio! Aliquid corrupti vero culpa impedit eum dignissimos id eos dolores illum distinctio non fugiat, obcaecati nulla magnam unde perferendis voluptates earum eius aut. Praesentium natus similique commodi numquam cupiditate sed architecto sapiente consequuntur hic beatae perferendis, dolores excepturi eum, illum ex minus molestias? Rem dolorem perspiciatis voluptates dignissimos facere dicta, et laboriosam reprehenderit sapiente laborum eos exercitationem neque, possimus omnis esse non totam? Magnam doloremque quibusdam mollitia.</p>
                                </div>
                                <div className="addit-box">
                                    <h3>Manufacturer :</h3>
                                    <p> <a href="">POOJA METAL PROCESSORS (P) LTD,</a> an ISO 9001-2015 and ISO 14001:2015 and is one of the highly recognized manufacturer and exporter of Electrical Stampings.</p>
                                </div>
                                <div className="addit-box">
                                    <h3>Manufacturer and packaged by:</h3>
                                    <p>POOJA METAL PROCESSORS  <a href="#">Plot NO.212, Sector 58, Faridabad, Haryana - 121004 </a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <img src={banner3} alt="Banner 1" className="img-fluid" />
                </div>

            </div>
            <div className="listingProducts related">
                < BestSellingProducts slideTOshow={4} heading={'Related Product'} />
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails;
