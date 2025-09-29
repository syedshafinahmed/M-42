import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
const Pricing = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise)
    console.log(pricingData);
    return (
        <div>
            <h2 className='font-medium text-5xl text-center'>Get Membership</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing => <PricingCard pricing={pricing} key={pricing.id}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;