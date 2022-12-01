import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ThreeCircles } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { bookingListDeletd, reportMobiles, singleMobile } from '../Auth/useAuth';

const BookCard = ({ data, refetch }) => {
    const [loading, setLoadings] = useState(true)
    // console.log(Object.keys(data))

    const [mobileData, setMobileData] = useState({})
    const { _id, mobileId, userNumber, userLocation, useremail } = data
    // console.log(data);



    const { model, sellarInfo, stock, img, } = mobileData
    // console.log(sellarInfo?.sellarPrice);

    // console.log(mobileData)

    // get single mobile data from all mobile database 
    const getMobile = () => {
        singleMobile(mobileId)
            .then(result => {
                // console.log(Object.keys(result.data));
                // toast.success('successfull gat mobile')
                if (result.success) {

                    setMobileData(result.data)

                    setLoadings(false)
                } else {
                    console.log(result.message)
                    toast.error(result.message)
                }
            })
            .catch(err => toast.error(err.message))
    }

    useEffect(() => {

        getMobile()
    }, [])



    const handleCancleBooking = () => {
        bookingListDeletd(_id)
            .then(res => res.json())
            .then(result => {

                if (result.success) {
                    toast.success(result.message)
                    refetch()
                } else {
                    toast.error(data.message)
                }
            }).catch(err => toast.error(err.message))
    }

    const handleRepord = async () => {
        const datas = {
            mobileId, model, img, sellarInfo, useremail
        }
        console.log(datas)

        const res = await fetch('https://assernment-12-serverside.vercel.app/reported', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(datas)
        })
        const result = await res.json()

        if (result.success) {
            toast.success('report successfull')
        } else {
            toast.error(result.message)
        }
      

        // .then(res => res.json())
        // .then(result => {
        //     if (result.success) {
        //         toast.success(result.message)
        //     } else {
        //         toast.error(result.message)
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
        //     toast.error(err.message)
        // })
    }

    // console.log(sellarInfo)
    // const handlePayment =()=>{
    //     const selinfo={mobileId,_id,model,price:sellarInfo?.sellarPrice,useremail,sellarInfo

    //     }
    //     navigate(`/payment/${_id}`, {state:{selinfo}})
    // }

    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <ThreeCircles
                height="100"
                width="100"
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

                            <h2 className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">Price: {sellarInfo?.sellarPrice}tk</h2>

                            <h2 className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">Selar Name: { }</h2>

                        </div>
                        <p className='md:text-lg font-bold'>Model:{model}</p>


                        <div className=' md:text-2xl rounded-lg text-white font-bold p-2 w-full flex justify-between'>
                            <div className='bg-purple-500 w-fit rounded'>
                                {stock === true ? <button className='p-1' >Available</button > : <button className='btn btn-info'>Stock Out</button >}

                            </div>
                            <div>




                                {/* {
                                    stock ? <> */}
                                <button onClick={handleRepord} className="md:btn md:btn-primary md:text-lg font-bold bg-blue-600 p-1 rounded  text-white text-center mx-2 ">
                                    Peport
                                </button>
                                <button onClick={handleCancleBooking} className="md:btn md:btn-primary md:text-lg font-bold bg-blue-600 p-1 rounded  text-white text-center mx-2 ">
                                    Cancle
                                </button>
                                <Link to={`/payment/${_id}`} className="md:btn md:btn-primary md:text-lg font-bold bg-blue-600 p-1 rounded  text-white text-center ">
                                    Payment
                                </Link>
                                {/* </>
                                        : <button className='btn btn-active btn-accent '>Alrady  purchased</button>
                                } */}
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