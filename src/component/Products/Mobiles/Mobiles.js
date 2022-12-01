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
    const { user, userDatabase } = useContext(AuthContex)
    const { _id, name, model, sellarInfo, OfficalPrice, stock, reating, img, useYears } = mobile

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()

    //booking 
    const onSubmit = data => {
        console.log(data)

        const orderMobileData = {
            ...data, mobileId: _id, name, model, sellarInfo, stock, img, useremail: user?.email, paid: false,
            bookedConfirm: true
        }
        BookingMobile(orderMobileData)
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    toast.success(result.message + 'booooooooo')

                    // const updateInfo ={email:user.email, }
                    // fetch('https://assernment-12-serverside.vercel.app/updateMobile',{
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
            paid: false, price: sellarInfo.sellarPrice, username: user?.displayName, bookedConfirm: false
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


    return (
        <div >

            <section data-aos="flip-left" >


                <div className="card card-side bg-base-100 shadow-xl w-full  border-2   h-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 block lg:flex  ">
                    <img src={img} alt="Movie" className=' mx-auto lg:w-48 md:h-60 w-1/2 h-1/4 my-4' />
                    <div className="card-body ">
                        <div className='block md:flex justify-between'>
                            <h2 className="card-title font-semibold md:text-2xl">Band Name: {name}</h2>
                            <h2 className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">Price: {sellarInfo?.sellarPrice}tk</h2>

                        </div>
                        <p className='md:text-lg font-bold'>Model:{model}</p>


                        <div className=' md:text-2xl rounded-lg text-white font-bold p-2 w-full md:flex justify-between'>
                            <div className=' w-fit p-1 rounded'>
                                {stock === true ? <input type="image" className='w-20' src="https://i.ibb.co/z6sr4np/222222.jpg" alt="" /> : <input type="image" src="https://i.ibb.co/2FbcyL6/oie-mtn0-DYDqfg-BW.png" className='w-20' alt="" />}

                            </div>
                            <div>
                                {
                                    userDatabase?.verify ? <h1 className='flex justify-center items-center'><span className='text-black'>Verify:</span><GoVerified className='text-green-600 text-4xl'></GoVerified></h1> : <div><img className='w-11' src='https://i.ibb.co/4NhkSwp/very.png' alt='' /></div>
                                }
                            </div>

                        </div>
                        <div className="card-actions flex  justify-between">
                            <Link to={`/catagori/${name}/${_id}`} className="md:btn md:btn-primary  md:text-lg font-bold bg-blue-600 p-1 px-5 rounded  text-white text-center ">View</Link>
                            <button onClick={handleWhitestList} className="md:btn md:btn-primary text-lg font-bold bg-blue-600 p-1 rounded   text-white text-center ">whitlist-{'>'}</button>


                            {stock === true ? 

                                <label htmlFor="my-modal" className="md:btn md:btn-primary text-lg font-bold bg-blue-600 p-1 rounded  text-white text-center">Booking</label>:
                                <button  disabled className="text-lg font-bold bg-gray-700 p-1 rounded  text-white text-center">Soldout</button>

                           }


                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </section>

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

                                <button className='border-2 mx1 rounded p-1 border-green-600 font-bold'>Price: {sellarInfo?.sellarPrice} TK</button>

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