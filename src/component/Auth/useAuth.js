
import axios from 'axios'
import toast from 'react-hot-toast'
import { useQuery } from 'react-query'

// const url = 

export const jwtTokenCreate = async (email) => {
    const res = await fetch(`https://assernment-12-serverside.vercel.app/jwt`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },
        body: JSON.stringify({ email: email })
    })
    const data = await res.json()
    return data

}

export const PostUser = async (userInfo) => {

    const res = await fetch('https://assernment-12-serverside.vercel.app/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(userInfo)
    })
    const data = await res.json()

    return data


}


// ---------------------------------------------------
//get all user by admin 
export const AllusersForAdmin = () => {
    const { data: allusers = [], isLoading, refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('https://assernment-12-serverside.vercel.app/users', {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            const result = await res.json()
            if (result.success) {
                toast.success('Get all user by admin')
                return result.data
            } else {
                toast.error(result.message)
            }
        }
    })

    return { allusers, isLoading, refetch }
}
/* note : client side jast call 

  const {allusers,isLoading,refetch}=AllusersForAdmin()
*/

// ----------------------------------------------------------





// gat all mobile 

export const allMobiels = async () => {
    const res = await axios.get(`https://assernment-12-serverside.vercel.app/mobiles`, {
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
    // console.log(res)
    return res.data

}


// delete single mobile 
export const deleteMobileById = async (id) => {
    const res = await fetch(`https://assernment-12-serverside.vercel.app/mobiles/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
    const result = await res.json()

    return result
}

//create single mobile 

export const createOrAddProduct = async (mobileData) => {
    const res = await fetch('https://assernment-12-serverside.vercel.app/mobiles', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(mobileData)
    })
    const data = await res.json()

    return data

}


//update mobile 
export const updateMobileDatas = async (id, data) => {
    const res = await fetch(`https://assernment-12-serverside.vercel.app/mobiles/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(data)

    })
    const result = await res.json()
    return result
}

export const catagoriMobiel = async (bandname) => {
    const res = await axios.get(`https://assernment-12-serverside.vercel.app/mobiles?catagori=${bandname}`, {
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
    // console.log(res)
    return res.data
}

export const singleMobile = async (id) => {
    const res = await axios.get(`https://assernment-12-serverside.vercel.app/mobiles/${id}`, {
        headers: {
            authorization: localStorage.getItem('token')
        }
    })

    return res.data
}



export const BookingMobile = (PostData) => {

    return fetch('https://assernment-12-serverside.vercel.app/booking', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(PostData)
    })

}

// booing Update
export const bookingUpdateMobile = (id) => {

    return fetch(`https://assernment-12-serverside.vercel.app/booking/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },

    })

}

export const WhiteList = (PostData) => {

    return fetch('https://assernment-12-serverside.vercel.app/whitelist', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(PostData)
    })

}

export const whiteListDeletd = (id) => {
    return fetch(`https://assernment-12-serverside.vercel.app/whitelist/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: localStorage.getItem('token')
        },

    })
}
export const bookingListDeletd = (id) => {
    return fetch(`https://assernment-12-serverside.vercel.app/booking/${id}`, {
        method: 'DELETE',
        headers: {

            authorization: localStorage.getItem('token')
        },

    })
}

export const adsProductsHook = async (id) => {
    const res = await fetch(`https://assernment-12-serverside.vercel.app/adsproducts/${id}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        }
    })
    const result = await res.json()
    return result
}


export const reportMobiles = (PostData) => {

    return fetch('https://assernment-12-serverside.vercel.app/reported', {
        headers: {
            authorization: localStorage.getItem('token')
        },
    })
    .then()

}








