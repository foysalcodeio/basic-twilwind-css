import React from 'react';

const PriceCard = ({price}) => {

    return (
        <div>
            <h2>
                <span className='text-purple-800 text-5xl font-bold' > {price.price} </span>
                <span className='text-2xl font-bold text-gray-500' >/ items</span>
            </h2>
                
            <h5 className='text-2xl font-bold'>{price.name}</h5>       
        </div>
    );
};

export default PriceCard;