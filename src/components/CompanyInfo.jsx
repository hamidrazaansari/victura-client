import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import OfficeBuilding from '../assets/image/office-building.png';
import certificate from '../assets/image/certificate.png';
import shoppingStore from '../assets/image/shopping-store.png';
import '../assets/css/info.css';
import CountUp from 'react-countup';

function CompanyInfo() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,  // Ensures animation only happens once
    threshold: 0.3,     // Trigger when 30% of the element is visible
    onChange: (inView) => {
      if (inView) setHasAnimated(true);
    }
  });

  return (
    <div className='CompanyInfo' ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="info-box" style={{ background: "#EEEDE8" }}>
              <img src={OfficeBuilding} alt="OfficeBuilding" />
              <div className='det'>
                <h2>
                  {hasAnimated && <CountUp end={49} duration={3} />}
                </h2>
                <p>Branch Offices</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="info-box" style={{ background: "#E6ECE8" }}>
              <img src={certificate} alt="certificate" />
              <div className='det'>
                <h2>
                  {hasAnimated && <CountUp end={4} duration={3} />}k+
                </h2>
                <p>Authorised Dealers</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="info-box" style={{ background: "#ECE6EC" }}>
              <img src={shoppingStore} alt="shoppingStore" />
              <div className='det'>
                <h2>
                  {hasAnimated && <CountUp end={24} duration={3} />}k+
                </h2>
                <p>Strong Retail Outlets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
