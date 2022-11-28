import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BookingMobile, whiteListDeletd } from '../Auth/useAuth';

const WhitlistCard = ({ data ,refetch}) => {
    const [modelUse, setHandleClose] = useState(true)

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
    // console.log(Object.keys(data))
    const { _id, mobileId, name, model, stock, img, useremail, paid, price, username, bookedConfirm } = data






    const onSubmit = modaldata => {
        console.log(data)

        const orderMobileData = {
            ...modaldata, mobileId, name, model, stock, img, useremail: useremail, paid: false,
            bookedConfirm: true,price
        }
        BookingMobile(orderMobileData)
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    toast.success(result.message + 'whitlistr')

                    whiteListDeletd(_id)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.success) {
                                toast.success(data.message)
                                refetch()
                            } else {
                                toast.error(data.message)
                            }
                        }).catch(err => toast.error(err.message))
                }
                else {
                    toast.error(result.message)
                }
            }).catch(errors => toast.error(errors.message))


        setHandleClose(false)
    }


    const handleBookingDelele = () => {
        whiteListDeletd(_id)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                toast.success(data.message)
                refetch()
            } else {
                toast.error(data.message)
            }
        }).catch(err => toast.error(err.message))

    }


    return (
        <div>
            <section >

                <div className="card card-side bg-base-100 shadow-xl w-full mt-2  ">
                    <img src={data?.img} alt="Movie" className='w-28  my-4' />
                    <div className="card-body ">
                        <div className='block md:flex justify-between'>

                            <h2 className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">Price: {data?.price}tk</h2>

                        </div>
                        <p className='md:text-lg font-bold'>Model:{data?.model}</p>


                        <div className=' md:text-2xl rounded-lg text-white font-bold p-2 w-full flex justify-between'>
                            <div className='bg-purple-500 w-fit rounded mr-2'>
                                {data?.stock === true ? <button className='p-1' >Available</button > : <button className='btn'>Stock Out</button >}

                            </div>

                           <div>
                           <button onClick={handleBookingDelele}  className="md:btn md:btn-primary md:text-lg font-bold bg-blue-600 p-1 rounded  text-white text-center mr-2 ">Delete</button>
                            <label  htmlFor="singleWhitlistModal" className="md:btn md:btn-primary text-lg font-bold bg-blue-600 p-1 rounded md:w-[30%] text-white text-center cursor-pointer mt-1">Booking</label>
                           </div>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </section>

            {/* modal section  */}
            {
                modelUse &&
                <div>

                    <input type="checkbox" id="singleWhitlistModal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
                                <h1 className="text-gray-800 font-bold text-2xl mb-1 mx-2">{name}</h1>

                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl my-2">
                                    <input value={model} readOnly className="pl-2 outline-none border-none" type="text" name="name" id="name" placeholder="Full name" /><br />
                                </div>


                                <label htmlFor="email" className='mx-2'>Email</label>
                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl my-2">
                                    <input value={useremail} readOnly className="pl-2 outline-none border-none" type="email" name="email" id="" placeholder="Email Address" /><br />
                                </div>

                                <label htmlFor="number" className='mx-2'>number</label>
                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl ">
                                    <input {...register('userNumber')} autoComplete="on" className="pl-2 outline-none border-none w-full" type="number" name="userNumber" id="" placeholder="number" /> <br />
                                </div>
                                <label htmlFor="location" className='mx-2'>Sellar Location</label>
                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl my-2">
                                    <input {...register('userLocation')} autoComplete="on" className="pl-2 outline-none border-none" type="text" name="userLocation" id="" placeholder="location" /> <br />
                                </div>

                                <button className='border-2 mx1 rounded p-1 border-green-600 font-bold'>Price: {price} TK</button>

                                <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Booking</button>


                            </form>
                            <div className="modal-action">
                                <label htmlFor="singleWhitlistModal" className="btn">
                                    Cancle
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default WhitlistCard;