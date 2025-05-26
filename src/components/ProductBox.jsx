import React from 'react'
import Fan from '../assets/image/product/fan.png'
import '../assets/css/product.css'
import { MdOutlineFileUpload } from "react-icons/md";


function ProductBox() {
  return (
    <div className='product-box'>
      <button className='shere-btn'>Shere <MdOutlineFileUpload/></button>
      <img src={Fan} alt="product" />
      <div className="d-flex justify-content-between align-items-center w-100" >
        <h2>Induction celling fan Etoile</h2>
        <button className='watt-btn'>35W</button>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100" >
        <div className='colors'>
          <p>Color :</p>
          <div className="color-box">
            <div className="color purple"></div>
            <div className="color light-brown"></div>
            <div className="color gredient"></div>
            <div className="color light-brown"></div>
            <div className="color teal"></div>
          </div>
        </div>
        <div className='Size'>
          <p>Sweep Size :</p>
          <span>1200 mm</span>
        </div>
      </div>
      <div className="price">
        <span className='cutprice'> ₹5,699.00</span>
        <p className='actualprice'> ₹3,699.00</p>
        <span className='discount'>-40%</span>
      </div>
      <button className='add-to-cart-btn'>ADD TO CART</button>
    </div>
  )
}

export default ProductBox