import React, { useState, useEffect } from 'react'
import ProductListingBanner from '../assets/image/productLitingBanner.png'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Dropdown from 'react-bootstrap/Dropdown';
import '../assets/css/productListing.css'
import ProductBox from '../components/ProductBox';
import SortImg from '../assets/image/Sort.png'
import axios from 'axios'
import { BaseUrl, FileUrl } from '../utills/BaseUrl'
import ProductSidebar from '../components/ProductSidebar';
import { useLocation } from 'react-router-dom';

function ProductListing() {
    const [show, setShow] = useState(false);

    const [selectedSort, setSelectedSort] = useState('');

    const [products, setProducts] = useState([]);

    const location = useLocation()
    const categoryId = location.state;
    console.log(categoryId);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = !categoryId ?  await axios.get(`${BaseUrl}/products`) : await axios.get(`${BaseUrl}/products?category=${categoryId}`) ;

                setProducts(response.data?.body);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchData();
    }, [categoryId]);


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
                            <ProductSidebar/>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                    {products && products.map((product , index) => {
                                        return (
                                            <div className="col-lg-4">
                                                <div className="listingProducts" key={index}>
                                                        <ProductBox product={product} />
                                                </div>
                                            </div>
                                        )
                                    })}
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