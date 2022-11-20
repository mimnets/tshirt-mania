import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h1>Cousing</h1>
            <p>House: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Cousin;