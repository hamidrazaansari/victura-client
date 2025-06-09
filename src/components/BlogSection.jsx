import React from 'react'
// import Arrow from '../assets/image/icon_rm_right.svg'
import  Blog1 from '../assets/image/blog1.png'
import  Blog2 from '../assets/image/blog2.png'
import  Blog3 from '../assets/image/blog3.png'
import '../assets/css/blog.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import ScrollAnimation from 'react-animate-on-scroll'


function BlogSection({heading}) {
  return (
    <div className='blog'>
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <div className='content'>
                    <ScrollAnimation animateIn="fadeInUp">
                    <h2>{!heading ? 'Blog' : heading}</h2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn="fadeInUp">
                <button className='readMore '>Read More <IoIosArrowRoundForward/> </button>
                </ScrollAnimation>
            </div>

            <ScrollAnimation animateIn="fadeInUp">
            <div class="row">
                <div className="col-lg-4">
                    <div className="blog-box">
                        <img src={Blog1} className='blog-img' alt="blog1" />
                       <div className="text">
                       <h3>An Easy Guide to Smart TPW Fan</h3>
                       <button className='ReadMore'>Read More <IoIosArrowRoundForward/></button>
                       </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-box">
                        <img src={Blog2} className='blog-img' alt="blog2" />
                       <div className="text">
                       <h3>An Easy Guide to BLDC Smart ceiling Fan</h3>
                       <button className='ReadMore'>Read More <IoIosArrowRoundForward/></button>
                       </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-box">
                        <img src={Blog3} className='blog-img' alt="blog3" />
                       <div className="text">
                       <h3>An Easy Guide to Ventilator Fan</h3>
                       <button className='ReadMore'>Read More <IoIosArrowRoundForward/></button>
                       </div>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
        </div>
    </div>
  )
}

export default BlogSection