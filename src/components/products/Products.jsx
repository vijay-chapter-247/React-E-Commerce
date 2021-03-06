import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Loading from '../loading/Loading';
import axios from 'axios';
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
            console.log('Something went wrong!', err)
        }
    }
    return (
        <>
            {
                loading ? <section className="services" >
                    <div className="services-heading mt-10">
                        <h2>Lorem ipsum dolor sit.</h2>
                    </div>
                    <div className="box-container" >
                        {
                            products.map((product) => {
                                const { id, image, price, category, title, } = product;
                                return (
                                    <div className="box position-relative-price" key={id} >
                                        <NavLink to={`/product/${id}`}>

                                            <img src={image} alt="Image_Not_Found"/>
                                            <span className="font-weight-bold position-absolute-price" >${price}</span>
                                        </NavLink>
                                        <NavLink to={`/product/${id}`}>
                                            <font>{category}</font>
                                        </NavLink>
                                        <p className="wrap-text-1 px-3">{title}</p>
                                        <NavLink to={`/product/${id}`} >
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