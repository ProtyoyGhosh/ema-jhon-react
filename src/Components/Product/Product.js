import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product_body'>
            <img src={img} alt="" />
            <div className='product_details'>
                <h5 style={{ color: 'blue' }}>Name: {name}</h5>
                <p>Price: ${price}</p>
                <p><small>by {seller}</small></p>
                <p><small>Only {stock} items left.order soon.</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className='regular_btn'>{element} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;