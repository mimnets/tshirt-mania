import React from 'react';

const Cart = ({cart}) => {

    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Order quantity: {cart.length}</h2>
        </div>
    );
};

export default Cart;