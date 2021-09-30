import React from 'react';
import { NavLink } from 'react-router-dom';
import './error.scss';

const Error = () => {
    return (
        <>
            <div className="err">
                <h1 className="animated">404 Page Not Found</h1>
                <NavLink to="/">
                    <button className="btn btn-success btn-outlined-success mt-5">Go To Home</button>
                </NavLink>
            </div>
        </>
    )
}

export default Error;