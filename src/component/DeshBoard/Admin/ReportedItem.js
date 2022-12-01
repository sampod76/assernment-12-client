import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const ReportedItem = () => {

    const { data: allDatasArray = [], isLoading, refetch } = useQuery({
        queryKey: ['repoteditem'],
        queryFn: async () => {
            const res = await fetch('https://assernment-12-serverside.vercel.app/reported', {
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
                allDatasArray.map((data, i) => <div className='bg-slate-600 p-5 text-2xl text-white rounded-lg  my-2'>
                    
                    <h1> {i + 1}.Reported Model: {data.model}
                    </h1>
                    <h1>Reported item sellar : {data.sellarInfo
                        .sellar}</h1>
                </div>)
            }
        </div>
    );
};

export default ReportedItem;