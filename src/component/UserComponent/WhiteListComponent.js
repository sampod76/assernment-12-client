import React, { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Context/Context';
import WhitlistCard from './WhitlistCard';

const WhiteListComponent = () => {
    const { user } = useContext(AuthContex)

    // const [whiteListData, setWhiteListData] = useContext([])



    console.log(user);


    const { data: whiteListData = [], isLoading, refetch } = useQuery({
        queryKey: ['whitelist'],
        queryFn: async () => {
            const res = await fetch(`https://assernment-12-serverside.vercel.app/whitelist?email=${user?.email}`,{
                headers:{
                    authorization: localStorage.getItem('token')
                }
            })
            const result = await res.json()

            if (result.success) {
                console.log(result);
                return result.data

            } else {
                toast.error(result.message)
            }
        }
    })


 


    if (isLoading) {
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
        <div className=''>
            {
                whiteListData.length ?

                    whiteListData?.map(data => <WhitlistCard key={data._id}
                        data={data}
                        refetch={refetch}
                    ></WhitlistCard>)

                    : <div className='text-7xl text-center'>No Whitelist</div>

            }

        </div>
    );
};

export default WhiteListComponent;