import React from 'react'
import './header.scss'
import { NavLink, useHistory } from 'react-router-dom'

const Header = (props) => {
    const history = useHistory();
    const Logout = () => {
        localStorage.clear();
        history.push('/');
        props.Toggle();
    }

    // console.log(props.toggle);

    return (
        <>
            <section className="main">
                <nav>
                    <NavLink to="/" className="logo">
                        <img src="/logo.jpg" alt="Image_Not_Found" />
                    </NavLink>

                    <input className="menu-btn" type="checkbox" id="menu-btn" />

                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="nav-icon"></span>
                    </label>

                    <ul className="menu">
                        <li>
                            <NavLink to="/">
                                <button className="btn btn-success btn-outlined-success mx-2">
                                    Home
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">
                                <button className="btn btn-success btn-outlined-success mx-2">
                                    Products
                                </button>
                            </NavLink>
                        </li>
                        {
                            localStorage.getItem('loginUser') ? <li>
                                <NavLink to="/profile">
                                    <button className="btn btn-success btn-outlined-success mx-2">
                                        Profile
                                    </button>
                                </NavLink>
                            </li> : null
                        }
                        {
                            localStorage.getItem('loginUser') ? <li>
                                <NavLink to="/add">
                                    <button className="btn btn-success btn-outlined-success mx-2">
                                        Add Product
                                    </button>
                                </NavLink>
                            </li> : null
                        }

                        {
                           !localStorage.getItem('loginUser') ? <li>
                                <NavLink to="/login">
                                    <button className="btn btn-success btn-outlined-success mx-2">
                                        Login
                                    </button>
                                </NavLink>
                            </li> : <li>
                                <button className="btn btn-success btn-outlined-success mx-2" onClick={Logout}>
                                    Logout
                                </button>
                            </li>

                        }

                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Header;