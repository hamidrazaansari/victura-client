import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';

// Social media icons
import Fb from '../assets/image/socalMedia/fb.png';
import Insta from '../assets/image/socalMedia/insta.png';
import P from '../assets/image/socalMedia/p.png';
import X from '../assets/image/socalMedia/x.png';
import Yt from '../assets/image/socalMedia/yt.png';
import location from '../assets/image/socalMedia/location.png';
import Mail from '../assets/image/socalMedia/mail.png';
import call from '../assets/image/socalMedia/call.png';

const socialIcons = [
  { src: X, alt: 'X' },
  { src: Fb, alt: 'Facebook' },
  { src: Insta, alt: 'Instagram' },
  { src: Yt, alt: 'YouTube' },
  { src: P, alt: 'Pinterest' },
];

const quickLinks = [
  { label: 'Register Warranty Card', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Terms & Conditions', path: '/contact' },
  { label: 'Privacy Policy', path: '/certification' },
  { label: 'Submit a Complaint', path: '/blog' },
  { label: 'Installation Guide', path: '/catalouge' },
  // { label: 'Become A Dealer', path: '/catalouge' },
];

const productLinks = [
  { label: 'BLDC Ceiling Fan', path: '/about' },
  { label: 'Induction Ceiling Fan', path: '/blog' },
  { label: 'TPW Fan & Wall Fan', path: '/contact' },
  { label: 'Ventilator Fan', path: '/certification' },
  { label: 'Exhaust Fan', path: '/catalouge' },
];

function Footer() {
  return (
    <>
      {/* Main Footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-lg-3 col-6 d-flex flex-column resp">
              <h2>About Us</h2>
              <div className="line"></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat suscipit ipsum, aspernatur inventore sapiente itaque velit odio voluptatibus perferendis!</p>
              <div className="socalMedia d-flex">
                {socialIcons.map((icon, idx) => (
                  <img key={idx} src={icon.src} alt={icon.alt} />
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-6 d-flex flex-column resp">
              <h2>Quick Links</h2>
              <div className="line"></div>
              <ul>
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="col-lg-3 col-6 d-flex flex-column resp">
              <h2>Products</h2>
              <div className="line"></div>
              <ul>
                {productLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-lg-3 col-6 d-flex flex-column resp">
              <h2>Contact Us</h2>
              <div className="line"></div>
              <div className="contact">
                <div className="d-flex align-items-center">
                  <img src={location} alt="Location" />
                  <p>Plot No.212, Sector 58, Faridabad Haryana - 121004</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={call} alt="Phone" />
                  <p>+91 7669015000</p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={Mail} alt="Email" />
                  <p>fansales@victora.co.in</p>
                </div>
              </div>
              <div className="subscribe">
                <h2>Newsletter</h2>
                <div className="d-flex">
                    <input type="email" className='form-control' placeholder='Email..' />
                    <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom outside of .footer */}
      <div className="footer-bottom">
        <div className="container">
          <p className="text-center">
            Copyright © 2025 Victora Airmotion. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer;
