import React from 'react';
import { useState, useEffect } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Routers } from './component/Router/Router';



function App() {


  return (
    <div className=''>

      <RouterProvider router={Routers} >

      </RouterProvider>
    </div>
  );
}

export default App;
