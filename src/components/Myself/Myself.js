import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h1>Myself</h1>
            <p>House: {house}</p>
            <section>
                <Special  house={house}></Special>
            </section>
        </div>
    );
};

export default Myself;