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
import Shop from './shop/showParticularShop/Shop';

import AllServices from "./admin/services/AllServices";
import AdminHome from "./admin/home/AdminHome";
import ReportPage from "./admin/report/ReportPage";
import Accounts from "./admin/account/Accounts";
import AddServices from "./admin/services/AddServices";

import OurServices from "./plateformServices/OurServices";
import ShowShops from "./shop/showAllShops/ShowShops";

import OwnerDashBoard from "./owner/OwnerDashBoard";
import CustomerAppointment from "./owner/CustomerAppointment";
import MyShop from "./owner/myShop/MyShop"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Router = ()=>{

    return(<>
                <ToastContainer position="bottom-left" />
                <Navbar/>
                
                <Routes>
                    <Route path="/" element={ <Home />} />

                    <Route path="/about" element={ <AboutUs />} />
                    <Route path="/services" element={ <Shop />} />
                    <Route path="/contact" element={ <ContactUs />} />
                    <Route path="/all_shops" element={ <ShowShops />} />
                    <Route path="/showShopDetails" element={ <Shop />} />

                    <Route path="/login" element={ <Login />} /> 
                    <Route path="/selectAccount" element={ <ChooseAccount />} />
                    <Route path="/signUp:role" element={ <SignUp />} />
                    <Route path="/profile" element={ <UserDashBoard />} />

                    <Route path="/forgotPass" element={ <ForgotPass />} />

                       
                    <Route path="/owner" element={ <OwnerDashBoard />} >
                        <Route path="/owner/createShop" element={ <CreateShop />} />
                        <Route path="/owner/customers" element={<CustomerAppointment/>}/>
                        <Route path="/owner/myShop" element={ <MyShop />} />
                    </Route>


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









