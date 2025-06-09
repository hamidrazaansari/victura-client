import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../assets/image/banner-main.png'
import Category from '../components/Category'
import ChoosingRightFan from '../components/ChoosingRightFan'
import Feature from '../components/Feature'
import ProductBox from '../components/ProductBox'
import BestSellingProducts from '../components/BestSellingProducts'
import BannerForMiddle from '../assets/image/second-banner.png'
import BlogSection from '../components/BlogSection'
import CompanyInfo from '../components/CompanyInfo'
import BannerVideo from '../assets/image/website.mp4'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import '../assets/css/info.css'
import ScrollAnimation from 'react-animate-on-scroll';
import MainBannerVideo from '../assets/image/banner.mp4'


function Landing() {
  return (
    <div>
      <NavBar />
      <section className='banner' style={{ position: "relative", top: "-6px" }}>
        <img src={Banner} alt="banner victura" className='img-fluid w-100' />
        {/* <video src={MainBannerVideo} autoPlay  className='w-100' style={{height:"650px" , objectFit:"cover"}} ></video> */}
      </section>
      <Category />
      <ChoosingRightFan />
      <Feature />
      <BestSellingProducts  heading={'Best Selling Products'}/>
      <div className="container" style={{marginBottom:"40px"}}>
        <ScrollAnimation animateIn="fadeInUp">
        <img src={BannerForMiddle} className='img-fluid' alt="second banner" />
        </ScrollAnimation>
      </div>
      <BlogSection />
      <CompanyInfo />
      <div className="container py-5">
        <ScrollAnimation animateIn="fadeInUp">
        <div className="video-wrapper">
          <video
            src={BannerVideo}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div> 
        </ScrollAnimation>   
       </div>
      <ContactUs />
      <Footer />

    </div>
  )
}

export default Landing