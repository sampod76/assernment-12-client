import Admin from "../DeshBoard/Admin/Admin";
import DeshBoardLayout from "../DeshBoard/DeshBoardLayout";
import DeshBoard from "../DeshBoard/DeshBoardLayout";
import Saller from "../DeshBoard/Saller/Saller";
import User from "../DeshBoard/User/User";
import Home from "../Main/Home/Home";
import Main from "../Main/Main";
import Payment from "../Products/Add-Payment/Payment";
import Catagoris from "../Products/Catagoris/Catagoris";
import Mobiles from "../Products/Mobiles/Mobiles";
import SingleMobile from "../Products/SingleMobile/SingleMobile";
import Blog from "../Shared/Blog/Blog";
import Error from "../Shared/Error/Error";
import Login from "../Shared/LoginAndRegister/Login";
import Register from "../Shared/LoginAndRegister/Register";
import Header from "../Shared/NavBar/Header";
import BookData from "../UserComponent/BookData";

import WhiteListComponent from '../UserComponent/WhiteListComponent'
import PrivetRouter from "./PrivetRouter";



const { createBrowserRouter } = require("react-router-dom");

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/catagoris/:bandname',
                element: <Catagoris></Catagoris>
            },
            {
                path: '/catagori/:bandname/:id',
                element: <SingleMobile></SingleMobile>
            },
            {
                path: '/user/whiteList',
                element: <PrivetRouter><WhiteListComponent></WhiteListComponent></PrivetRouter>
            },
            {
                path: '/user/booking',
                element: <PrivetRouter><BookData></BookData></PrivetRouter>
            },
            {
                path: '/payment/:id',
                element:<PrivetRouter><Payment></Payment></PrivetRouter>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    },
    {
        path: '*',
        element: <div className="container mx-auto">
            <div className='header p-2'>
                <Header></Header>
            </div>
            <Error></Error>
        </div>
    },
    {
        path: '/deshboard',
        element: <DeshBoardLayout></DeshBoardLayout>,
        children: [
            {
                path: '/deshboard',
                element: <div className="flex justify-center items-center text-7xl"> <h1>Welcome</h1> </div>
            },

            {
                path: '/deshboard/admin',
                element: <Admin></Admin>,

            },
            {
                path: '/deshboard/admin/alluser',
                element: <div>/deshboard/admin/alluser</div>
            },
            {
                path: '/deshboard/admin/allsaller',
                element: <div>hkjsdfkljsdkfljsd</div>
            },
            {
                path: '/deshboard/admin/reporteditem',
                element: <div>/deshboard/admin/reporteditem</div>
            },
            {
                path: '/deshboard/saller',
                element: <Saller></Saller>,

            },

            {
                path: '/deshboard/saller/addProduct',
                element: <div>/deshboard/saller/addProduct</div>
            },
            {
                path: '/deshboard/saller/products',
                element: <div>hkjsdfkljsdkfljsd</div>
            },
            {
                path: '/deshboard/user',
                element: <User></User>,

            },
            {
                path: '/deshboard/user/products',
                element: <div>hkjsdfkljsdkfljsd</div>
            },
            {
                path: '/deshboard/user/card',
                element: <div>hkjsdfkljsdkfljsd</div>
            },

        ]
    }
])