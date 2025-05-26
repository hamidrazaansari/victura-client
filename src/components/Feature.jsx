import React from 'react'
// import Fan from '../assets/image/ceiling-fan.png'
// import Motor from '../assets/image/bldc-moter.png'
// import stopwatch from '../assets/image/stopwatch.png'

import Remote from '../assets/image/Feature/remote.png'
import Power from '../assets/image/Feature/power.png'
import rotate from '../assets/image/Feature/rotate.png'
import speed from '../assets/image/Feature/speed.png'
import Setting from '../assets/image/Feature/setting.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Feature() {
    const featureSliderSettings = {
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
    return (
        <div className='features'>
            <div className="container">
                {/* <div className="row">
                <div className="col-lg-4">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <img src={Fan} alt="icon" />
                        <p>Long</p>
                        <h3>Blade</h3>
                        <p>Span</p>
                    </div>
                </div>
                <div className="col-lg-4 borders">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <img src={Motor} alt="icon" />
                        <p>Efficient</p>
                        <h3>BLDC</h3>
                        <p>Motor</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <img src={stopwatch} alt="icon" />
                        <p>Run</p>
                        <h3>3 Times</h3>
                        <p>Longer</p>
                    </div>
                </div>
            </div> */}

                {/* new design */}
                <div>
                    <Slider className='sider' {...featureSliderSettings}>
                        <div className="feature-boxes ">
                            <img src={Remote} alt="icon" />
                            <p>Remote</p>
                        </div>
                        <div className="feature-boxes">
                            <img src={Setting} alt="icon" />
                            <p>Robust & Reliable </p>
                        </div>
                        <div className="feature-boxes ">
                            <img src={rotate} alt="icon" />
                            <p>Built in-Timer</p>
                        </div>
                        <div className="feature-boxes">
                            <img src={Power} alt="icon" />
                            <p>4 kv Surge protection</p>
                        </div>
                        <div className="feature-boxes">
                            <img src={speed} alt="icon" />
                            <p>Full speed operation</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Feature