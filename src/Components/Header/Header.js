import React from 'react';
import img from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header_img'>
                <img src={img} alt="" />
            </div>
            <div className='header_body'>
                <div className='navbar'>
                    <a href="./shop">Shop</a>
                    <a href="./order">Order Review</a>
                    <a href="./inventory">Manage Invetory</a>
                </div>
            </div>
        </div>
    );
};

export default Header;