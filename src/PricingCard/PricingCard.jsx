import { Check } from 'lucide-react';
import React from 'react';

const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing
    return (
        <div className='border bg-amber-600 rounded-xl p-5'>
            <div className='flex flex-col flex-grow'>
                <h4 className='text-5xl'> {name}</h4>
                <h1 className='text-2xl py-2'>$ {price} Dollars</h1>
                <p className='bg-amber-400 rounded-2xl p-5'>{description}</p>
                <div className=''>
                    {
                        features.map((feature, index) =>
                            <div className='flex items-center gap-x-2'>
                                <Check />
                                <p className='py-1'>{feature}</p>
                            </div>
                        )
                    }
                </div>
                <button className='mt-auto btn w-full'>Purchase</button>
            </div>
        </div>
    );
};

export default PricingCard;