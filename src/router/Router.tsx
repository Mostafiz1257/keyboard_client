
import DetailsProduct from "@/component/Product/DeatilsProduct";
import Order from "@/component/Product/Order";
import Main from "@/layout/Main";
import About from "@/pages/About/About";
import Contract from "@/pages/Contract/Contract";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Products/Products";
import {
    createBrowserRouter,
   
  } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products',
                element:<Products></Products>
            },
            {
                path:`/products/:id`,
                element:<DetailsProduct></DetailsProduct>
            },
            {
                path:'/order',
                element:<Order></Order>
            },
            {
                path:'/about-us',
                element:<About></About>
            },
            {
                path:'/contact-us',
                element:<Contract></Contract>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            }
        ],
        
    },
   
])