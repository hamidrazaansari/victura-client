import React, { useEffect, useState } from 'react';
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
import LinkedIn from '../assets/image/socalMedia/linkrdin.png';
import axios from 'axios';
import { BaseUrl } from '../utills/BaseUrl';
import { toast , ToastContainer } from 'react-toastify';


const quickLinks = [
  { label: 'Register Warranty Card', path: '/warranty' },
  { label: 'Blog', path: '/blog' },
  { label: 'Terms & Conditions', path: '/term-and-condition' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Submit a Complaint', path: '/' },
  { label: 'Become A Dealer', path: '/become-a-dealer' },
];



function Footer() {
  const [categories , setCategories]= useState([]);
  const [email , setEmail]= useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {

      const response  = await axios.post(`${BaseUrl}/newsletters` , {email})

      if(response.status === 200){
        toast.success('You’ve successfully joined our newsletter..')
      }

      
    } catch (error) {
      console.log(error.response);
      
    }
  }

  // Fetch categories
  useEffect(() => {
    axios.get(`${BaseUrl}/categories`)
      .then((res) => {
        const catData = res.data?.body || [];
        setCategories(catData);

      })
      .catch((err) => console.error("Categories fetch failed", err));
  }, []);
  return (
    <>
    <ToastContainer/>
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
                <a href="https://www.facebook.com/victuraairmotion?mibextid=LQQJ4d">
                  <img  src={Fb} alt={'facebook'} />
                </a>
                <a href="https://www.facebook.com/victuraairmotion?mibextid=LQQJ4d">
                  <img  src={X} alt={'x'} />
                </a>
                <a href="https://www.instagram.com/victura_airmotion/?igsh=bTdjNGo5aW10MHd2#">
                  <img  src={Insta} alt={'instagram'} />
                </a>
                <a href="https://www.facebook.com/victuraairmotion?mibextid=LQQJ4d">
                  <img  src={Yt} alt={'youtube'} />
                </a>
                <a href="https://www.facebook.com/victuraairmotion?mibextid=LQQJ4d">
                  <img style={{height:"20px"}}  src={LinkedIn} alt={'linkedin'} />
                </a>
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
              <h2>Category</h2>
              <div className="line"></div>
              <ul>
                {categories  && categories.map((link, idx) => (
                  <li key={idx}>
                    <Link to={`/${link.slug}`} state={link._id}>{link.name}</Link>
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
                  <a style={{textDecoration:"none" , color:"#fff"}} href='tel:+917669015000'>+91 7669015000</a>
                </div>
                <div className="d-flex align-items-center">
                  <img src={Mail} alt="Email" />
                  <a style={{textDecoration:"none" , color:"#fff"}}  href='mailto:fansales@victora.co.in'>fansales@victora.co.in</a>
                </div>
              </div>
              <div className="subscribe">
                <h2>Newsletter</h2>
                <div className="d-flex">
                    <input type="email" className='form-control' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email..' />
                    <button type='submit' onClick={handleSubmit}>Subscribe</button>
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
