import React from 'react';
import { Link } from 'react-router-dom';

const BandNameCatagori = () => {
    return (
        <div>
            
            <div className='flex flex-row justify-center gap-3 bg-blue-500 p-2 rounded-t-lg '>
                <Link to={`/allMobiles`} className='hover:bg-stone-800 p-2 rounded-lg text-white text-lg font-semibold '>All Mobiles</Link>
                <Link to={`/catagoris/Apple`} className='hover:bg-stone-800 p-2 rounded-lg text-white text-lg font-semibold '>Apple</Link>
                <Link to={`/catagoris/Samsung`} className='hover:bg-stone-800 p-2 rounded-lg text-white text-lg font-semibold '>Samsung</Link>
                <Link to={`/catagoris/Vivo`} className='hover:bg-stone-800 p-2 rounded-lg text-white text-lg font-semibold '>Vivo</Link>
                <Link to={`/catagoris/Oppo`} className='hover:bg-stone-800 p-2 rounded-lg text-white text-lg font-semibold '>Oppo</Link>
            </div>

        </div>
    );
};

export default BandNameCatagori;