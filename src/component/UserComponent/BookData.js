import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Context/Context';
import BookCard from './BookCard';

const BookData = () => {

    const { user, loading } = useContext(AuthContex)
    console.log(user);
    const { data: bookingData = [], isLoading, refetch } = useQuery({
        queryKey: ['bookdata'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
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
                height="200"
                width="200"
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
            <h1 className='text-center text-3xl border-2 p-2 rounded border-black mt-2'>Please wait for seller's booking permission </h1>
            <div className=''>
                {
                    bookingData.length ?

                        bookingData?.map(data => <BookCard
                            key={data._id}
                            data={data}
                            refetch={refetch}
                        >

                        </BookCard>)

                        : <div className='text-7xl text-center'>No Whitelist</div>

                }
            </div>
        </div>
    );
};

export default BookData;