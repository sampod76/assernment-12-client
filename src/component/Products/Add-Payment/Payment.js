import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import toast from 'react-hot-toast';
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import ChackoutForm from './ChackoutFrom';
// const stripePromise = loadStripe(process.env.REACT_STRIPE_PUBLISHABLE_KEY);
const stripePromise = loadStripe("pk_test_51M6MdfAdJu4EQtRS8tBWituEbmkenJzMLqByrl2hBhZ47U8p8sGAKdC05mwlEiZVCNntARDELfFH7xjofCb8Z99N004Y63poiB");

const Payment = () => {
    //     const{state}=useLocation()
    //  const {model,price}=state.selinfo
    const { id } = useParams()

    const { data: bookingData = {}, isLoading, refetch } = useQuery({
        queryKey: ['bookingData'],
        queryFn: async () => {
            const res = await fetch(`https://assernment-12-serverside.vercel.app/booking/${id}`,{
                headers: {
                    authorization: localStorage.getItem('token')
                },
            })
            const result = await res.json()
            if (result.success) {
                toast.success('booking data gats')
                return result.data
            } else {
                toast.error(result.message)
            }
        }
    })

    if (isLoading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperclass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    }
  

    return (
        <div>
            <h1 className='text-xl md:text-4xl font-bold'>Mobile : {bookingData?.model}</h1>
            <h1 className='text-xl md:text-4xl font-bold'>Please payment : {bookingData?.sellarInfo?.sellarPrice} tk</h1>

            <Elements stripe={stripePromise}>
                <ChackoutForm bookingData={bookingData} />
            </Elements>
        </div>
    );
};

export default Payment;