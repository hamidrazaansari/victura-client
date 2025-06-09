import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { BaseUrl, FileUrl } from '../utills/BaseUrl';

function HoverDropdown({ handleNavClose }) {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [catActiveImage, setActiveCatImage] = useState(categories[1]?.image);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeSlug, setActiveSlug] = useState('bldc-ceiling-fan');

  // Fetch categories
  useEffect(() => {
    axios.get(`${BaseUrl}/categories`)
      .then((res) => {
        const catData = res.data?.body || [];
        setCategories(catData);

        // Default to BLDC category if exists
        const bldcCategory = catData.find(cat => cat.slug === 'bldc-ceiling-fan');
        if (bldcCategory) {
          setActiveCatImage(bldcCategory.image);
        }
      })
      .catch((err) => console.error("Categories fetch failed", err));
  }, []);

  // Fetch products
  useEffect(() => {
    axios.get(`${BaseUrl}/products`)
      .then((res) => {
        const allProducts = res.data?.body || [];
        setProducts(allProducts);

        // Default filter for bldc category
        const defaultFiltered = allProducts.filter(p => p?.category?.slug === 'bldc-ceiling-fan');
        setFilteredProducts(defaultFiltered);
      })
      .catch((err) => console.error("Products fetch failed", err));
  }, []);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  const handleHover = (slug, categoryImage) => {
    setActiveCatImage(categoryImage);
    setActiveSlug(slug)
    const filtered = products.filter(p => p?.category?.slug === slug);
    setFilteredProducts(filtered);
  };

  console.log(activeSlug);

  return (
    <>
      {/* Mobile dropdown */}
      <div className='d-lg-none d-block ms-2'>
        {categories.map((cat, idx) => (
          <Dropdown.Item
            key={idx}
            onMouseEnter={() => handleHover(cat?.slug, cat?.image)}
          >
            <Link to='/product' state={cat._id}
                        style={{ backgroundColor: activeSlug === cat?.slug ? '#fff !important' : 'transparent' }}
            >
              <span>{cat.name}</span> <IoIosArrowForward />
            </Link>
          </Dropdown.Item>
        ))}
      </div>

      {/* Desktop dropdown */}
      <Dropdown
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        show={show}
        className='navDropdown d-lg-flex d-none'
      >
        <Dropdown.Toggle id="dropdown-basic" style={{ height: "87px" }} className='bg-transparent border-0 text-dark'>
          Products <IoIosArrowDown />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="container">
            <div className="row">
              {/* Category List */}
              <div className="col-3">
                {categories.map((cat, idx) => (
                  <Dropdown.Item key={idx} onMouseEnter={() => handleHover(cat?.slug, cat?.image)}>
                    <Link to='/product' state={cat._id}>
                      <span>{cat.name}</span> <IoIosArrowForward />
                    </Link>
                  </Dropdown.Item>
                ))}
              </div>

              {/* Category Image */}
              <div className="col-3">
                <div className="fan-box">
                  <img src={`${FileUrl}/${catActiveImage}`} alt="fan" className="img-fluid" />
                </div>
              </div>

              {/* Filtered Products */}
              <div className="col-6">
                <div className="row">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((fan, index) => (
                      <div className="col-6" key={index}>
                        <Link style={{textDecoration:"none"}} to={`/product/${fan?.slug}`} state={fan._id}>
                        <div className="fan">
                          <h3>{fan.name}</h3>
                          <p>Explore ({fan?.variants?.length || 0} Variants)</p>
                        </div>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div className="col-12">
                      <p>No products available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default HoverDropdown;
