import React from 'react';
import Checkout from './Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <div className='my-2 text-center'>
                <h1 className='text-5xl font-bold my-5'>Processed to Pay ${price}</h1>
            </div>
            <Elements stripe={stripePromise}>
                <Checkout cart={cart} price={price}></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;