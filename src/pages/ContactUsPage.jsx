import React , {useState} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Watsapp from '../assets/image/socalMedia/whatsApp.png'
import tel from '../assets/image/socalMedia/telephone.png'
import Email from '../assets/image/socalMedia/email.png'
import Register from '../assets/image/socalMedia/Register.png'
import '../assets/css/contact.css'
import ContactUsbg from '../assets/image/contactUsBg.png'


function ContactUsPage() {

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
        <div>
            <NavBar />
            <div className="banner">
                <img src={ContactUsbg} alt="contact us background" className='img-fluid' />
            </div>
            <div className="container my-4">
                <div className="breadcrumb">
                    <p>Home</p><span>/</span><p>Contact</p>
                </div>
            </div>
            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="information">
                                <img src={Watsapp} alt="Watsapp" />
                                <h3>WhatsApp Support</h3>
                                <a href="tel:+91 7669015000">+91 7669015000</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="information">
                                <img src={tel} alt="telephone" />
                                <h3>Customer Care No.</h3>
                                <a href="tel:+91 7669015000">+91 7669015000</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="information">
                                <img src={Email} alt="Watsapp" />
                                <h3>Email Support</h3>
                                <a href="mailto:fansales@victora.co.in">fansales@victora.co.in</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="information">
                                <img src={Register} alt="Watsapp" />
                                <h3>Grievance / Escalation</h3>
                                <a href="tel:+91 7669015000">fansales@victora.co.in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <div className="container">
                    <h2>Have a query about our services?</h2>
                    <div className="contact-form-box">
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
                                <textarea  className='form-control' placeholder='Message'  rows={4} />
                            </div>
                            <button type='submit' className='submit-btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUsPage