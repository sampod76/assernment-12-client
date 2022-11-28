import React, { useEffect, useState } from 'react';
import { CardElement, Elements, stripe, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { RotatingLines } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { AuthContex } from '../../Context/Context';
import { bookingUpdateMobile, updateMobileDatas } from '../../Auth/useAuth';

const ChackoutForm = ({ bookingData }) => {

    const { user } = useState(AuthContex)
    const { mobileId, _id, model, useremail, sellarInfo } = bookingData
    // console.log(sellarInfo?.sellarEmail);

    const [loading, setLoading] = useState(true)
    const [success, setSuccess] = useState('')
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads /
        fetch("https://assernment-12-serverside.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: localStorage.getItem('token')
            },
            body: JSON.stringify({ price: sellarInfo?.sellarPrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false) //
                setClientSecret(data.clientSecret)
            });
    }, [sellarInfo?.sellarPrice]);


    if (loading) {
        // console.log('first')
        return <div className='flex justify-center items-center'>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>

    }


    const handleSubmit = async (event) => {
        // Block native form submission.
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
            return console.log('[error]', error);
        } else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {

                        email: useremail

                    },
                },
            },
        );

        if (confirmError) {
            return setCardError(confirmError.message)
        } else {
            setCardError('')
        }

        if (paymentIntent.status === 'succeeded') {

            const payment = {
                price: sellarInfo?.sellarPrice,
                transationId: paymentIntent.id,
                useremail,
                bookingId: _id,
                mobileId,
                selareEmail: sellarInfo.selareEmail


            }

            // store payment info in the database 

            fetch('https://assernment-12-serverside.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success(data.message)
                        const updateData = {
                            stock: false

                        }
                        updateMobileDatas(mobileId, updateData)
                            .then(result => {
                                if (result.success) {
                                    toast.success(result.message)
                                    bookingUpdateMobile(_id)
                                        .then(result => {
                                            if (result.success) {
                                                toast.success(result.message + 'paiddddddddd')
                                            }
                                            else {
                                                toast.error(result.message)
                                            }
                                        })
                                } else {
                                    toast.error(result.message)
                                }
                            })
                            .catch(err => {
                                console.log(err.message)
                                toast.error(err.message)
                            })

                    } else {
                        toast.error(data.message)
                    }
                })
                .catch(error => toast.error(error.message + 'catch '))

            toast.success('Congratulations successfull your payment')
            setSuccess(paymentIntent.id)
        }

    };
    return (
        <div className='my-2'>
            <form className='max-w-screen-lg mx-auto border-8 border-blue-500 rounded-lg p-3' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '25px',
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
                <button className='btn btn-primary text-black font-bold hover:text-white my-2'
                    type="submit"
                    disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            <div className='text-center'>
                {
                    success && <>
                        <p className='text-center p-2 text-2xl'><span className='text-cyan-600'>Your succeeded your transition</span> <br></br> id : {success}</p>

                    </>
                }
            </div>
        </div>
    );
};

export default ChackoutForm;