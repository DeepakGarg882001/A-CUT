import React from "react";
import {Route , Routes } from "react-router-dom";


// import ContactUs from "./contact/ContactUs";
import Navbar from "./navbar/NavBar";
import Home from "./home/Home";
import AboutUs from "./about/AboutUs";
import Shop1 from './shop/Shop1';
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import ForgotPass from "./forgotPass/ForgotPass";
import Footer from './footer/Footer';
import ChooseAccount from "./signup/ChooseAccount";
import CreateShop from "./createShopAccount/CreateShop";
import AdminDash from "./admin/AdminDash";
import UserDashBoard from "./userDash/UserDashBoard";

const Router = ()=>{

    return(<>
           
                <Navbar/>
            
                <Routes>
                    <Route path="/" element={ <Home />} />

                    <Route path="/about" element={ <AboutUs />} />
                    <Route path="/services" element={ <Shop1 />} />

                    <Route path="/login" element={ <Login />} /> 
                    <Route path="/selectAccount" element={ <ChooseAccount />} />
                    <Route path="/signUp:role" element={ <SignUp />} />
                    <Route path="/profile" element={ <UserDashBoard />} />

                    <Route path="/forgotPass" element={ <ForgotPass />} />

                    <Route path="/createShop" element={ <CreateShop />} />

                    <Route path="/admin_dashboard" element={ <AdminDash />} />



                </Routes>
                <Footer/>
               
             
        </>
    )
}

export default Router;









