import React from 'react'
import NavBar from '../components/NavBar'
import AboutImg from '../assets/image/about.png'
import AboutImg2 from '../assets/image/about2.png'
import AboutImg3 from '../assets/image/about3.png'
import AboutImg4 from '../assets/image/about4.png'
import AboutImg5 from '../assets/image/about5.png'
import Footer from '../components/Footer'
import '../assets/css/about.css'
import ScrollAnimation from 'react-animate-on-scroll'
import arrow from '../assets/image/productDetails/arrow.png';


function About() {
    return (
        <div>
            <NavBar />
            <div className="container my-4">
                <div className="breadcrumb">
                    <p>Home</p>
                    <span>/</span><p>about</p>
                </div>
            </div>
            <div className="about">
                <div className='container'>
                    <div className="row about-victura">
                        <div className="col-md-6">
                            <div className="content-box">
                                <h1>About Victura Air Motion</h1>
                                <p>Victura, a 25-foot Wianno Senior sloop and JFK’s cherished boat, sailed despite several setbacks, including being struck by lightning and being caught in the middle of a fire.</p>

                                <p>Victura- Latin- ‘about to conquer'. It also means ‘to live’. But John F. Kennedy himself said that he meant to use the word in its other meaning, which is ‘to conquer’.</p>

                                <p> At Victùra Airmotion, we do more than design fans—we engineer possibility. We had a clear vision when we started on your journey to create the most powerful, energy-efficient fans. We wanted to give you the smartest and most innovative tech at reasonable prices. Born from exact making and big dreams, Victùra Airmotion is where skill and sustainability meet.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={AboutImg} alt="about" />
                            </div>
                        </div>
                    </div>

                    <div className="feature">
                        <ScrollAnimation animateIn="fadeInUp">
                            <h2>The Spark That Started It All</h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                            <p>Each big change starts with a "what if". Ours was: What if moving could be more than just parts? What if flight, air, and dynamic movement could feel easy, lasting, and deep? From then, Victùra Airmotion grew—not just as a firm, but as a cause.</p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                            <p>Made by expert builders, artists, and dreamers with years of shared experience and technical know-how, we aimed to make fans that exceed expectations in style, quality, and performance. With incredible pure copper motors that make our fans the most durable and long-lasting, we raise the standards of a fan’s air delivery.</p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="featureBox">
                                        <h3>Effortlessly Stylish</h3>
                                        <p>Crafted using premium materials like ABS with timber-like finish and sleek aluminium blades, each fan is made to look as good as it performs.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="featureBox">
                                        <h3>Made for Modern Living</h3>
                                        <p>With smart features like sleep mode, reverse rotation, boost mode, auto timer, and RF remote control, comfort is just a click away.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="featureBox">
                                        <h3>Future-Ready Comfort</h3>
                                        <p>Built to last. Designed to impress. Engineered to adapt — for homes that think ahead.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="row why-victura">
                        <div className="col-md-6">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="img-box">
                                    <img src={AboutImg2} alt="about" />
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-6">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="content-box">
                                    <h2>Why Victùra Airmotion?</h2>
                                    <ul className='list-unstyled'>
                                        <li> <img src={arrow} alt="icon" /> BLDC Technology – Ultra-efficient with up to 65% energy savings</li>
                                        <li> <img src={arrow} alt="icon" /> High Performance – Powerful airflow with minimal noise</li>
                                        <li> <img src={arrow} alt="icon" /> Elegant Design – Sleek, modern finishes that elevate any space</li>
                                        <li> <img src={arrow} alt="icon" /> Smart Features – Sleep mode, timer, reverse rotation, RF remote</li>
                                        <li> <img src={arrow} alt="icon" /> Eco-Friendly – Solar-powered manufacturing, plastic-free packaging</li>
                                    </ul>
                                    <p>Victùra Airmotion is where sustainability meets style, and comfort meets innovation.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                    </div>

                </div>
                <div className="container highlight">
                    <ScrollAnimation animateIn="fadeInUp">
                        <h2>What We Stand For at Victùra Airmotion</h2>
                    </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                    <div className="row">
                            <div className="col-lg-4">
                                <div className="card-box">
                                    <img src={AboutImg3} alt="No Compromises in Innovation" />
                                    <div className="dataContent">
                                        <h3>No Compromises in Innovation</h3>
                                        <p>With heart and soul, we create each design. Our goods mix top science with ageless style</p>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="col-lg-4">
                                <div className="card-box">
                                    <img src={AboutImg4} alt="No Compromises in Innovation" />
                                    <div className="dataContent">
                                        <h3>No Compromises in Innovation</h3>
                                        <p>With heart and soul, we create each design. Our goods mix top science with ageless style</p>
                                    </div>
                                </div>
                            </div>
               
                            <div className="col-lg-4">
                                <div className="card-box">
                                    <img src={AboutImg5} alt="No Compromises in Innovation" />
                                    <div className="dataContent">
                                        <h3>No Compromises in Innovation</h3>
                                        <p>With heart and soul, we create each design. Our goods mix top science with ageless style</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                        </ScrollAnimation>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About