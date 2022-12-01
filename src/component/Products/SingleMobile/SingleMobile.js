import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcRating } from 'react-icons/fc';
import { GoVerified } from 'react-icons/go';
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BookingMobile, singleMobile, WhiteList } from '../../Auth/useAuth';
import { AuthContex } from '../../Context/Context';

const SingleMobile = () => {
    const [modelUse, setHandleClose] = useState(true)
    const [loadingMobiles, setLoadingsMobils] = useState(true)
    const [mobileData, setMobileData] = useState({})
    const [orderData, setorderData] = useState({})
    const { bandname, id } = useParams()
    const { user } = useContext(AuthContex)
    const { _id, name, model, sellarInfo, OfficalPrice, stock, reating, img, useYears } = mobileData

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()





    const singleMobileData = () => {
        singleMobile(id).then(result => {
            console.log(result);
            if (result.success) {
                toast.success(`${bandname + id} dataload`)
                setMobileData(result.data)
                setLoadingsMobils(false)
            } else {
                toast(result.message)
                setLoadingsMobils(false)
            }
        })
            .catch(err => {
                toast.error(err.message)
                setLoadingsMobils(false)
            })

    }

    useEffect(() => {
        singleMobileData()
    }, [id])


    //order mobile 




    // console.log(order);

    const handleAddCard = data => {


        const addcard = {
            mobileId: _id, name, model, stock, img, useremail: user?.email,
            paid: false, price: sellarInfo.sellarPrice, username: user?.displayName, bookedConfirm: false
        }
        WhiteList(addcard)
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

    // booking function 

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



    if (loadingMobiles) {
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
            <div className='min-h-screen md:w-[60%] lg:w-[70%] mx-auto'>

                <div className="card card-side bg-base-100 shadow-xl w-full h-full block md:flex-col mx-auto ">
                    <img src={img} alt="Movie" className='md:w-[60%] lg:w-[50%] h-48 mx-auto md:h-[35rem] my-4' />
                    <div className="card-body ">
                        <div className='block md:flex justify-between'>
                            <h2 className="card-title font-semibold text-2xl">Band Name: {name}</h2>
                            <p className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">Price: {sellarInfo?.sellarPrice}tk</p>

                        </div>

                        <h1 className='text-lg font-bold'>Model: {model}</h1>
                        <h1 className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">official price: {OfficalPrice}tk</h1>
                        <div className=' md:text-2xl rounded-lg text-white font-bold p-1 w-full flex justify-between'>
                            <div className='bg-purple-500 w-[50%] rounded'>
                                {stock === true ? <marquee >Available</marquee> : <marquee>Stock Out</marquee>}

                            </div>
                            <div>
                                {
                                    sellarInfo?.veryfied ? <h1 className='flex justify-center items-center'><span className='text-black'>Verify:</span><GoVerified className='text-green-600 text-4xl'></GoVerified></h1> : <div><img className='w-11' src='https://i.ibb.co/4NhkSwp/very.png'></img></div>
                                }
                            </div>


                        </div>
                        <div >
                            <h1 className='border-2 rounded p-2 text-center text-lg font-bold'>sellar Info</h1>
                            <h1 className='text-lg font-bold'>Used:{useYears} Months</h1>
                            <h1 className='text-lg font-bold'>Saller: {sellarInfo?.sellar} </h1>
                            <h1 className='text-lg font-bold'>Loaction: {sellarInfo?.sellarLoaction} </h1>
                            <h1 className='text-lg font-bold'>Email: {sellarInfo?.sellarEmail} </h1>
                            <h1 className='text-lg font-bold'>{sellarInfo?.sellarNumber} </h1>
                        </div>
                        <div className="card-actions flex justify-between">

                            <button onClick={handleAddCard} className="md:btn md:btn-primary text-lg font-bold bg-blue-600 p-1 rounded md:w-[30%] text-white text-center w-[50%]">WhiteList</button>
                            <label htmlFor="singleMobielModal" className="md:btn md:btn-primary text-lg font-bold bg-blue-600 p-1 rounded md:w-[30%] text-white text-center cursor-pointer">Booking</label>

                        </div>
                        <div className='font'>
                            {/* {
                                        [...Array(Number(reating)).keys()].map((_, index) => <span key={index}><FcRating className=''></FcRating></span>)
                                    } */}
                        </div>
                    </div>
                </div>


            </div>


            {
                modelUse &&
                <div>

                    <input type="checkbox" id="singleMobielModal" className="modal-toggle" />
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
                                    <input {...register('userNumber')} autoComplete="on" className="pl-2 outline-none border-none w-full" type="number" name="userNumber" id="" placeholder="number" /> <br />
                                </div>
                                <label htmlFor="location" className='mx-2'>Sellar Location</label>
                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl my-2">
                                    <input {...register('userLocation')} autoComplete="on" className="pl-2 outline-none border-none" type="text" name="userLocation" id="" placeholder="location" /> <br />
                                </div>

                                <button className='border-2 mx1 rounded p-1 border-green-600 font-bold'>Price: {sellarInfo?.sellarPrice} TK</button>

                                <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Booking</button>


                            </form>
                            <div className="modal-action">
                                <label htmlFor="singleMobielModal" className="btn">
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

export default SingleMobile;