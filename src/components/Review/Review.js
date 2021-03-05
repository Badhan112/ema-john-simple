import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productsKeys = Object.keys(savedCart);
        // const counts = Object.values(savedCart);

        const products = productsKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(products);
    },[]);

    return (
        <div>
            {
                cart.map(product => <ReviewItem product={product} key={product.key}></ReviewItem>)
            }
        </div>
    );
};

export default Review;