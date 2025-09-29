import React from 'react';

const PricingCard = ({ pricing }) => {
    return (
        <div className='border bg-amber-600 rounded-xl p-5'>
            <div>
                <h4 className='text-5xl'> {pricing.name}</h4>
                <h1 className='text-2xl py-2'>$ {pricing.price} Dollars</h1>
                <p className='bg-amber-400 rounded-2xl p-5'>{pricing.description}</p>
            </div>
        </div>
    );
};

export default PricingCard;