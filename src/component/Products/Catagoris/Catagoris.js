import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ThreeCircles } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { catagoriMobiel } from '../../Auth/useAuth';

const Catagoris = () => {
    const [loadingMobiles, setLoadingsMobils] = useState(true)
    const {bandname}=useParams()
    const [catagoris,setCatagoris]=useState([])

 
    const allCatagoriMobiel =()=>{
          catagoriMobiel(bandname)
          .then(result=>{
           if(result.success){
            toast.success(`${bandname} data loade`)
            setCatagoris(result.data)
            setLoadingsMobils(false)
           }else{
            toast(result.message)
            setLoadingsMobils(false)
           }
          })
          .catch(err=> {
            toast.error(err.message)
            setLoadingsMobils(false)
        })
    }

    useEffect(()=>{
        allCatagoriMobiel()
    },[bandname])
    console.log(catagoris);
    if (loadingMobiles) {
        return <div className='flex justify-center items-center min-h-screen'>
            <ThreeCircles
                height="200"
                width="200"
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
        <div>
            
        </div>
    );
};

export default Catagoris;