import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import fakeData from '../../fakeData';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const first10 = fakeData.slice(0, 10);
        setProducts(first10);
    }, [])
    const [cart, setCart] = useState([]);

    const handleAddBtnEventListener = product =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop">
            <div className="products">
                {
                    products.map(product => <Products product={product} handleAddBtnEventListener={handleAddBtnEventListener} showAddtoCart={true} key={product.key}></Products>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;