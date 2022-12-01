import Admin from "../DeshBoard/Admin/Admin";
import AllSellar from "../DeshBoard/Admin/AllSellar";
import Allusers from "../DeshBoard/Admin/Allusers";
import ReportedItem from "../DeshBoard/Admin/ReportedItem";
import DashBoard from "../DeshBoard/DashBoard";
import DeshBoardLayout from "../DeshBoard/DeshBoardLayout";

import AddProducts from "../DeshBoard/Saller/AddProducts";
import AllProducts from "../DeshBoard/Saller/AllProducts";
import Saller from "../DeshBoard/Saller/Saller";
import User from "../DeshBoard/User/User";
import ADSproductHome from "../Main/Home/ADSproductHome/ADSproductHome";
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
import AdminPrivetRoute from "./AdminRouter";
import PrivetRouter from "./PrivetRouter";



const { createBrowserRouter } = require("react-router-dom");

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <ADSproductHome></ADSproductHome>
            },
            {
                path: '/home',
                element: <ADSproductHome></ADSproductHome>
            },
            {
                path: '/allMobiles',
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
                element: <PrivetRouter><Payment></Payment></PrivetRouter>
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
    // AdminPrivetRoute
    {
        path: '/deshboard',
        element: <PrivetRouter> <DeshBoardLayout></DeshBoardLayout></PrivetRouter>,
        children: [
            {
                path: '/deshboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/deshboard/admin/alluser',
                element: <AdminPrivetRoute> <Allusers></Allusers></AdminPrivetRoute>
            },
            {
                path: '/deshboard/admin/allsaller',
                element: <AdminPrivetRoute><AllSellar></AllSellar></AdminPrivetRoute>
            },
            {
                path: '/deshboard/admin/reporteditem',
                element: <ReportedItem></ReportedItem>
            },
            {
                path: '/deshboard/saller',
                element: <Saller></Saller>,

            },

            {
                path: '/deshboard/saller/addProduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/deshboard/saller/products',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/deshboard/user',
                element: <User></User>,

            },
            // {
            //     path: '/deshboard/user/products',
            //     element: <div>hkjsdfkljsdkfljsd</div>
            // },
            // {
            //     path: '/deshboard/user/card',
            //     element: <div>hkjsdfkljsdkfljsd</div>
            // },

        ]
    }
])