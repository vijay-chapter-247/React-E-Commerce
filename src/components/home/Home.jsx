import React from 'react'
import './home.scss'

const Home = () => {
    return (
        <>
            <div className="home-content mt-n15">
                <div className="home-text">
                    <h1>Lorem ipsum</h1>
                    <p className="mt-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt modi placeat illo aut. Ad expedita error, incidunt voluptate deleniti fuga eos at quibusdam quidem illum provident delectus nam! Perspiciatis.</p>
                    <div>
                        <button className="btn btn-success btn-outlined-success mt-5"> View </button>
                    </div>
                </div>
                <div className="home-img animated">
                    <img src="/bg.png" alt="Image_Not_Found" />
                </div>
            </div>

            <div className="home-content mt-n20">
                <div className="home-img animated order-md-2">
                    <img src="/bg.png" alt="Image_Not_Found" />
                </div>
                <div className="home-text mt-md-100 order-md-1">
                    <h1>Lorem ipsum</h1>
                    <p className="mt-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt modi placeat illo aut. Ad expedita error, incidunt voluptate deleniti fuga eos at quibusdam quidem illum provident delectus nam! Perspiciatis.</p>
                    <div>
                        <button className="btn btn-success btn-outlined-success mt-5"> View </button>
                    </div>
                </div>
            </div>

            <div className="home-content mb-25">
                <div className="home-text">
                    <h1>Lorem ipsum</h1>
                    <p className="mt-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt modi placeat illo aut. Ad expedita error, incidunt voluptate deleniti fuga eos at quibusdam quidem illum provident delectus nam! Perspiciatis.</p>
                    <div>
                        <button className="btn btn-success btn-outlined-success mt-5"> View </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;