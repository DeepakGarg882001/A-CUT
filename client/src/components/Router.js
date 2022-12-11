import React from "react";
import {Route , Routes } from "react-router-dom";
import Navbar from "./navbar/NavBar";
import Home from "./home/Home";
import AboutUs from "./about/AboutUs";
import ContactUs from "./contact/ContactUs";

import Login from "./login/Login";
import SignUp from "./signup/SignUp";

import ForgotPass from "./forgotPassword/ForgotPass";
import Footer from './footer/Footer';


import ChooseAccount from "./signup/ChooseAccount";
import CreateShop from "./owner/createShopAccount/CreateShop";
import AdminDash from "./admin/AdminDash";
import UserDashBoard from "./userDashBoard/UserDashBoard";
import Shop1 from './shop/showParticularShop/Shop1';

import AllServices from "./admin/services/AllServices";
import AdminHome from "./admin/home/AdminHome";
import ReportPage from "./admin/report/ReportPage";
import Accounts from "./admin/account/Accounts";
import AddServices from "./admin/services/AddServices";

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

                    <Route path="/admin" element={ <AdminDash />} >
                     <Route path="/admin/service_list" element={ <AllServices />} />
                     <Route path="/admin/report_marked" element={ <ReportPage />} />
                     <Route path="/admin/search_acc" element={ <Accounts />} />
                     <Route path="/admin/admin_home" element={ <AdminHome />} />
                     <Route path="/admin/add_service" element={ <AddServices />} />
                    </Route>



                </Routes>
                <Footer/>
               
             
        </>
    )
}

export default Router;









