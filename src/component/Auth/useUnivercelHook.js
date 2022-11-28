import toast from "react-hot-toast"
import { useQuery } from "react-query"

//get all user by admin 
export const AllSellarFromBd = (url) => {
    const { data: allDatasArray = [], isLoading, refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                 
                    authorization: localStorage.getItem('token')
                },

            })
            const result = await res.json()
            if (result.success) {
                toast.success('Get all data')
                return result.data

            } else {
                toast.error(result.message)
            }
        }
    })

    return { allDatasArray, isLoading, refetch }
}


// all delete method 

export const deleteDataHook = async (url) => {

    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },
    })

    const result = await res.json()
    return result

}

export const verifySellarHook =async(url)=>{
    const res = await fetch(url,{
        method:'PUT',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },
        
    })
    const result =await res.json()

    return result
}