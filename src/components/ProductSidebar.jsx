import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { Accordion } from 'react-bootstrap';
import PriceSlider from '../components/PriceSlider';
import axios from 'axios';
import { BaseUrl } from '../utills/BaseUrl';
function ProductSidebar() {
    const [color, setColor] = useState('')
    const [category, setCategory] = useState('')
    const [sizes, setSizes] = useState('')
    const [features, setFeatures] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/colors`);
                setColor(response.data?.body);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/categories`);
                setCategory(response.data?.body);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/sizes`);
                setSizes(response.data?.body);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/features`);
                setFeatures(response.data?.body);
            } catch (error) {
                console.error('Failed to fetch Features:', error);
            }
        };
        fetchData()

    }, []);

    return (
        <div>
            <div className="sidebar">
                <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Category</Accordion.Header>
                        <Accordion.Body>
                            <ul className="list-unstyled ms-2">
                                {
                                    category && category.map((cat, idx) => {
                                        return (
                                            <li className='filterOption' key={cat._id}>
                                                <div class="form-check ps-0">
                                                    <input class="form-check-input" type="checkbox" value="" id={`flexCheckDefault${idx + 1}`} />
                                                    <label class="form-check-label" for={`flexCheckDefault${idx + 1}`}>
                                                        {cat?.name}
                                                    </label>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Color</Accordion.Header>
                        <Accordion.Body>
                            <ul className="list-unstyled ms-2">
                                {
                                    color && color.map((color, idx) => {
                                        return (
                                            <li className='filterOption' key={color._id}>
                                                <div class="form-check ps-0" >
                                                    <input class="form-check-input" type="checkbox" value="" id={`colorCheckbox${idx + 1}`} />
                                                    <label class="form-check-label" for={`colorCheckbox${idx + 1}`} style={{ position: 'relative' }}>
                                                        {color?.name}
                                                        <span
                                                            className="colorTag"
                                                            style={{
                                                                background: !color.anotherCode
                                                                    ? color.code
                                                                    : `linear-gradient(0deg, ${color.anotherCode} 50%, ${color.code} 50%)`,
                                                            }}
                                                        ></span>

                                                    </label>

                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Features</Accordion.Header>
                        <Accordion.Body>
                            <ul className="list-unstyled ms-2">
                                {
                                    features && features.map((feature, idx) => {
                                        return (
                                            <li className='filterOption' key={feature._id}>
                                                <div class="form-check ps-0">
                                                    <input class="form-check-input" type="checkbox" value="" id={`featuresCheckbox${idx + 1}`} />
                                                    <label class="form-check-label" for={`featuresCheckbox${idx + 1}`}>
                                                        {feature?.name}
                                                    </label>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" >
                        <Accordion.Header>Sweep size</Accordion.Header>
                        <Accordion.Body>
                            <ul className="list-unstyled ms-2">
                                {
                                    sizes && sizes.map((size, idx) => {
                                        return (
                                            <li className='filterOption' key={size._id}>
                                                <div class="form-check ps-0" >
                                                    <input class="form-check-input" type="checkbox" value="" id={`sizesCheckDefault${idx + 1}`} />
                                                    <label class="form-check-label" for={`sizesCheckDefault${idx + 1}`} >
                                                        {size?.title}
                                                    </label>

                                                </div>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <PriceSlider />
            </div>
        </div>
    )
}

export default ProductSidebar