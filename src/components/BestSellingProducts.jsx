import React, { useState, useEffect } from 'react'
import ProductBox from './ProductBox';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios'
import { BaseUrl, FileUrl } from '../utills/BaseUrl'


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <MdOutlineKeyboardArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <MdOutlineKeyboardArrowLeft />
    </div>
  );
};

function BestSellingProducts({ slideTOshow, heading }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/products`);
        setProducts(response.data?.body);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchData();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    cssEase: 'linear',
    slidesToShow: slideTOshow ? slideTOshow : 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className='BestSellingProducts'>
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp">
          <h2 className='heading'> <span></span> {heading} <span></span></h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Slider {...settings}>

            {products && products.map((product, index) => {

              return (
                <div className='mx-2' key={index}>
                  <ProductBox product={product} />
                </div>
              )
            }
            )}

          </Slider>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default BestSellingProducts