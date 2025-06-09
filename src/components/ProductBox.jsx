import React, { useState, useEffect, useContext } from 'react';
import Fan from '../assets/image/product/fan.png';
import '../assets/css/product.css';
import { MdOutlineFileUpload } from "react-icons/md";
import { CounterContext } from '../context/ContextProvider';
import { FileUrl } from '../utills/BaseUrl';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';

function ProductBox({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const { addData } = useContext(CounterContext);

  // Set default variant and size
  useEffect(() => {
    if (product?.variants?.length > 0) {
      const defaultVariant = product.variants[0];
      setSelectedVariant(defaultVariant);
      if (defaultVariant?.sizes?.length > 0) {
        setSelectedSize(defaultVariant.sizes[0]);
      }
    }
  }, [product]);

  // When variant (color) changes, reset size
  const handleColorClick = (variant) => {
    setSelectedVariant(variant);
    if (variant?.sizes?.length > 0) {
      setSelectedSize(variant.sizes[0]);
    } else {
      setSelectedSize(null);
    }
  };

  // When size is clicked
  const handleSizeClick = (sizeItem) => {
    setSelectedSize(sizeItem);
  };

  // Add to cart with selected variant and size
  const handeAddToCart = () => {
    if (!selectedVariant || !selectedSize) return;

    const cartItem = {
      ...product,
      selectedVariant,
      selectedSize
    };

    addData(cartItem);
  };


  return (
    <>
      <ToastContainer />
      <div className='product-box'>
        <button className='shere-btn'>Share <MdOutlineFileUpload /></button>
        <div className='product-box-image'>
          <Link to={`/product/${product?.slug}`} state={product._id}>
            <img src={Fan} alt="product" />
          </Link>
        </div>
        <div className='w-100' style={{ marginBottom: "76px" }}>
          <div className="d-flex justify-content-between align-items-center w-100">
            <h2>{product?.name || ''}</h2>
            <button className='watt-btn'>35W</button>
          </div>

          <div className={`d-flex justify-content-between align-items-center w-100 ${selectedVariant?.sizes?.length > 1 ? 'flex-wrap' : ''}`}>
            {/* Color Section */}
            <div className="colors">
              <p>Color :</p>
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
                    }}
                    onClick={() => handleColorClick(variant)}
                  ></div>
                ))}
              </div>
            </div>

            {/* Size Section */}
            <div className="Size">
              <p>Sweep Size :</p>
              <div className="d-flex  gap-1 ms-1">
                {selectedVariant?.sizes?.map((item, idx) => (
                  <span
                    key={idx}
                    className={`size-option ${selectedSize?._id === item._id ? 'active' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleSizeClick(item)}
                  >
                    {item.size.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="price">
            <span className="cutprice">₹{selectedSize?.mrp || '0.00'}</span>
            <p className="actualprice">₹{selectedSize?.salePrice || '0.00'}</p>
            {selectedSize && (
              <span className="discount">
                -{Math.round(
                  ((selectedSize.mrp - selectedSize.salePrice) / selectedSize.mrp) * 100
                )}
                %
              </span>
            )}
          </div>
        </div>

        <button className='add-to-cart-btn' onClick={handeAddToCart}>ADD TO CART</button>
      </div>
    </>

  );
}

export default ProductBox;
