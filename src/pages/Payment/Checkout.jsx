import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import './checkout.css';

const Checkout = ({ cart, price }) => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            console.log('[error]', error);
        } else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName || 'anonymous',
                        email: user.email || 'unknown',
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
            setCardError(confirmError)
        }
        console.log(paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            const transectionId = paymentIntent.id;
            setTransectionId(transectionId)
            // save payment information to the server
            const payment = {
                email: user.email,
                transectionId,
                price,
                date: new Date(),
                quantity: cart.length,
                service: 'pending',
                cartItems: cart.map(item => item._id),
                toyItems: cart.map(item => item.toyId),
                itemNames: cart.map(item => item.toyName)
            }
            axiosSecure.post('payments', payment)
                .then(res => {
                    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiii',res.data.insertResult)
                    if (res.data.insertResult.insertedId) {
                        Swal.fire('hi payment donnnnnnnnnnnnee')
                    }
                })
        }
    };

    return (
        <div className='w-2/4 mx-auto'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn-kidzplay' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-[red]'>{cardError}</p>}
            {transectionId && <p className='text-[green]'> Payment succesfull with transection id: {transectionId}</p>}
        </div>
    );
};

export default Checkout;