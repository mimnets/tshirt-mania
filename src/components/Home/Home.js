import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import ('./Home.css');

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    
    // Storing the 
    const handleAddToCart = (tshirt) =>{
        // console.log(tshirt);
        const exists = cart.find(ts => ts._id === tshirt._id)
        if(exists){
            alert('Items already added');
        }
        else{
            const newCart = [...cart, tshirt]
            setCart(newCart);
        }

    }


    // console.log(tshirts)
    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
            {
                tshirts.map(tshirt => <Tshirt tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;