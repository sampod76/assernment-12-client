import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../Context/Context';


const AdminPrivetRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContex)
    const location = useLocation()
    const [isLoading, setIsLoader] = useState(true)
    const [adminData, isAdminData] = useState({})

    const adminFound = async () => {
        const res = await fetch(`https://assernment-12-serverside.vercel.app/users/admin?email=${user?.email}`)
        const result = await res.json()
        return result.data
    }

    useEffect(() => {
        setIsLoader(true)
        adminFound()
            .then(result => {
                console.log(result)
                isAdminData(result)
                setIsLoader(false)
            })
            .catch(err => {
                setIsLoader(false)
                console.log(err)
            })
    }, [user?.email])

 

    if (loader || isLoading) {
        // console.log('first')
        return <div className='flex justify-center items-center'>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>

    }

  
    if (adminData.role =='admin') {
        return children
    }

    return <Navigate to='/login' state={{ from: { location } }}></Navigate>
};

export default AdminPrivetRoute;