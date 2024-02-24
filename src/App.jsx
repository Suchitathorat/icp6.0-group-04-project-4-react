import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home'
import Match from "./views/Match";
import Navbar from "./components/Navbar";
import SignUp from "./views/Signup";
import Massage from "./views/Massage";
import Login from "./views/Login";
import OtpVerification from "./views/OtpVerification";
import Female from "./views/Female";

const router = createBrowserRouter([
  { path: '/home', element: <Home /> },
  {
    path:'/match',
    element:<Match/>
  },
  {
    path:'/',
    element:<SignUp/>
  },
{
  path:'/login',
  element:<Login/>
},

{
  path:'/otpVerification',
  element:<OtpVerification/>
},

  {
    path:'/massage',
    element:<Massage/>
  },
  {
    path:'/Female',
    element:<Female/>
  }

  
  

]);

const App = () => {
  return (
    <RouterProvider router={router}>
    <Navbar/>
<Home/>

     
    </RouterProvider>
  );
};

export default App;
