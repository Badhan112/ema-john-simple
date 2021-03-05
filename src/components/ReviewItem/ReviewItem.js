import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, price, seller, quantity} = props.product;
    
    return (
        <div className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>${price}</p>
            <p>by: {seller}</p>
            <p>Quantity: {quantity}</p>
            <button className="add-cart-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;