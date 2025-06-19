import React, { useState } from 'react'
import Ratings from './Ratings'
import '../assets/css/rating.css'
import { Rating } from 'react-simple-star-rating'
import Fan from '../assets/image/socalMedia/fan.png'

function RatingReview() {
    const [ratingValue, setRatingValue] = useState(0)

    const handleRating = (rate) => {
        setRatingValue(rate)
    }
    return (
        <>
            <div className='review'>
                <div className="container">
                    <h2 className='heading'>Customer Reviews</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="rating ">
                                <Ratings />
                            </div>
                        </div>

                        <div className="col-lg-4 px-4" style={{ borderLeft: "1px solid #8080804a", borderRight: "1px solid #8080804a" }}>
                            <div className="review-progress">
                                <span>5</span>
                                <Rating
                                    initialValue={0}
                                    iconsCount={1}
                                    readonly
                                    size={25}
                                />
                                <div className="progressbar">
                                    <input type="range" className='rangeBox' style={{
                                        background: `linear-gradient(
                                        to right,
                                        #000 0%,
                                        #000 calc(${697} / 1000 * 100%),
                                        #e0e0e0 calc(${697} / 1000 * 100%),
                                        #e0e0e0 100%
                                      )`}} value={697} max={1000} />
                                </div>
                                <p>697</p>
                            </div>
                            <div className="review-progress">
                                <span>4</span>
                                <Rating
                                    initialValue={0}
                                    iconsCount={1}
                                    readonly
                                    size={25}
                                />
                                <div className="progressbar">
                                    <input type="range" className='rangeBox' style={{
                                        background: `linear-gradient(
                                        to right,
                                        #000 0%,
                                        #000 calc(${261} / 1000 * 100%),
                                        #e0e0e0 calc(${261} / 1000 * 100%),
                                        #e0e0e0 100%
                                      )`}} value={261} max={1000} />
                                </div>
                                <p>261</p>
                            </div>
                            <div className="review-progress">
                                <span>3</span>
                                <Rating
                                    initialValue={0}
                                    iconsCount={1}
                                    readonly
                                    size={25}
                                />
                                <div className="progressbar">
                                    <input type="range" className='rangeBox' style={{
                                        background: `linear-gradient(
                                        to right,
                                        #000 0%,
                                        #000 calc(${150} / 1000 * 100%),
                                        #e0e0e0 calc(${150} / 1000 * 100%),
                                        #e0e0e0 100%
                                      )`}} value={150} max={1000} />
                                </div>
                                <p>150</p>
                            </div>
                            <div className="review-progress">
                                <span>2</span>
                                <Rating
                                    initialValue={0}
                                    iconsCount={1}
                                    readonly
                                    size={25}
                                />
                                <div className="progressbar">
                                    <input type="range" className='rangeBox' style={{
                                        background: `linear-gradient(
                                        to right,
                                        #000 0%,
                                        #000 calc(${63} / 1000 * 100%),
                                        #e0e0e0 calc(${63} / 1000 * 100%),
                                        #e0e0e0 100%
                                      )`}} value={63} max={1000} />
                                </div>
                                <p>63</p>
                            </div>
                            <div className="review-progress">
                                <span>1</span>
                                <Rating
                                    initialValue={0}
                                    iconsCount={1}
                                    readonly
                                    size={25}
                                />
                                <div className="progressbar">
                                    <input type="range" className='rangeBox' style={{
                                        background: `linear-gradient(
                                        to right,
                                        #000 0%,
                                        #000 calc(${145} / 1000 * 100%),
                                        #e0e0e0 calc(${145} / 1000 * 100%),
                                        #e0e0e0 100%
                                      )`}} value={145} max={1000} />
                                </div>
                                <p>145</p>
                            </div>
                        </div>

                        <div class="col-md-4 ">
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <button className='add-to-cart-btn m-0' style={{ height: "50px", width: "60%", borderRadius: "4px" }}>Write a Review</button>
                            </div>
                        </div>

                        <div className="col-lg-4">

                        </div>
                    </div>
                </div>
            </div>
            <div className="review-boxes">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center">
                            <div className='avtar'>RS</div>
                            <p className='mb-0'>Ayushi R🇮</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Rating
                            transition
                            // showTooltip
                            // tooltipArray={['Very Bad', 'Terrible', 'Bad', 'Average', 'Good', 'Very Good', 'Great', 'Prefect', 'Excellent']}
                            initialValue={ratingValue}
                            allowFraction={true}
                            size={25}
                            fillColor={'#000'}
                            onClick={handleRating}
                            emptyColor={'#fff'}
                            SVGstrokeColor={"#000"}
                            SVGstorkeWidth={1}
                            className='mb-2'
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. glow and complementing my skin . These products are gentle <button className='fw-bold readmore'>Read More</button> </p>
                        <div className='imges-container'>
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <p>29/06/2024</p>
                    </div>
                </div>
            </div>
            <div className="review-boxes">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center">
                            <div className='avtar'>RS</div>
                            <p className='mb-0'>Ayushi R🇮</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Rating
                            transition
                            // showTooltip
                            // tooltipArray={['Very Bad', 'Terrible', 'Bad', 'Average', 'Good', 'Very Good', 'Great', 'Prefect', 'Excellent']}
                            initialValue={ratingValue}
                            allowFraction={true}
                            size={25}
                            fillColor={'#000'}
                            onClick={handleRating}
                            emptyColor={'#fff'}
                            SVGstrokeColor={"#000"}
                            SVGstorkeWidth={1}
                            className='mb-2'
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. glow and complementing my skin . These products are gentle <button className='fw-bold readmore'>Read More</button> </p>
                        <div className='imges-container'>
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <p>29/06/2024</p>
                    </div>
                </div>
            </div>
            <div className="review-boxes">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center">
                            <div className='avtar'>RS</div>
                            <p className='mb-0'>Ayushi R🇮</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Rating
                            transition
                            // showTooltip
                            // tooltipArray={['Very Bad', 'Terrible', 'Bad', 'Average', 'Good', 'Very Good', 'Great', 'Prefect', 'Excellent']}
                            initialValue={ratingValue}
                            allowFraction={true}
                            size={25}
                            fillColor={'#000'}
                            onClick={handleRating}
                            emptyColor={'#fff'}
                            SVGstrokeColor={"#000"}
                            SVGstorkeWidth={1}
                            className='mb-2'
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. glow and complementing my skin . These products are gentle <button className='fw-bold readmore'>Read More</button> </p>
                        <div className='imges-container'>
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                            <img src={Fan} alt="Fan" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <p>29/06/2024</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default RatingReview