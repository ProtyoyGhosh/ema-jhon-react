import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.15;
    const subTotal = total + tax + shipping;
    return (
        <div>
            <h5>Orders </h5>
            <p><small>Items Ordered: {props.cart.length}</small></p>
            <p><small>Total Price: {total.toFixed(2)}</small></p>
            <p><small>Shipping Charge: {shipping}</small></p>
            <p><small>Tax: {tax.toFixed(2)}</small></p>
            <p><small style={{ color: 'red', fontWeight: '600' }}>Sub Total: {subTotal.toFixed(2)}</small></p>
        </div>
    );
};

export default Cart;