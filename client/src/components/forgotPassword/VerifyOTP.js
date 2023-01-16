import React,{useState} from 'react'
import "../../styles/verifyOTP.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import TextField from "@mui/material/TextField";
import otpImg from "../../Assets/verificationCode.png";
import Cookies from "universal-cookie";

import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
    const [btnActive, setBtnActive] = useState(false);
   const navigate = useNavigate();
   const cookie = new Cookies();

    const initialData = {
        userOtp: "",
      };
    
      const validation = yup.object().shape({
        userOtp: yup.string().min(4).max(4).required("Please Enter OTP"),
      });
    
      const url = process.env.REACT_APP_SERVER_URL;


  return (
    <>
    <div className='verify-otp-canvas'>
         
    <div className="verify-otp-left-sec">
              <img src={otpImg} className="verify-otp-img"/>
          </div>

        <div className="verify-otp-right-sec">
               
               <div className="verify-otp-right-top">
                <h1> User Verification </h1>
               </div>

               <div className="verify-otp-right-middle">
                <p>
                  Enter the Verification Code, sent to your account.
                </p>
               </div>


             
             <div>
             <Formik
            initialValues={initialData}
            validationSchema={validation}
            onSubmit={async (values, { resetForm }) => {

              setBtnActive(!btnActive);

              const makeRequest = await fetch(`${url}/entered/otp/verify`, {
                method: "POST",
                headers: {
                    Accept:"application/json",
                  "Content-Type": "application/json",
                },
                credentials:"include",
                body: JSON.stringify(values),
              });

              const response = await makeRequest.json();
              console.log(response);
              if(response.message){
                navigate("/user/change/pass");
              }
              if(response.error.message){
                Swal.fire(response.error.name,response.error.message,"error");
              }else{
                Swal.fire("Sorry",response.error,"error");
              }
              
              setBtnActive(false);
              resetForm();
            }}
          >
            <Form className="verify-otp-form">
              <Field
                as={TextField}
                variant="standard"
                placeholder="Enter 4 digit OTP "
                name="userOtp"
                type="number"
                className="verify-otp-field"
                sx={{input:{textAlign:"center"}}}
                
              />
              <ErrorMessage name="userOtp" />

              <button 
              style={{color: btnActive ? "#d7e0f9" : "white",backgroundColor: btnActive ? "#8ca0f5" : "#ff4b3d"}}
              type="submit" 
              disabled={btnActive} 
              className="verify-otp-btn"
              >
                Verify
              </button>
            </Form>
          </Formik>
             </div>
             </div>

    </div>
    </>
  )
}

export default VerifyOTP;