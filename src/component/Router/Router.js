import Home from "../Main/Home/Home";
import Main from "../Main/Main";
import Catagoris from "../Products/Catagoris/Catagoris";
import Mobiles from "../Products/Mobiles/Mobiles";
import SingleMobile from "../Products/SingleMobile/SingleMobile";
import Error from "../Shared/Error/Error";
import Login from "../Shared/LoginAndRegister/Login";
import Register from "../Shared/LoginAndRegister/Register";
import Header from "../Shared/NavBar/Header";

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
                element:<Catagoris></Catagoris>
            },
            {
                path: '/catagori/:bandname/:id',
                element:<SingleMobile></SingleMobile>
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
    }
])