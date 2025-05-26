import React from 'react'
import '../assets/css/category.css'
import bldc from '../assets/image/category/bldc.png'
import exhoust from '../assets/image/category/exhoust.png'
import induction from '../assets/image/category/induction.png'
import table from '../assets/image/category/table.png'
import ventilation from '../assets/image/category/ventilation.png'
import ScrollAnimation from 'react-animate-on-scroll'

function Category() {
    return (
        <div className='category' style={{ position: "relative", top: "-6px" }}>
            <div className="container">
                <ScrollAnimation animateIn="fadeInUp">
                    <h2 className='heading'><span></span> Explore Our Products <span></span> </h2>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp">
                    <div className="row">
                        <div className="col-lg-5 p-0">
                            <div className="image-box-long">
                                <img src={bldc}  alt="" />
                                <h3>BLDC</h3>
                                <button className='fan-btn'>Ceiling Fan</button>
                            </div>
                        </div>
                        <div className="col-lg-7 p-0">
                            <div className="d-flex flex-row flex-wrap">
                                <div className="image-box">
                                    <img src={induction}  alt="" />
                                    <button className='fan-btn'>Induction Ceiling Fan</button>
                                </div>

                                <div className="image-box">
                                    <img src={table}  alt="" />
                                    <button className='fan-btn'>TPW Fan</button>
                                </div>

                                <div className="image-box">
                                    <img src={ventilation}  alt="" />
                                    <button className='fan-btn'>Ventalitaion Fan</button>
                                </div>

                                <div className="image-box">
                                    <img src={exhoust}  alt="" />
                                    <button className='fan-btn'>Exhaust Fan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

            </div>
        </div>
    )
}

export default Category