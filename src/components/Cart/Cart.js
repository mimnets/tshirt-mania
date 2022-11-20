import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {

    return (
        <div>
            <h1>Order Summary</h1>
            {
            cart.map(tshirt => <p>
                {tshirt.name}
                <button onClick={()=> handleRemoveItem(tshirt)}>X</button>
            </p>)
            }
        </div>
    );
};

export default Cart;