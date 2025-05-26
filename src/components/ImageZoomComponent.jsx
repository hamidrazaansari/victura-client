// ImageZoomComponent.jsx
import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import Fan from '../assets/image/product/fan.png';


const ImageZoomComponent = () => {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <InnerImageZoom
        src={Fan}
        zoomSrc={Fan}
        zoomType="hover"
        zoomPreload={true}
        zoomScale={1.5}
        width={400}
        height={300}
        alt="Zoomed Product"
      />
    </div>
  );
};

export default ImageZoomComponent;
