import React, { useContext } from 'react';
import { FcShop, IconName } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Context/Context';

const Header = () => {
    const { user, logOut } = useContext(AuthContex)

    const headerList = <>
        <li><Link to='/'>Home</Link></li>

        {
            user?.uid ? <li><Link onClick={() => logOut()} >Log Out</Link></li> : <>
                <li><Link to='/login'>Sing In</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </>
        }



    </>
    return (
        <div className='container mx-auto'>
            <div className="navbar text-white">
                <div className="navbar-start">
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

            </div>
        </div>
    );
};

export default Header;