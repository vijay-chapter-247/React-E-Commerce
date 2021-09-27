import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loading from '../loading/Loading';
import './product.scss'
import { useParams } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(data);
            setLoading(true);
        } catch (err) {
            console.log('Something went wrong!')
        }
    }
    console.log(product);
    return (
        <>
            {
                loading ? <section className="services" >
                    <div className="app">
                        {
                            <div className="details" key={product.id}>
                                <div className="big-img">
                                    <img src={product.image} alt="" />
                                </div>

                                <div className="box-1 border">
                                    <div className="row">
                                        <h2 className="font-weight-bold">{product.category}</h2>
                                        <span className="font-weight-bold" >${product.price}</span>
                                    </div>

                                    <p className="font-weight-bold">{product.title}</p>

                                    <p className="text-justify">{product.description}</p>

                                    <button className="btn btn-success btn-outlined-success btn-full mt-5">
                                        Buy Now
                                    </button>

                                </div>
                            </div>
                        }
                    </div>
                </section> : <Loading />
            }
        </>
    )
}

export default Product;
