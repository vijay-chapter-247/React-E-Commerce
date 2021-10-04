import React, { useState } from 'react'
import { useHistory } from 'react-router';
import './add.scss';

const Add = () => {
    const history = useHistory();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        category: "",
        description: "",
        url: ""
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setProduct((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        });
    }
    const SubmitEvent = (event) => {
        event.preventDefault();
        alert(`Title -> ${product.title} Price -> ${product.price} Category -> ${product.category} Description -> ${product.description} Image -> ${product.url}`);

        setProduct({
            title: "",
            price: "",
            category: "",
            description: "",
            url: ""
        })
    }

    const { title, price, description, category, url } = product;
    return (
        <>
            {
                localStorage.getItem('loginUser') ? <main className="main mt-10">
                    <div className="container">
                        <div className="wrapper p-relative">
                            <div className="heading">
                                <div className="bg-white-radius">
                                    <h1 className="text text-success text-large text-center">New Product</h1>
                                </div>
                            </div>
                            <form onSubmit={SubmitEvent} className="form">
                                <div className="input-control">
                                    <input type="text" name="title" className="input-field" placeholder="Enter Title" required value={title} onChange={InputEvent} />
                                </div>
                                <div className="input-control">
                                    <input type="number" name="price" className="input-field" placeholder="Enter Price" required value={price} onChange={InputEvent} />
                                </div>
                                <div className="input-control">
                                    <input type="text" name="description" className="input-field" placeholder="Enter Description" required value={description} onChange={InputEvent} />
                                </div>
                                <div className="input-control">
                                    <input type="text" name="category" className="input-field" placeholder="Enter Category" required value={category} onChange={InputEvent} />
                                </div>
                                <div className="input-control">
                                    <input type="text" name="url" className="input-field" placeholder="Enter Image Url" required value={url} onChange={InputEvent} />
                                </div>
                                <div className="input-control">
                                    <button className="btn btn-success btn-outlined-success btn-full btn-rounded">Submit</button>
                                </div>
                            </form>

                            <div className="striped">
                                <span className="striped-line"></span>
                                <span className="striped-text">Or</span>
                                <span className="striped-line"></span>
                            </div>

                            <div className="d-flex">
                                <button className="btn btn-success btn-outlined-success btn-rounded">Add with Google</button>
                                <button className="btn btn-success btn-outlined-success btn-rounded">Add with Facebook</button>
                                <button className="btn btn-success btn-outlined-success btn-rounded">Add with Apple</button>
                            </div>
                        </div>
                    </div>
                </main >

                    : history.push('login')
            }

        </>
    )
}

export default Add;





