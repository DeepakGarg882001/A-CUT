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

const Router = ()=>{

    return(<>
           
                <Navbar/>
            
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/about" element={ <AboutUs />} />
                    <Route path="/services" element={ <Shop1 />} />
                    <Route path="/login" element={ <Login />} /> 
                    <Route path="/signUp" element={ <SignUp />} />
                    <Route path="/selectAccount" element={ <ChooseAccount />} />
                    <Route path="/forgotPass" element={ <ForgotPass />} />
                    <Route path="/createShop" element={ <CreateShop />} />
                </Routes>
                <Footer/>
               
             
        </>
    )
}

export default Router;









