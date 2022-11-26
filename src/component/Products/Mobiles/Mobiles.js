import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoVerified } from "react-icons/go";
import { Dialog } from '@headlessui/react'
import { useForm } from 'react-hook-form';
import { AuthContex } from '../../Context/Context';
import { BookingMobile, WhiteList } from '../../Auth/useAuth';
import toast from 'react-hot-toast';


const Mobiles = ({ mobile }) => {
    const [modelUse, setHandleClose] = useState(true)
    const { user } = useContext(AuthContex)
    const { _id, name, model, sellerInfo, OfficalPrice, stock, reating, img, useYears } = mobile
    // console.log(mobile);
    // const { seller, salarEmail, salarLoaction, salarNumber, selarPrice, veryfied } = mobile?.sellerInfo
    // let [isOpen, setIsOpen] = useState(true)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()


    //booking 
    const onSubmit = data => {
        console.log(data)

        const orderMobileData = {
            ...data, mobileId: _id, name, model, sellerInfo, stock, img, useremail: user?.email, paid: false,
            bookedConfirm: true
        }
        BookingMobile(orderMobileData)
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    toast.success(result.message + 'booooooooo')

                    // const updateInfo ={email:user.email, }
                    // fetch('http://localhost:5000/updateMobile',{
                    //     method:'PUT',
                    //     headers: {
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify(userInfo)
                    // })
                }
                else {
                    toast.error(result.message)
                }
            }).catch(errors => toast.error(errors.message))


        setHandleClose(false)
    }

    // whitelist 
    const handleWhitestList = () => {
        const AddData = {
            mobileId: _id, name, model, stock, img, useremail: user?.email,
            paid: false, price: sellerInfo.selarPrice, username: user?.displayName,bookedConfirm: false
        }

        WhiteList(AddData)
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    toast.success(result.message)
                }
                else {
                    toast.error(result.message)
                }
            }).catch(errors => toast.error(errors.message))
    }

    console.log(user)
    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl w-full h-full ">
                <img src={img} alt="Movie" className='md:w-[30%] w-[35%] max-h-52  my-4' />
                <div className="card-body ">
                    <div className='block md:flex justify-between'>
                        <h2 className="card-title font-semibold md:text-2xl">Band Name: {name}</h2>
                        <h2 className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">Price: {sellerInfo?.selarPrice}tk</h2>

                    </div>
                    <p className='md:text-lg font-bold'>Model:{model}</p>


                    <div className=' md:text-2xl rounded-lg text-white font-bold p-2 w-full flex justify-between'>
                        <div className='bg-purple-500 w-[50%] rounded'>
                            {stock === true ? <marquee >Available</marquee> : <marquee>Stock Out</marquee>}

                        </div>
                        <div>
                            {
                                sellerInfo?.veryfied ? <h1 className='flex justify-center items-center'><span className='text-black'>Verify:</span><GoVerified className='text-green-600 text-4xl'></GoVerified></h1> : <div><img className='w-11' src='https://i.ibb.co/4NhkSwp/very.png' alt='' /></div>
                            }
                        </div>

                    </div>
                    <div className="card-actions justify-between">
                        <Link to={`/catagori/${name}/${_id}`} className="md:btn md:btn-primary  text-lg font-bold bg-blue-600 p-1 rounded md:w-[30%] text-white text-center w-[45%]">View</Link>
                        <button onClick={handleWhitestList} className="md:btn md:btn-primary text-lg font-bold bg-blue-600 p-1 rounded md:w-[30%] text-white text-center w-[50%]">Add whitlest</button>
                        <label htmlFor="my-modal" className="md:btn md:btn-primary text-lg font-bold bg-blue-600 p-1 rounded md:w-[30%] text-white text-center">Booking</label>

                    </div>
                </div>
                <div>

                </div>
            </div>

            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            {
                modelUse &&
                <div>

                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
                                <h1 className="text-gray-800 font-bold text-2xl mb-1 mx-2">{name}</h1>

                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl my-2">
                                    <input value={model} readOnly className="pl-2 outline-none border-none" type="text" name="name" id="name" placeholder="Full name" /><br />
                                </div>


                                <label htmlFor="email" className='mx-2'>Email</label>
                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl my-2">
                                    <input value={user?.email} readOnly className="pl-2 outline-none border-none" type="email" name="email" id="" placeholder="Email Address" /><br />
                                </div>

                                <label htmlFor="number" className='mx-2'>number</label>
                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl ">
                                    <input {...register('number')} autoComplete="on" className="pl-2 outline-none border-none w-full" type="number" name="number" id="" placeholder="number" /> <br />
                                </div>
                                <label htmlFor="location" className='mx-2'>Sellar Location</label>
                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl my-2">
                                    <input {...register('location')} autoComplete="on" className="pl-2 outline-none border-none" type="text" name="location" id="" placeholder="location" /> <br />
                                </div>

                                <button className='border-2 mx1 rounded p-1 border-green-600 font-bold'>Price: {sellerInfo?.selarPrice} TK</button>

                                <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Booking</button>


                            </form>
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn">
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

export default Mobiles;