import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';


import AppsDetails from '../pages/AppsDetails/AppsDetails';
import Install from '../pages/Install/Install';

import AllApp from '../pages/AllApp/AllApp';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch('/allApps.json'),
            path:"/",
            Component:Home,
        },
        {
            path:'/app',
            loader:()=>fetch('/allApps.json'),
            Component:AllApp,
        },
        {
            path:'install',
             loader:()=>fetch('/allApps.json'),
            Component:Install,

        },
        {
            path:'/appsDetails/:id',
            loader:()=>fetch('/allApps.json'),
            Component:AppsDetails,
        }
        

    ]
  },
  
]);

