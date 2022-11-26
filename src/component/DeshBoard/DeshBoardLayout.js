import React from 'react';
import Header from '../Shared/NavBar/Header';
import header from '../Main/Main.css'
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
const DeshBoardLayout = () => {

    return (
        <div>
            <div className='header p-2'>

                <Header></Header>
            </div>
            <div className="drawer drawer-mobile">
                <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='admin/alluser'>All users</Link></li>
                        <li><Link to='admin/allsaller'>All Sellers</Link></li>
                        <li><Link to='admin/reporteditem'>Reported Item</Link></li>

                    </ul>

{/*                   
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='user/products'>My Product</Link></li>
                        <li><Link to='user/card'>My Product</Link></li>
                    </ul>

                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='saller/addProduct'>Add Products</Link></li>
                        <li><Link to='saller/products'>Products</Link></li>
                    </ul> */}

                </div>
            </div>
            {/* <div className='min-h-screen'>
                <Outlet></Outlet>
            </div> */}
            <Footer></Footer>
        </div>
    );
};

export default DeshBoardLayout;