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
            <h1>sjdkfjsdj</h1>
            <h1>{allDatasArray.length}</h1>
        </div>
    );
};

export default ReportedItem;