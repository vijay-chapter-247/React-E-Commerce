import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Loading from '../loading/Loading';

import './products.scss'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products');
            setProducts(data);
            setLoading(true);
        } catch (err) {
            console.log('Something went wrong!')
        }
    }
    return (
        <>
            {
                loading ? <section className="services" >
                    <div className="services-heading">
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p className="control-line-height">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quod modi inventore dolorem ipsa sed repudiandae quia numquam nostrum molestiae?</p>
                    </div>
                    <div className="box-container" >
                        {
                            products.map((product) => {
                                return (
                                    <div className="box position-relative-price" key={product.id} >
                                            <NavLink to={`/product/${product.id}`}>
                                                    <img src={product.image} alt="Image_Not_Found" />
                                                    <span className="font-weight-bold position-absolute-price" >${product.price}</span>
                                            </NavLink>

                                        <NavLink to={`/product/${product.id}`}>
                                            <font>{product.category}</font>
                                        </NavLink>

                                        <p className="wrap-text-1 px-3">{product.title}</p>

                                        <NavLink to={`/product/${product.id}`} >
                                            <button className="btn btn-success btn-outlined-success btn-full">
                                                View
                                            </button>
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section> : <Loading />
            }
        </>
    )
}

export default Products;