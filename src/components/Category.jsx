import React, { useEffect, useState } from 'react'
import '../assets/css/category.css'
import bldc from '../assets/image/category/bldc.png'
import exhoust from '../assets/image/category/exhoust.png'
import induction from '../assets/image/category/induction.png'
import table from '../assets/image/category/table.png'
import ventilation from '../assets/image/category/ventilation.png'
import ScrollAnimation from 'react-animate-on-scroll'
import axios from 'axios'
import { BaseUrl , FileUrl } from '../utills/BaseUrl'
import { Link } from 'react-router-dom'


function Category() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/categories`);
                setCategories(response.data?.body);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchData();
    }, []);

      if (!categories || categories.length < 2) return null;

      const featuredCategory = categories[1];

  const otherCategories = categories.filter((_, index) => index !== 1);


    return (
        <div className='category' style={{ position: "relative", top: "-6px" }}>
            <div className="container">
                <ScrollAnimation animateIn="fadeInUp">
                    <h2 className='heading'><span></span> Explore Our Products <span></span> </h2>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp">
                    <div className="row">
                        {/* Left Column - Featured Category */}
                        <div className="col-lg-5 p-0">
                            <div className="image-box-long">
                                <img src={`${FileUrl}/${featuredCategory?.image}`} alt={featuredCategory.slug} />
                                <h3>{featuredCategory?.name?.slice(0 , 4)}</h3>
                                <Link className="fan-btn text-center" style={{textDecoration:"none"}}  to={`/product`} state={featuredCategory._id}>Ceiling Fan</Link>
                            </div>
                        </div>

                        {/* Right Column - Other Categories */}
                        <div className="col-lg-7 p-0">
                            <div className="d-flex flex-row flex-wrap">
                                {otherCategories.map((category) => (
                                    <div className="image-box" key={category._id}>
                                        <img src={`${FileUrl}/${category.image}`} alt={category.slug} />
                                        <Link className="fan-btn text-center " style={{textDecoration:"none"}} to={`/product`} state={category._id}>{category.name}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

            </div>
        </div>
    )
}

export default Category