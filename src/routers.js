import React from "react";
import Home from './pages/home';
import Counter from "./pages/counter";

export default [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/counter',
        element:<Counter/>
    }
]