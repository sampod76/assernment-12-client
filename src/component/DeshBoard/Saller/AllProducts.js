import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Rings, TailSpin } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { AuthContex } from '../../Context/Context';
import MobileCard from './MobileCard';

const AllProducts = () => {
    const { user } = useContext(AuthContex)
    console.log(user);
    if (!user?.uid) {
        return
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: allMobiels = [], isLoading, refetch } = useQuery({
        queryKey: ['allselerproduct'],
        queryFn: async () => {
            const res = await fetch(`https://assernment-12-serverside.vercel.app/mobiles?email=${user?.email}`)
            const result = await res.json()
            if (result.success) {
                toast.success(`this ${user.email} all mobiles get`)

                return result.data
            } else {
                toast.error(result.message)
            }
        }
    })


    if (isLoading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
            />
        </div>
    }
    return (
        <div>

            <div>

                <div className="max-w-2xl mx-auto">

                    <div className="flex flex-col">
                        <div className="overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden ">
                                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                        <thead className="bg-gray-100 dark:bg-gray-700">
                                            <tr>
                                                <th scope="col" className="p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                                    </div>
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Product Name
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Category
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Ads your Mobiles ?
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Delete ?
                                                </th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                                            {
                                                allMobiels.length > 0 ?
                                                    allMobiels.map(mobile => <MobileCard 
                                                        key={mobile._id} 
                                                        mobile={mobile}
                                                        refetch={refetch}
                                                        >

                                                        </MobileCard>)
                                                    : <div><h1 className='text-4xl text-center my-4'>NO Product found</h1></div>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default AllProducts;