import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const ReportedItem = () => {
   
    const { data: allDatasArray = [], isLoading, refetch } = useQuery({
        queryKey: ['repoteditem'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reported', {
                headers: {
                 
                    authorization: localStorage.getItem('token')
                },

            })
            const result = await res.json()
            console.log(result);
            if (result.success) {
                toast.success('Get all data')
                return result.data

            } else {
                toast.error(result.message)
            }
        }
    })
    console.log(allDatasArray)
    return (
        <div>
           {
            allDatasArray.map(data=> <div className='bg-red-500 text-2xl my-2'>report intem {data.modal}</div>)
           }
        </div>
    );
};

export default ReportedItem;