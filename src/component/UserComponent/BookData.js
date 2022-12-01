import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Context/Context';
import BookCard from './BookCard';

const BookData = () => {

    const { user, loading } = useContext(AuthContex)

    const { data: bookingData = [], isLoading, refetch } = useQuery({
        queryKey: ['bookdata',user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assernment-12-serverside.vercel.app/booking?email=${user?.email}`,{
                headers: {
                    authorization: localStorage.getItem('token')
                },
            })
            const result = await res.json()
            console.log(result);
            if (result.success) {
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
            <h1 className='text-center text-3xl border-2 p-2 rounded border-black mt-2'>Please wait for sellar's booking permission </h1>
            <div className=''>
                {
                    bookingData.length ?

                        bookingData?.map(data => <BookCard
                            key={data._id}
                            data={data}
                            refetch={refetch}
                        >

                        </BookCard>)

                        : <div className='text-7xl text-center'>No Booking</div>

                }
            </div>
        </div>
    );
};

export default BookData;