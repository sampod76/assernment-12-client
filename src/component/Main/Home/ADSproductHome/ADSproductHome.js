import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import BandNameCatagori from '../../../Products/Catagoris/BandNameCatagori';
import Mobiles from '../../../Products/Mobiles/Mobiles';
import { Audio, ThreeCircles } from 'react-loader-spinner'
import Carousel from '../../Carousel/Carousel';

const ADSproductHome = () => {

    const { data: adsProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['adsproducts'],
        queryFn: async () => {
            const res = await fetch(`https://assernment-12-serverside.vercel.app/mobiles/ads`, {
                headers: {

                    authorization: localStorage.getItem('token')
                },

            })
            const result = await res.json()
            if (result.success) {
                // toast.success('Get all data ads')
                return result.data

            } else {
                toast.error(result.message)
            }
        }
    })

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
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

    // console.log(adsProducts);
    return (
        <div>
            <BandNameCatagori></BandNameCatagori>
            
            <Carousel/>

            <marquee behavior="scroll" className='border-4 rounded-lg p-2 my-2 text-lg font-bold' direction="left">Most trusted website for buying and selling used mobile phones</marquee>
            <h1 className='text-center text-3xl font-bold rounded-lg border-4 border-gray-800 p-2'>Recomend Products / ads</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {adsProducts.length > 0 &&
                    adsProducts?.map(mobile =>
                        <Mobiles key={mobile._id} mobile={mobile}>

                        </Mobiles>)
                }
            </div>
            <div>

                <h1 className='text-center text-3xl font-bold my-6 rounded-lg border-4 border-gray-800 p-2'>Total transaction product</h1>

                <div
                     className='flex sm:flex-row flex-col space-y-2 sm:space-x-2 flex-row w-full items-center justify-center  my-6'>
                    <div
                         className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-blue-300'>
                        <div  className="flex justify-between w-full">
                            <div>
                                <div  className="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor"  className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div
                                     className="flex items-center text-xs px-3 bg-blue-200 text-blue-800 rounded-full">100%</div>
                            </div>
                        </div>
                        <div>
                            <div  className="font-bold text-5xl">
                                4
                            </div>
                            <div  className="font-bold text-sm">
                                Total
                            </div>
                        </div>
                    </div>
                    <div
                         className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-purple-300'>
                        <div  className="flex justify-between w-full">
                            <div>
                                <div  className="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor"  className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div
                                     className="flex items-center text-xs px-3 bg-purple-200 text-purple-800 rounded-full">25%</div>
                            </div>
                        </div>
                        <div >
                            <div  className="font-bold text-5xl text-center">
                                1
                            </div>
                            <div  className="font-bold text-sm">
                                In Progess
                            </div>
                        </div>
                    </div>
                    <div
                         className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-red-300'>
                        <div  className="flex justify-between w-full">
                            <div>
                                <div  className="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor"  className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div
                                     className="flex items-center text-xs px-3 bg-red-200 text-red-800 rounded-full">50%</div>
                            </div>
                        </div>
                        <div>
                            <div  className="font-bold text-5xl text-center">
                                2
                            </div>
                            <div  className="font-bold text-sm">
                                Reject
                            </div>
                        </div>
                    </div>
                    <div
                         className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-green-300'>
                        <div  className="flex justify-between w-full">
                            <div>
                                <div  className="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor"  className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div
                                     className="flex items-center text-xs px-3 bg-green-200 text-green-800 rounded-full">25%</div>
                            </div>
                        </div>
                        <div>
                            <div  className="font-bold text-5xl text-center">
                                1
                            </div>
                            <div  className="font-bold text-sm">
                                Approve
                            </div>
                        </div>
                    </div>
                </div>






            </div>
            <div>
                <div>
                    <div  className="relative overflow-hidden h-1/2">
                        <div  className="bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
                            <div  className="mx-auto max-w-5xl lg:px-8">
                                <div  className="lg:grid lg:grid-cols-2 lg:gap-8">
                                    <div  className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                                        <div  className="lg:py-24">
                                            <h1  className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"><span  className="block text-pink-500">Submit </span><span  className="block text-black">your expected use phone</span></h1>
                                            <p  className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"></p>
                                            <div  className="mt-10 sm:mt-12">


                                                <form  className="sm:mx-auto sm:max-w-xl lg:mx-0" action="https://api.web3forms.com/submit">
                                                    <div  className="sm:flex">
                                                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEy_HERE" />
                                                        <input type="hidden" name="subject" value="New Waitlist" />
                                                        <div  className="min-w-0 flex-1"><label htmlFor="email"  className="sr-only">Email address</label><input id="email" type="email" placeholder="Enter your email"  className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" value="" autoComplete="off" /></div>
                                                        <div  className="mt-3 sm:mt-0 sm:ml-3"><button type="submit"  className="block w-full rounded-md bg-pink-500 py-3 px-4 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900">Submit</button></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="mt-12 hidden lg:block"><img  className="" src="https://user-images.githubusercontent.com/1884712/202186141-9f8a93e1-7743-459a-bc95-b1d826931624.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ADSproductHome;