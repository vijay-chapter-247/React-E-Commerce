import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loading from '../loading/Loading';
import { NavLink } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import { useParams } from 'react-router-dom';
import './product.scss'

const Product = () => {
    const [product, setProduct] = useState([]);
    const [similarProduct, setSimilarProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [load, setLoad] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(data);
            setLoading(true);
            getSimilarProducts(data.category);
        } catch (err) {
            console.log('Something went wrong!', err)
        }
    }
    const getSimilarProducts = async (category) => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            setSimilarProduct(data);
            setLoad(true);
        } catch (err) {
            console.log("Something went wrong!", err)
        }
    }

    const selectedProduct = similarProduct.filter(pro => pro.id !== product.id);

    return (
        <>
            {
                loading ? <section className="services" >
                    <div className="app">
                        {
                            <div className="details" key={product.id}>
                                <div className="big-img">
                                    <img src={product.image} alt="Image_Not_Found" />
                                </div>

                                <div className="box-1 border">
                                    <div className="row">
                                        <h2 className="font-weight-bold">{product.category}</h2>
                                        <span className="font-weight-bold" >${product.price}</span>
                                    </div>

                                    <p className="font-weight-bold">{product.title}</p>
                                    <p className="text-justify wrap-text-6">{product.description}</p>

                                    <ReactStars
                                        count={5}
                                        size={32}
                                        activeColor="#4bae51"
                                        edit={false}
                                        value={product.rating['rate']}
                                        isHalf={true}
                                    />

                                    <button className="btn btn-success btn-outlined-success btn-full mt-5">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                </section> : <Loading />
            }

            {
                load ? <div className="box-container">
                    {
                        selectedProduct.map((product) => {
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

                                    <NavLink to={`/product/${product.id}`}>
                                        <button className="btn btn-success btn-outlined-success btn-full">
                                            View
                                        </button>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div> : <Loading />
            }
        </>
    )
}

export default Product;
