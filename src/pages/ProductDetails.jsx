import React , {useState} from 'react';
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

const slideData = [
    { img: Remote, label: 'Remote' },
    { img: Stopwatch, label: '4 KV Surge Protection' },
    { img: Wind, label: 'Highest Air Delivery (>220CMM)' },
    { img: Flash, label: '4 KV Surge Protection' },
    { img: Motor, label: 'Reliable Inverter Motor (BLDC)' },
    { img: Wind, label: 'Highest Air Delivery (>220CMM)' },
    { img: Meter, label: 'Full Speed Operation (110V-280V)' },
];



  const colorOptions = [
      { name: 'Purple', className: 'purple' },
    { name: 'Light-brown', className: 'light-brown' },
    { name: 'Black & White', className: 'gredient' },
    { name: 'Teal', className: 'teal' },
  ];

const featureList = [
    'Reverse rotation',
    'Breeze Mode',
    'Sleep Mode',
    'Timer',
    'Boost Speed',
    'RF remote',
];

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

const FeatureItem = ({ text }) => (
    
    <div className="d-flex featurebox">
        <img src={arrow} className="img-fluid" alt="arrow" />
        <p>{text}</p>
    </div>
);

const ProductDetails = () =>{
      const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

          const [name, setName] = useState('');
      
          const handleChange = (e) => {
              const input = e.target.value;
              // Allow only letters and spaces
              const filtered = input.replace(/\D/g, '');
              setName(filtered);
          };

    return (
    <>
        <NavBar />
        <div className="productDetails">
            <div className="stickyPos">
                <div className="brdcrb">
                    <div className="container">
                        <div className="breadcrumb">
                            <p>Home</p><span>/</span><p>BLDC Ceiling Fan</p><span>/</span><p>Glider BLDC & Induction</p>
                        </div>
                    </div>
                </div>


                {/* Title & Price */}
                <div className="titlePriceBox">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <h2 style={{width:"500px"}}>GLIDER BLDC & INDUCTION</h2>
                            <div className="d-flex align-items-center">
                                <div className="price">
                                    <img src={Amazone} alt="amazone" className='img-fluid me-2' style={{height:"40px" , width:"40px"}} />
                                    <img src={Flipkart} alt="flipkart" className='img-fluid me-4' style={{height:"40px" , width:"40px"}} />
                                    <span className="cutprice">₹5,699.00</span>
                                    <p className="actualprice">₹3,699.00</p>
                                    <span className="tax">(incl. of all taxes)</span>
                                    <span className="discount">-40%</span>
                                </div>
                                <button className="add-to-cart-btn">Add To Cart</button>
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
                                    {[...Array(5)].map((_, idx) => (
                                        <div key={idx} className="product-image-indecator"></div>
                                    ))}
                                </div>
                                <div className="col-10">
                                    <div className="product-image">
                                        <div className="d-flex justify-content-between">
                                            <h3>
                                                Energy efficient <br /><span>BLDC MOTOR</span>
                                            </h3>
                                            <img src={Rating} className="rating" alt="rating" />
                                        </div>
                                        <div className="image-main">
                                            <img src={Fan} alt="fan" className="img-fluid" />
                                            <button className="add-to-cart-btn mt-5">
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
                                <h2>GLIDER BLDC & INDUCTION</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, officiis?</p>
                            </div>
                            <button className="shere-btn">
                                Share <img src={upload} alt="upload" />
                            </button>
                        </div>

                        <div className="colors">
                            <h4>Color - {selectedColor.name}</h4>
                            <div className="color-box d-flex">
                                {colorOptions.map((color, idx) => (
                                    <div
                                        key={idx}
                                        className={`color ${color.className} ${idx === 0 ? 'ms-0' : ''} ${selectedColor.className === color.className ? 'active' : ''}`}
                                        onClick={() => setSelectedColor(color)}
                                        style={{ cursor: 'pointer' }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="Size">
                                <h4 className="mb-4">Sweep Size</h4>
                                <span>1200 mm</span>
                            </div>
                            <div className="Size watt">
                                <h4 className="mb-4">Watt</h4>
                                <span>35w</span>
                            </div>
                        </div>

                        <h4>Quantity</h4>
                        <QuantityInput initialQuantity={1} min={1} max={10} />

                        <div className="delivery">
                            <h4>Delivery Details</h4>
                            <div className="d-flex">
                                <input type="text" placeholder="Pincode..." value={name} onChange={handleChange}/>
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


            <Experience/>


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
              )) } 
                    </div>
                <h2 className='featureHeading'>Specifications :</h2>
                <div className="Features">
                  {specList.map((spec, idx) => (
                      <FeatureItem key={idx} text={spec} />
              )) } 
                </div>
            </div>
                     <div className="col-lg-6">
            <div className='Additional'>
                <h2>Additional Details</h2>
                <div className="addit-box">
                    <h3>Manufacturer :</h3>
                    <p> <a href="">POOJA METAL PROCESSORS (P) LTD,</a> an ISO 9001-2015 and ISO 14001:2015 and is one of the highly recognized manufacturer and exporter of Electrical Stampings.</p>
                </div>
                <div className="addit-box">
                    <h3>Manufacturer and packaged by:</h3>
                    <p>POOJA METAL PROCESSORS  <a href=""> Plot NO.212, Sector 58, Faridabad, Haryana - 121004 </a></p>
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
        <BestSellingProducts slideTOshow={4}  heading={'Related Product'}/>
    </div>
    <Footer />
  </>
)} 

export default ProductDetails;
