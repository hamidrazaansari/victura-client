import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import BldcFan from '../assets/image/bldcFan.png';
import CilingFan from '../assets/image/product/fan.png';

const productData = {
  bldc: {
    image: BldcFan,
    fans: [
      { name: "BLDC Model A", count: 2 },
      { name: "BLDC Model B", count: 3 },
    ],
  },
  induction: {
    image: CilingFan,
    fans: [
      { name: "Induction Model A", count: 1 },
      { name: "Induction Model B", count: 2 },
    ],
  },
  tpw: {
    image: CilingFan,
    fans: [
      { name: "TPW Model A", count: 4 },
      { name: "TPW Model B", count: 2 },
    ],
  },
  ventilation: {
    image: CilingFan,
    fans: [
      { name: "Ventilation Model A", count: 3 },
      { name: "Ventilation Model B", count: 1 },
    ],
  },
  exhaust: {
    image: CilingFan,
    fans: [
      { name: "Exhaust Model A", count: 2 },
      { name: "Exhaust Model B", count: 2 },
    ],
  },
};

function HoverDropdown({ handleNavClose }) {
  const [show, setShow] = useState(false);
  const [activeKey, setActiveKey] = useState('bldc');

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  const handleHover = (key) => setActiveKey(key);

  return (
    <>
      <div className='d-lg-none d-block ms-2'>
        <Dropdown.Item><Link onClick={handleNavClose} to={'/about'}>BLDC Ceiling Fan</Link></Dropdown.Item>
        <Dropdown.Item><Link onClick={handleNavClose} to={'/blog'}>Induction Ceiling Fan</Link></Dropdown.Item>
        <Dropdown.Item><Link onClick={handleNavClose} to={'/environmental'}>TPW Fan</Link></Dropdown.Item>
        <Dropdown.Item><Link onClick={handleNavClose} to={'/certification'}>Ventilation Fan</Link></Dropdown.Item>
        <Dropdown.Item><Link onClick={handleNavClose} to={'/catalouge'}>Exhaust Fan</Link></Dropdown.Item>
      </div>

      <Dropdown
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        show={show}
        className='navDropdown d-lg-flex d-none'
      >
        <Dropdown.Toggle id="dropdown-basic" style={{ height: "87px" }} className='bg-transparent border-0 text-dark'>
          Products <IoIosArrowDown />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <Dropdown.Item onMouseEnter={() => handleHover('bldc')}>
                  <Link to={'/product'}><span>BLDC Ceiling Fan</span> <IoIosArrowForward /></Link>
                </Dropdown.Item>
                <Dropdown.Item onMouseEnter={() => handleHover('induction')}>
                  <Link to={'/blog'}><span>Induction Ceiling Fan</span> <IoIosArrowForward /></Link>
                </Dropdown.Item>
                <Dropdown.Item onMouseEnter={() => handleHover('tpw')}>
                  <Link to={'/environmental'}><span>TPW Fan</span> <IoIosArrowForward /></Link>
                </Dropdown.Item>
                <Dropdown.Item onMouseEnter={() => handleHover('ventilation')}>
                  <Link to={'/certification'}><span>Ventilation Fan</span> <IoIosArrowForward /></Link>
                </Dropdown.Item>
                <Dropdown.Item onMouseEnter={() => handleHover('exhaust')}>
                  <Link to={'/catalouge'}><span>Exhaust Fan</span> <IoIosArrowForward /></Link>
                </Dropdown.Item>
              </div>

              <div className="col-3">
                <div className="fan-box">
                  <img src={productData[activeKey].image} alt="fan" className="img-fluid" />
                </div>
              </div>

              <div className="col-6">
                <div className="row">
                  {productData[activeKey].fans.map((fan, index) => (
                    <div className="col-6" key={index}>
                      <div className="fan">
                        <h3>{fan.name}</h3>
                        <p>Explore ({fan.count} Products)</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default HoverDropdown;
