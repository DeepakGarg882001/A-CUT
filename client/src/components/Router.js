import React from "react";
import {Route , Routes } from "react-router-dom";

import AboutUs from "./about/AboutUs";
import ContactUs from "./contact/ContactUs";
import Home from "./home/Home";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import ForgotPass from "./forgotPass/ForgotPass";



const Router = ()=>{

    return(
        <>
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/about" element={ <AboutUs />} />
                    <Route path="/contact" element={ <ContactUs />} />
                    <Route path="/login" element={ <Login />} /> 
                    <Route path="/signUp" element={ <SignUp />} />
                    <Route path="/forgotPass" element={ <ForgotPass />} />

                </Routes>
        </>
    )

}

export default Router;









