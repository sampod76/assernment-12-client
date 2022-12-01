import React, { useContext } from 'react';
import Header from '../Shared/NavBar/Header';
import header from '../Main/Main.css'
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { AuthContex } from '../Context/Context';
import DashBoard from './DashBoard';
const DeshBoardLayout = () => {
    const { userDatabase } = useContext(AuthContex)
    // console.log(userDatabase);
console.log(userDatabase)
    return (
        <div className=''>
            <div className='header p-2'>

                <Header></Header>

            </div>
            <div className="drawer drawer-mobile container mx-auto shadow-2xl">
                <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
                    {
                        userDatabase?.role === 'admin' &&
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            <li className='mt-1 border-2 rounded-lg'><Link to='admin/alluser'>All users</Link></li>
                            <li className='mt-1 border-2 rounded-lg'><Link to='admin/allsaller'>All sellars</Link></li>
                            <li className='mt-1 border-2 rounded-lg'><Link to='admin/reporteditem'>Reported Item</Link></li>

                        </ul>
                    }


                    {
                        userDatabase?.role === 'user' &&
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li className='mt-1 border-2 rounded-lg'><Link to='/user/whiteList'>Whitelist</Link></li>
                            <li className='mt-1 border-2 rounded-lg'><Link to='/user/booking'>Booking List</Link></li>
                        </ul>
                    }

                    {
                        userDatabase?.role === 'sellar' &&
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li className='mt-1 border-2 rounded-lg'><Link to='saller/addProduct'>Add Products</Link></li>
                            <li className='mt-1 border-2 rounded-lg'><Link to='saller/products'>My Products</Link></li>
                        </ul>
                    }

                </div>
            </div>
          
            <div className=''>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default DeshBoardLayout;