import React from 'react';
import { Link } from 'react-router-dom';
import { GoVerified } from "react-icons/go";


const Mobiles = ({ mobile }) => {
    const { _id, name, model, sellerInfo, OfficalPrice, stock, reating, img, useYears } = mobile
    console.log(sellerInfo);
    // const { seller, salarEmail, salarLoaction, salarNumber, selarPrice, veryfied } = mobile?.sellerInfo



    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl w-full h-full ">
                <img src={img} alt="Movie" className='md:w-[30%] w-[35%] max-h-96  my-4' />
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
                            sellerInfo?.veryfied ? <h1 className='flex justify-center items-center'><span className='text-black'>Verify:</span><GoVerified className='text-green-600 text-4xl'></GoVerified></h1> :<div><img className='w-11' src='https://i.ibb.co/4NhkSwp/very.png'></img></div>
                        }
                        </div>

                    </div>
                    <div className="card-actions justify-between">
                        <Link to={`/catagori/${name}/${_id}`} className="md:btn md:btn-primary  text-lg font-bold bg-blue-600 p-1 rounded md:w-[30%] text-white text-center w-[45%]">View</Link>
                        <Link className="md:btn md:btn-primary text-lg font-bold bg-blue-600 p-1 rounded md:w-[30%] text-white text-center w-[50%]">Add Card</Link>
                        <Link className="md:btn md:btn-primary text-lg font-bold bg-blue-600 p-1 rounded md:w-[30%] text-white text-center">Buy Now</Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Mobiles;