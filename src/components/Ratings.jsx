import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Ratings() {
  const [ratingValue, setRatingValue] = useState(4.5)

  const handleRating = (rate) => {
    setRatingValue(rate)
  }
  return (
    <>
      <div className='d-flex align-items-center'>
        <h2 style={{ fontFamily: "boldInter", fontSize: "50px", marginRight: "10px", marginBottom: "10px" }}>{ratingValue}</h2>
        <div>
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
          />
          <p>Based on 1316 reviews</p>
        </div>
      </div>
    </>
  )
}