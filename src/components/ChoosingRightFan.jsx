import React, { useState } from 'react';
import SmartCeilingFan from '../assets/image/smart-ceiling.png';
import TableFan from '../assets/image/Feature/b2.jpg';
import VentilatorFan from '../assets/image/Feature/b3.jpg';
import ExshoustFan from '../assets/image/Feature/b5.jpg';
import BLDCFan from '../assets/image/Feature/b4.jpg';
import '../assets/css/choosing-right-fan.css';
import ScrollAnimation from 'react-animate-on-scroll';

const fanData = {
  ceiling: {
    title: "Choosing the Right Ceiling Fan.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: SmartCeilingFan,
  },
  table: {
    title: "Choosing the Right TPW Fan.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: TableFan,
  },
  ventilator: {
    title: "Choosing the Right Ventilator Fan.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: VentilatorFan,
  },
  exhaust: {
    title: "Choosing the Right Ventilator Fan.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: ExshoustFan,
  },
  bldc: {
    title: "Choosing the Right Ventilator Fan.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: BLDCFan,
  },
};

function ChoosingRightFan() {
  const [selectedFan, setSelectedFan] = useState('bldc');

  const { title, description, image } = fanData[selectedFan];

  return (
    <div className='ChoosingRightFan'>
      <div className="container">
        <div className="choosing-box">
          <div className="row">
            <div className="col-lg-6">
              <div className="fan-box">
                <ScrollAnimation animateIn="fadeInUp">
                <img src={image} className='img-fluid' alt={title} />
                </ScrollAnimation>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <ScrollAnimation animateIn="fadeInUp">
                <h2>{title}</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp">
                <p>{description}</p>
                </ScrollAnimation>
                <div className="d-flex gap-2 flex-wrap">
                  <ScrollAnimation animateIn="fadeInUp">
                    <button className={selectedFan === 'bldc' ? 'active' : ''} onClick={() => setSelectedFan('bldc')}>BLDC CEILING FAN</button>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp">
                    <button className={selectedFan === 'ceiling' ? 'active' : ''} onClick={() => setSelectedFan('ceiling')}>CEILING FAN</button>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp">
                    <button className={selectedFan === 'table' ? 'active' : ''} onClick={() => setSelectedFan('table')}>TPW Fan</button>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp">
                    <button className={selectedFan === 'ventilator' ? 'active' : ''} onClick={() => setSelectedFan('ventilator')}>VENTILATOR FAN</button>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp">
                    <button className={selectedFan === 'exhaust' ? 'active' : ''} onClick={() => setSelectedFan('exhaust')}>Exhaust Fan</button>
                  </ScrollAnimation>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosingRightFan;
