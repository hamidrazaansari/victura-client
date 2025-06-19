import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../assets/css/dealer.css'
import UserForm from '../components/UserForm'
import Fectory from '../assets/image/fectory.png'

function BecomeADealer() {
    return (
        <div className='becomeadealer'>
            <NavBar />
            <div className="banneerSection">
                <h1>become a dealer</h1>
            </div>

            <div className="container my-4">
                <div className="breadcrumb">
                    <p>Home</p><span>/</span><p>Become a Dealer</p>
                </div>
            </div>
            <div className="container info">
                <h2>Grow with the global leader</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <h3 className='mt-5'>Partner with one of the leading fan manufacturers in the world</h3>
                <h3>What you need?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit .</p>
            </div>

            <UserForm />

            <div className='factory'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={Fectory} alt="fectory image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <h3>PARTNER WITH ONE OF THE LEADING FAN MANUFACTURERS IN THE WORLD</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BecomeADealer