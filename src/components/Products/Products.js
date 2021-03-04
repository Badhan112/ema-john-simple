import React from 'react';
import './Products.css';

const Products = (props) => {
    const {name, img, seller, price, stock}  =  props.product;
    return (
        <div className="product-details">
            <img src={img} alt=""/>
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className="add-cart-btn" onClick={() => props.handleAddBtnEventListener(props.product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;