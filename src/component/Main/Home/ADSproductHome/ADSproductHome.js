import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import BandNameCatagori from '../../../Products/Catagoris/BandNameCatagori';
import Mobiles from '../../../Products/Mobiles/Mobiles';
import { Audio, ThreeCircles } from 'react-loader-spinner'

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

    console.log(adsProducts);
    return (
        <div>
            <BandNameCatagori></BandNameCatagori>
            <div data-aos="fade-right">
                <div className="carousel lg:w-4/6 md:w-2/3 w-2/3   md:h-4/6 mx-auto my-2 rounded-lg">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ytimg.com/vi/SwmFIn6SdBg/maxresdefault.jpg" className="w-full" alt='' />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/09/iOS16-Hero-LSW-rgb5.max-1000x1000-1.png" className="w-full" alt='' />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://media.idownloadblog.com/wp-content/uploads/2022/10/iOS-16-Depth-Effect-wallpaper-idownloadblog-mockup.jpg" className="w-full" alt='' />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/ios-16-screens.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" className="w-full" alt='' />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
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
                    class='flex sm:flex-row flex-col space-y-2 sm:space-x-2 flex-row w-full items-center justify-center  my-6'>
                    <div
                        class='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-blue-300'>
                        <div class="flex justify-between w-full">
                            <div>
                                <div class="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div
                                    class="flex items-center text-xs px-3 bg-blue-200 text-blue-800 rounded-full">100%</div>
                            </div>
                        </div>
                        <div>
                            <div class="font-bold text-5xl">
                                4
                            </div>
                            <div class="font-bold text-sm">
                                Total
                            </div>
                        </div>
                    </div>
                    <div
                        class='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-purple-300'>
                        <div class="flex justify-between w-full">
                            <div>
                                <div class="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div
                                    class="flex items-center text-xs px-3 bg-purple-200 text-purple-800 rounded-full">25%</div>
                            </div>
                        </div>
                        <div >
                            <div class="font-bold text-5xl text-center">
                                1
                            </div>
                            <div class="font-bold text-sm">
                                In Progess
                            </div>
                        </div>
                    </div>
                    <div
                        class='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-red-300'>
                        <div class="flex justify-between w-full">
                            <div>
                                <div class="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div
                                    class="flex items-center text-xs px-3 bg-red-200 text-red-800 rounded-full">50%</div>
                            </div>
                        </div>
                        <div>
                            <div class="font-bold text-5xl text-center">
                                2
                            </div>
                            <div class="font-bold text-sm">
                                Reject
                            </div>
                        </div>
                    </div>
                    <div
                        class='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-green-300'>
                        <div class="flex justify-between w-full">
                            <div>
                                <div class="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div
                                    class="flex items-center text-xs px-3 bg-green-200 text-green-800 rounded-full">25%</div>
                            </div>
                        </div>
                        <div>
                            <div class="font-bold text-5xl text-center">
                                1
                            </div>
                            <div class="font-bold text-sm">
                                Approve
                            </div>
                        </div>
                    </div>
                </div>






            </div>
            <div>
                <div>
                    <div class="relative overflow-hidden h-1/2">
                        <div class="bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
                            <div class="mx-auto max-w-5xl lg:px-8">
                                <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                                    <div class="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                                        <div class="lg:py-24">
                                            <h1 class="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"><span class="block text-pink-500">Submit </span><span class="block text-black">your expected use phone</span></h1>
                                            <p class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"></p>
                                            <div class="mt-10 sm:mt-12">


                                                <form class="sm:mx-auto sm:max-w-xl lg:mx-0" action="https://api.web3forms.com/submit">
                                                    <div class="sm:flex">
                                                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEy_HERE" />
                                                        <input type="hidden" name="subject" value="New Waitlist" />
                                                        <div class="min-w-0 flex-1"><label for="email" class="sr-only">Email address</label><input id="email" type="email" placeholder="Enter your email" class="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" value="" autocomplete="off" /></div>
                                                        <div class="mt-3 sm:mt-0 sm:ml-3"><button type="submit" class="block w-full rounded-md bg-pink-500 py-3 px-4 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900">Submit</button></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-12 hidden lg:block"><img class="" src="https://user-images.githubusercontent.com/1884712/202186141-9f8a93e1-7743-459a-bc95-b1d826931624.png" alt="" /></div>
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