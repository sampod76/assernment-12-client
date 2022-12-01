import React, { useEffect, useState } from 'react';
import { allMobiels } from '../../Auth/useAuth';
import { Audio, ThreeCircles } from 'react-loader-spinner'
import toast from 'react-hot-toast';
import Mobiles from '../../Products/Mobiles/Mobiles';
import AwesomeSlider from 'react-awesome-slider';
import styles from '../../Products/Mobiles/Mobile.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Link } from 'react-router-dom';
import BandNameCatagori from '../../Products/Catagoris/BandNameCatagori';

const Home = () => {
    const [loadingMobiles, setLoadingsMobils] = useState(true)
    const [mobiels, setMobiles] = useState([])

    const allMobielsDatas = () => {
        allMobiels().then(result => {

            if (result.success) {
                setMobiles(result.data)
                console.log(result.data);
                setLoadingsMobils(false)
            } else {
                toast(result.message, {
                    icon: '👏',
                });
                setLoadingsMobils(false)
            }
        })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
                setLoadingsMobils(false)
            })
    }


    useEffect(() => {
        allMobielsDatas()
    }, [])
    // console.log(mobiels);

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

    // // console.log(sellarInfo)
    const slider = (
        <AwesomeSlider cssModule={styles}>
            <div data-src="https://www.bdstall.com/asset/product-image/giant_171825.jpg" />
            <div data-src="https://www.bdstall.com/asset/product-image/giant_157232.jpg" />
            <div data-src="https://www.bdstall.com/asset/product-image/giant_139173.jpg" />
        </AwesomeSlider>
    );
    return (
        <div className='min-h-screen mt-4 '>

            <BandNameCatagori></BandNameCatagori>

            {/* <div>
                {
                    slider
                }
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5'>
                {
                    mobiels?.map(mobile => <Mobiles key={mobile._id} mobile={mobile}></Mobiles>)
                }
            </div>

          
        </div>
    );
};

export default Home;