import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { GoVerified } from 'react-icons/go';
import { ThreeCircles } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';
import { singleMobile } from '../../Auth/useAuth';

const SingleMobile = () => {
    const [loadingMobiles, setLoadingsMobils] = useState(true)
    const [mobileData, setMobileData] = useState({})
    const { bandname, id } = useParams()
    const { _id, name, model, sellerInfo, OfficalPrice, stock, reating, img, useYears } = mobileData

    
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

    if (loadingMobiles) {
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
            <div className='min-h-screen'>

                <div className="card card-side bg-base-100 shadow-xl w-full h-full block md:flex mx-auto ">
                    <img src={img} alt="Movie" className='md:w-[50%] h-48 mx-auto md:h-full my-4' />
                    <div className="card-body ">
                        <div className='block md:flex justify-between'>
                            <h2 className="card-title font-semibold text-2xl">Band Name: {name}</h2>
                            <p className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">Price: {sellerInfo?.selarPrice}tk</p>

                        </div>
                        
                        <h1 className='text-lg font-bold'>Model: {model}</h1>
                        <h1 className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">official price: {OfficalPrice}tk</h1>
                        <div className=' md:text-2xl rounded-lg text-white font-bold p-1 w-full flex justify-between'>
                        <div className='bg-purple-500 w-[50%] rounded'>
                            {stock === true ? <marquee >Available</marquee> : <marquee>Stock Out</marquee>}

                        </div>
                        <div>
                        {
                            sellerInfo?.veryfied ? <h1 className='flex justify-center items-center'><span className='text-black'>Verify:</span><GoVerified className='text-green-600 text-4xl'></GoVerified></h1> :<div><img className='w-11' src='https://i.ibb.co/4NhkSwp/very.png'></img></div>
                        }
                        </div>
                        

                    </div>
                    <h1 className='text-lg font-bold'>Used:{useYears} Months</h1>
                    <h1 className='text-lg font-bold'>Saller: {sellerInfo?.seller} </h1>
                    <div className="card-actions flex justify-between">
                    
                        <Link className="md:btn md:btn-primary text-lg font-bold bg-blue-600 p-1 rounded md:w-[30%] text-white text-center w-[50%]">Add Card</Link>
                        <Link className="md:btn md:btn-primary text-lg font-bold bg-blue-600 p-1 rounded md:w-[30%] w-[45%] text-white text-center">Buy Now</Link>
                    </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SingleMobile;