import React, { useContext } from 'react';
import { FcShop, IconName } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Context/Context';
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    const { user, logOut } = useContext(AuthContex)
    const navigate = useNavigate()

    const headerList = <>
        <li><Link to='/'>Home</Link></li>

        <li><Link to='/deshboard'>Deshboard</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ? <li><Link onClick={() => logOut().then(()=>navigate('/login') )} >Log Out</Link></li> : <>
                <li><Link to='/login'>Sing In</Link></li>
                <li><Link to='/register'>Register</Link></li>

            </>
        }


    </>
    return (
        <div className='container mx-auto'>
            <div className="navbar text-white">
                <div className="navbar">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow header border-4  border-blue-700 rounded-box w-52">
                            {
                                headerList
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case font-bold text-3xl"><span><FcShop className='text-5xl'></FcShop></span> TrustShop</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            headerList
                        }
                    </ul>
                </div>
               


                <div className="dropdown dropdown-bottom dropdown-end text-black">
                    <label tabIndex={1} className=""><AiOutlineShoppingCart className='text-3xl text-indigo-700'></AiOutlineShoppingCart></label>
                    <ul tabIndex={1} className="dropdown-content menu p-2 shadow rounded-box w-52">
                        <li><Link className='bg-sky-800 text-white mt-2 rounded-lg' to='/user/whiteList'>WhiteList</Link></li>
                        <li><Link className='bg-sky-800 text-white mt-2 rounded-lg' to='/user/booking'>All Booking</Link></li>

                    </ul>
                </div>
                <label htmlFor="drawer-toggle">
                    <span className="text-2xl border-4 rounded-lg p-1 lg:hidden">
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                    </span>
                </label>
            </div>
            
        </div>
    );
};

export default Header;