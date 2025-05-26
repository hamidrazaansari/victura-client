import React, { useState } from 'react'
import '../assets/css/contact.css'
import ScrollAnimation from 'react-animate-on-scroll';

function ContactUs() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');


    const handleChange = (e) => {
        const input = e.target.value;
        // Allow only letters and spaces
        const filtered = input.replace(/[^a-zA-Z\s]/g, '');
        setName(filtered);
    };
    const handleNumChange = (e) => {
        const input = e.target.value;
        // Remove anything that's not a digit
        const numericValue = input.replace(/\D/g, '');
        setMobile(numericValue);
    }
    return (
        <div className='contactUs'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-content">
                            <ScrollAnimation animateIn="fadeInUp">
                                <h2>Looking to do <br /> Business with us?</h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-box">
                            <ScrollAnimation animateIn="fadeInUp">
                                <h2>Get In Touch</h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp">
                                <p>Have a query about our services?</p>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp">
                                <form action="">
                                    <div className="input-box">
                                        <input type="text" className='form-control' placeholder='Name' value={name} onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <input type="email" className='form-control' placeholder='Email*' />
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className='form-control' placeholder='Mobile Number*' value={mobile} onChange={handleNumChange} />
                                    </div>
                                    <div className="input-box">
                                        <textarea placeholder='Message' className='form-control' rows={3} />
                                    </div>
                                    <div className="my-3">
                                        <div class="form-check ps-0">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                            <label class="form-check-label" for="flexCheckDefault3">
                                                By clicking here, I state that I have read and agree to the Terms and Conditions.
                                            </label>
                                        </div>
                                    </div>
                                    <button type='submit' className='submit-btn'>Submit</button>
                                </form>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs