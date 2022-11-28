import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import BandNameCatagori from '../../../Products/Catagoris/BandNameCatagori';
import Mobiles from '../../../Products/Mobiles/Mobiles';

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
                toast.success('Get all data ads')
                return result.data

            } else {
                toast.error(result.message)
            }
        }
    })

    if (isLoading) {
        return <h2>hooooooo......</h2>
    }

    console.log(adsProducts);
    return (
        <div>
            <BandNameCatagori></BandNameCatagori>
            <div>
                <div className="carousel lg:w-3/6 md:w-2/3 h-96 mx-auto my-2 rounded-lg">
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
            <h1 className='text-center text-3xl font-bold rounded-lg border-4 border-gray-800 p-2'>Recomend Products / ads</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {adsProducts.length > 0 &&
                    adsProducts?.map(mobile =>
                        <Mobiles key={mobile._id} mobile={mobile}>

                        </Mobiles>)
                }
            </div>
        </div>
    );
};

export default ADSproductHome;