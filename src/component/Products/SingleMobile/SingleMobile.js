import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ThreeCircles } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';
import { singleMobile } from '../../Auth/useAuth';

const SingleMobile = () => {
    const [loadingMobiles, setLoadingsMobils] = useState(true)
    const [mobileData, setMobileData] = useState({})
    const { bandname, id } = useParams()
    const { _id, name, model, sellerInfo, OfficalPrice, stock, reating, img, useYears } = mobileData

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <img src={img} alt="Movie" className='md:w-[50%] md:h-full my-4' />
                    <div className="card-body ">
                        <div className='block md:flex justify-between'>
                            <h2 className="card-title font-semibold text-2xl">Band Name: {name}</h2>
                            <h2 className="card-title font-semibold border-4 rounded-lg p-1 hover:border-red-600">Price: {sellerInfo?.selarPrice}tk</h2>

                        </div>
                        <p className='text-lg font-bold'>Model:{model}</p>
                        <div className='bg-purple-500 text-2xl rounded-lg text-white font-bold p-2 w-fit'>{stock === true ? <button >Available</button> : <button>Stock Out</button>}</div>
                        <div className="card-actions justify-end">
                            <Link to={`/catagori/${name}/${_id}`} className="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SingleMobile;