import React, { useState } from 'react'
import ProductListingBanner from '../assets/image/productLitingBanner.png'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import '../assets/css/productListing.css'
import ProductBox from '../components/ProductBox';
import SortImg from '../assets/image/Sort.png'
import { Accordion } from 'react-bootstrap';
import PriceSlider from '../components/PriceSlider';

function ProductListing() {
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false);

    const [selectedSort, setSelectedSort] = useState('');

    const handleSortChange = (value) => {
        setSelectedSort(value);
        onSortChange && onSortChange(value);
    };


    const handleMouseEnter = () => setShow(true);
    const handleMouseLeave = () => setShow(false);
    return (
        <>
            <NavBar />
            <div className='ProductListing'>
                <div className="banner">
                    <img src={ProductListingBanner} className='img-fluid' alt="product listing" />
                </div>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center my-3">
                        <div className="breadcrumb">
                            <p>Home</p><span>/</span><p>BLDC Ceiling Fan</p>
                        </div>
                        <div className="sorting">
                            <Dropdown>
                                <Dropdown.Toggle variant="transparent" className="sortBtn mb-0" id="dropdown-basic">
                                    <img src={SortImg} alt="sort" /> Sort By
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as="button" onClick={() => handleSortChange('high')}>
                                        <div className="sortingOption">
                                            <input
                                                type="radio"
                                                id="high"
                                                name="sort"
                                                checked={selectedSort === 'high'}
                                                onChange={() => handleSortChange('high')}
                                                className="custom-radio"
                                            />
                                            <label htmlFor="high" className="custom-radio-label">
                                                <span className="custom-radio-btn"></span>
                                                Price: High To Low
                                            </label>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={() => handleSortChange('low')}>
                                        <div className="sortingOption">
                                            <input
                                                type="radio"
                                                id="low"
                                                name="sort"
                                                checked={selectedSort === 'low'}
                                                onChange={() => handleSortChange('low')}
                                                className="custom-radio"
                                            />
                                            <label htmlFor="low" className="custom-radio-label">
                                                <span className="custom-radio-btn"></span>
                                                Price: Low To High
                                            </label>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={() => handleSortChange('Arrivals')}>
                                            <div className="sortingOption">
                                            <input
                                                type="radio"
                                                id="Arrivals"
                                                name="sort"
                                                checked={selectedSort === 'Arrivals'}
                                                onChange={() => handleSortChange('Arrivals')}
                                                className="custom-radio"
                                            />
                                            <label htmlFor="Arrivals" className="custom-radio-label">
                                                <span className="custom-radio-btn"></span>
                                                New Arrivals
                                            </label>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 p-0 ">
                            <div className="sidebar">
                                <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Category</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-unstyled ms-2">
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            BLDC Ceiling Fan
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                                        <label class="form-check-label" for="flexCheckDefault1">
                                                            Induction Selling Fan
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                                        <label class="form-check-label" for="flexCheckDefault2">
                                                            TPW Fan
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                        <label class="form-check-label" for="flexCheckDefault3">
                                                            Ventilator Fan
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                                        <label class="form-check-label" for="flexCheckDefault4">
                                                            Exhaust Fan
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Color</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-unstyled ms-2">
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                                                        <label class="form-check-label" for="flexCheckDefault5">
                                                            Black
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
                                                        <label class="form-check-label" for="flexCheckDefault6">
                                                            Brown
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
                                                        <label class="form-check-label" for="flexCheckDefault7">
                                                            Grey
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Features</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-unstyled ms-2">
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault20" />
                                                        <label class="form-check-label" for="flexCheckDefault20">
                                                            WiFi Operated
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
                                                        <label class="form-check-label" for="flexCheckDefault6">
                                                            Alexa/Voice Operated
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
                                                        <label class="form-check-label" for="flexCheckDefault7">
                                                            Remote Operated
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
                                                        <label class="form-check-label" for="flexCheckDefault7">
                                                            Regulator Operated
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" >
                                        <Accordion.Header>Sweep size</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-unstyled ms-2">
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />
                                                        <label class="form-check-label" for="flexCheckDefault8">
                                                            600mm
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />
                                                        <label class="form-check-label" for="flexCheckDefault9">
                                                            900mm
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />
                                                        <label class="form-check-label" for="flexCheckDefault10">
                                                            1200mm
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className='filterOption'>
                                                    <div class="form-check ps-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                                        <label class="form-check-label" for="flexCheckDefault11">
                                                            1400mm
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <PriceSlider />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <Link to={'/product-details'}>
                                            <ProductBox />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>                                </div>
                                <div className="col-lg-4">
                                    <div className="listingProducts">
                                        <ProductBox />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>

    )
}

export default ProductListing