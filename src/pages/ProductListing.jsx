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
    const [loading, setLoading] = useState(false)
    const [selectedSort, setSelectedSort] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    const [products, setProducts] = useState([]);

    const location = useLocation()
    const categoryId = location.state;
    console.log(categoryId);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${BaseUrl}/products?category=${categoryId}`);
                setProducts(response.data?.body || []);
                setLoading(false)
            } catch (error) {
                console.error('Failed to fetch products:', error);
                setProducts([]); // Optional fallback
            } finally {
                setLoading(false);
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


    // pagination

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        setCurrentPage(1); // Reset to first page on category change
    }, [categoryId]);

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
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="col-lg-3 p-0 pe-3 ">
                            <ProductSidebar />
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                {loading ? (
                                    <div className="col-12 text-center py-5">
                                        <h4>Loading...</h4>
                                    </div>
                                ) : products.length > 0 ? (
                                    currentProducts.map((product, index) => (
                                        <div className="col-lg-4 p-0" key={index}>
                                            <div className="listingProducts">
                                                <ProductBox product={product} />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12 text-center py-5">
                                        <h4>No products available for this category.</h4>
                                    </div>
                                )}
                            </div>

                            {totalPages > 1 && (
                                <div className="pagination d-flex justify-content-center align-items-center mt-4 gap-2">
                                    {/* Previous Button */}
                                    <button
                                        className="page-btn"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        style={{
                                            padding: '6px 12px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px',
                                            backgroundColor: '#fff',
                                            color: '#000',
                                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                            opacity: currentPage === 1 ? 0.5 : 1,
                                        }}
                                    >
                                        Previous
                                    </button>

                                    {/* Page Numbers */}
                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index}
                                            className={`page-btn mx-1 ${currentPage === index + 1 ? 'active' : ''}`}
                                            onClick={() => handlePageChange(index + 1)}
                                            style={{
                                                padding: '6px 12px',
                                                border: '1px solid #ccc',
                                                borderRadius: '4px',
                                                backgroundColor: currentPage === index + 1 ? '#3E496A' : '#fff',
                                                color: currentPage === index + 1 ? '#fff' : '#000',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}

                                    {/* Next Button */}
                                    <button
                                        className="page-btn"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        style={{
                                            padding: '6px 12px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px',
                                            backgroundColor: '#fff',
                                            color: '#000',
                                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                            opacity: currentPage === totalPages ? 0.5 : 1,
                                        }}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>

    )
}

export default ProductListing