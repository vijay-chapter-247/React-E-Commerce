import React from 'react'
import './footer.scss'
import ScrollButton from '../scroll-button/ScrollButton';

const Footer = () => {
    return (
        <>
            <footer className="mt-10">
                <div className="footer">
                    <a href="/">Lorem ipsum dolor sit amet.</a>
                    <ScrollButton />
                </div>
            </footer>
        </>
    )
}

export default Footer;