import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);

    useEffect(() => {
        fetch('./products.Json')
            .then(res => res.json())
            .then(data => {
                setDisplayProduct(data)
                setProducts(data)
            })
    }, []);

    const handleAddToCart = (product => {
        const newCart = [...cart, product];
        setCart(newCart);
    })

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText))
        setDisplayProduct(matchedProduct);
    }

    return (
        <div>
            <div className='search_container'>
                <input onChange={handleSearch} type="text" placeholder="search your product" />
            </div>
            <div className='shop_container'>
                <div className="product_container">
                    {
                        displayProduct.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart_container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;