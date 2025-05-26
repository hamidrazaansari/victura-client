import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BlogBanner from '../assets/image/blogBanner.png'
import  Blog1 from '../assets/image/blog1.png'
import  Blog2 from '../assets/image/blog2.png'
import  Blog3 from '../assets/image/blog3.png'
import '../assets/css/blog.css'
import { IoIosArrowRoundForward } from "react-icons/io";
function BlogListing() {


    return (
        <div>
            <NavBar />
            <div className="banner">
                <img src={BlogBanner} alt="blog banner" className='img-fluid' />
            </div>
            <div className="container my-4">
                <div className="breadcrumb">
                    <p>Home</p><span>/</span><p>Blog</p>
                </div>
            </div>
            <div className="container">
                <div class="row">
                    <div className="col-lg-4">
                        <div className="blog-box">
                            <img src={Blog1} className='blog-img' alt="blog1" />
                            <div className="text">
                                <h3>An Easy Guide to Smart TPW Fan</h3>
                                <button className='ReadMore'>Read More <IoIosArrowRoundForward /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-box">
                            <img src={Blog2} className='blog-img' alt="blog2" />
                            <div className="text">
                                <h3>An Easy Guide to BLDC Smart ceiling Fan</h3>
                                <button className='ReadMore'>Read More <IoIosArrowRoundForward /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-box">
                            <img src={Blog3} className='blog-img' alt="blog3" />
                            <div className="text">
                                <h3>An Easy Guide to Ventilator Fan</h3>
                                <button className='ReadMore'>Read More <IoIosArrowRoundForward /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-box">
                            <img src={Blog3} className='blog-img' alt="blog3" />
                            <div className="text">
                                <h3>An Easy Guide to Ventilator Fan</h3>
                                <button className='ReadMore'>Read More <IoIosArrowRoundForward /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-box">
                            <img src={Blog3} className='blog-img' alt="blog3" />
                            <div className="text">
                                <h3>An Easy Guide to Ventilator Fan</h3>
                                <button className='ReadMore'>Read More <IoIosArrowRoundForward /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-box">
                            <img src={Blog3} className='blog-img' alt="blog3" />
                            <div className="text">
                                <h3>An Easy Guide to Ventilator Fan</h3>
                                <button className='ReadMore'>Read More <IoIosArrowRoundForward /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-box">
                            <img src={Blog3} className='blog-img' alt="blog3" />
                            <div className="text">
                                <h3>An Easy Guide to Ventilator Fan</h3>
                                <button className='ReadMore'>Read More <IoIosArrowRoundForward /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-box">
                            <img src={Blog3} className='blog-img' alt="blog3" />
                            <div className="text">
                                <h3>An Easy Guide to Ventilator Fan</h3>
                                <button className='ReadMore'>Read More <IoIosArrowRoundForward /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-box">
                            <img src={Blog3} className='blog-img' alt="blog3" />
                            <div className="text">
                                <h3>An Easy Guide to Ventilator Fan</h3>
                                <button className='ReadMore'>Read More <IoIosArrowRoundForward /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default BlogListing