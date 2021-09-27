import React from 'react';
import './loading.scss'

const Error = () => {
    return (
        <>
            <div className="err">
                <span className="spinner">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
        </>
    )
}

export default Error;