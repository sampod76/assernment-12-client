import React, { useContext } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../Context/Context';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContex)
    const location = useLocation()


    if (loading) {
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

    if (user?.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace > </Navigate>
};

export default PrivetRouter;