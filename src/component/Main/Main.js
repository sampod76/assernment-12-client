import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/NavBar/Header';
import './Main.css'

const Main = () => {
    return (
        <div>
            <div className='header p-2'>

                <Header></Header>
            </div>

            <div className='container mx-auto min-h-screen shadow-2xl p-2'>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;