import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {

    let message;

    if(cart.length === 0){
        message = <p>Please buy at least one T-Shirt</p>
    }
    else{
        message = <p>Thanks purchasing.!</p>
    }

    return (
        <div>
            <h1>Order Summary</h1>
            {
            cart.map(tshirt => <p>
                {tshirt.name}
                <button onClick={()=> handleRemoveItem(tshirt)}>X</button>
            </p>)
            }
            {
                message
            }
            {/* {
                cart.length === 3 ? <p>You have seleted 3 items</p> : <p>Do't add more</p>
            } */}
            {
                cart.length >= 1 && cart.length <= 3 ? <p>You have seleted 3 items</p> : <p>Do't add more</p>
            }
            <p>And operator</p>
            {
                cart.length === 2 && <p>Double</p>
            }
        </div>
    );
};

export default Cart;