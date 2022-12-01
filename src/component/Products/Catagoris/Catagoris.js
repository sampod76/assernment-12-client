import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ThreeCircles } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { catagoriMobiel } from '../../Auth/useAuth';
import Mobiles from '../Mobiles/Mobiles';
import BandNameCatagori from './BandNameCatagori';

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

        <div className='mt-2'>
            <BandNameCatagori></BandNameCatagori>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {
                catagoris.map(mobile=> <Mobiles key={mobile._id} mobile={mobile}></Mobiles>)
            }
        </div>
        </div>
    );
};

export default Catagoris;