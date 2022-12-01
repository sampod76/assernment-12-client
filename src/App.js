import React from 'react';
import { useState, useEffect } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Routers } from './component/Router/Router';



function App() {


  return (
    <div data-aos="fade-up-right" className=''>

      <RouterProvider router={Routers} >

      </RouterProvider>
    </div>
  );
}

export default App;
