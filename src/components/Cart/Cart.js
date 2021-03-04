import React from 'react';

const Cart = (props) => {
    let price = props.cart.reduce((total, product) => total + product.price, 0);
    let shippingCost = props.cart.reduce((total, product) => total + product.shipping, 0);
    let tax = (price + shippingCost) / 10;
    price = Number(price.toFixed(2));
    shippingCost = Number(shippingCost.toFixed(2));
    tax = Number(tax.toFixed(2));
    let total = price + shippingCost +tax;
    total = Number(total.toFixed(2));

    return (
        <div>
            <h1>Order Summery</h1>
            <h4>Items Ordered: {props.cart.length}</h4>
            <p>Products Price: {price}</p>
            <p>Shipping Cost: {shippingCost}</p>
            <p>Tax & VAT: {tax}</p>
            <h3>Order Total: {total}</h3>
        </div>
    );
};

export default Cart;