import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/css/navbar.css'
import Logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from "react-icons/fa";
import HoverDropdown from './HoverDropdown';
import Profile from '../assets/image/profile.png'
import Mail from '../assets/image/socalMedia/mail.png';
import call from '../assets/image/socalMedia/call.png';
import CartSidebar from './CartSidebar';
import Searchbar from './Searchbar';


function NavBar() {

  const [showNav, setShowNav] = useState(false);

  const handleNavClose = () => setShowNav(false);
  const handleShowNav = () => setShowNav(true);
  const token = localStorage.getItem('token')
  

  return (
    <>
    <div className="navbar-top">
      <div className="container d-flex align-items-center justify-content-end">
        <p className='para'>We make every motor run efficiently</p>
        <div className='d-flex socal'>
          <img src={call} alt="icpn" className='img-fluid' />
          <p>+(91) 7669015000</p>
        </div>
        <div className='d-flex socal'>
          <img src={Mail} alt="icpn" className='img-fluid' />
          <p>fansales@victora.co.in</p>
        </div>
      </div>
    </div>
      <Navbar expand="lg" className="navbar sticky-top d-flex justify-content-between align-items-center">
        <div className="container">
          <Navbar.Brand >
            <Link to={'/'}>
              <img src={Logo} alt="Crown logo" />
            </Link>
          </Navbar.Brand>

          <div className='d-lg-flex align-items-center d-none'>

            <HoverDropdown />

            <Nav.Item href="/">
              <Nav.Link >About Us</Nav.Link>
            </Nav.Item>

            <Nav.Item href="/">
              <Nav.Link >Support & Warranty</Nav.Link>
            </Nav.Item>

            <Nav.Item href="/">
              <Nav.Link >Become A Dealer</Nav.Link>
            </Nav.Item>

            <Nav.Item >
              <Nav.Link as={Link}  to='/contact-us'>Contact Us</Nav.Link>
            </Nav.Item>
          </div>

          <div className='d-lg-flex align-items-center d-none'>
            <Nav.Item >
              <Nav.Link >
                <Searchbar/>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link}  to={ !token ? '/login' :  '/account'}> <img className='img-fluid' src={Profile} alt="profile icon" /></Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link >
                <CartSidebar/>
                 </Nav.Link>
            </Nav.Item>
          </div>
        </div>


        <button onClick={handleShowNav} className='bar d-lg-none d-block' > <FaBars /> </button>


      </Navbar>

      <Offcanvas show={showNav} placement={'end'} onHide={handleNavClose} className='nav-col  d-lg-none d-block'>
        <Offcanvas.Body>
          <div className="d-flex justify-content-center align-items-center flex-column  w-100 ">

            <div className='d-flex align-items-md-center align-items-start flex-column'>
              <Nav.Item>
                <HoverDropdown handleNavClose={handleNavClose} />

              </Nav.Item>
              <Nav.Item>
              </Nav.Item>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>

  );
}

export default NavBar;