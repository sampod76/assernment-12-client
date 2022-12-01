import React, { useContext } from 'react';
import { AuthContex } from '../Context/Context';

const DashBoard = () => {
    const { user, userDatabase } = useContext(AuthContex)

    return (
        <div >
            <h1 className='text-5xl text-center md:mt-5 mt-2'>Welcome <span className='text-blue-600 capitalize p-1 rounded-lg border-2 '>{(userDatabase?.role)}</span></h1>
            <div className='flex mx-auto my-5'>

            {
                userDatabase?.role === 'admin' &&
                <img className='mx-auto md:h-[40rem] rounded-lg' src="https://quickblox.com/wp-content/uploads/How-to-create-an-app-and-make-the-most-of-features-in-the-QuickBlox-Admin-panel.png" alt="" />
            }
            </div>

            {
                userDatabase?.role ==='sellar' &&
                <img className='mx-auto md:h-[40rem] rounded-lg' src="https://m.media-amazon.com/images/I/61z+WHWzksL._AC_SL1100_.jpg" alt="" />
            }
            {
                userDatabase?.role ==='user' &&
                <img className='mx-auto md:h-[40rem] rounded-lg' src="https://mobilemonkey.com/wp-content/uploads/2020/12/welcome-greeting-message-1024x536.png" alt="" />
            }
            
        </div>
    );
};

export default DashBoard;