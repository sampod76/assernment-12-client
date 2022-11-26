import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ThreeCircles } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { bookingListDeletd, singleMobile } from '../Auth/useAuth';

const BookCard = ({ data, refetch }) => {
    const [loading, setLoadings] = useState(true)
    // console.log(Object.keys(data))
 
    const [mobileData, setMobileData] = useState({})
    const { _id, mobileId, userNumber, userLocation, useremail } = data

    const { name, model, sellerInfo, stock, img, } = mobileData
    // console.log(sellerInfo?.selarPrice);

 



    const handleCancleBooking = () => {
        bookingListDeletd(_id)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.success) {
                    toast.success(result.message)
                    refetch()
                } else {
                    toast.error(data.message)
                }
            }).catch(err => toast.error(err.message))
    }

    // console.log(sellerInfo)
    // const handlePayment =()=>{
    //     const selinfo={mobileId,_id,model,price:sellerInfo?.selarPrice,useremail,sellerInfo

    //     }
    //     navigate(`/payment/${_id}`, {state:{selinfo}})
    // }

    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <ThreeCircles
                height="200"
                width="200"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperclassName=""
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


            <section >

                <div className="card card-side bg-base-100 shadow-xl md:w-[80%] lg:w-[60%] mx-auto mt-2 
                   ">
                    <img src={img} alt="Movie" className='w-28   my-4' />
                    <div className="card-body ">
                        <div className='block md:flex justify-between'>

                            <h2 className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">Price: {sellerInfo?.selarPrice}tk</h2>

                            <h2 className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">Selar Name: {name}</h2>

                        </div>
                        <p className='md:text-lg font-bold'>Model:{model}</p>


                        <div className=' md:text-2xl rounded-lg text-white font-bold p-2 w-full flex justify-between'>
                            <div className='bg-purple-500 w-fit rounded'>
                                {stock === true ? <button className='p-1' >Available</button > : <button className='btn'>Stock Out</button >}

                            </div>
                            <div>

                                <button onClick={handleCancleBooking} className="md:btn md:btn-primary md:text-lg font-bold bg-blue-600 p-1 
                rounded  text-white text-center mx-2 ">
                                    Cancle
                                </button>
                                <Link to={`/payment/${_id}`}  className="md:btn md:btn-primary md:text-lg font-bold bg-blue-600 p-1 
                rounded  text-white text-center ">
                                    Payment
                                </Link>
                            </div>



                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookCard;



{/* যদি চাই ইউজার বুকিং কনফার্ম করার পরে যখন ফেলারে একসেপ্ট করবে তখন এটি পেমেন্টের জন্য এভেলেবেল হবে তখন এটি চালু করতে হবে */ }

{/* {
                                data.bookedConfirm ? <Link className="md:btn md:btn-primary md:text-lg font-bold bg-blue-600 p-1 
                rounded  text-white text-center ">
                                    Payment
                                </Link>
                                    : <button className='text-black'>Pinding..</button>
                            } */}