import React from "react";
import {BiUserCircle} from "react-icons/bi";
import {BsShieldLock} from "react-icons/bs";
import "../../styles/signup.css";
import * as yup from "yup";
import Swal from "sweetalert2";

import {Formik,Form,Field,ErrorMessage} from "formik";
import { Link ,useNavigate} from "react-router-dom";



const SignUp = () => {
  
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  const initialFormData = {
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:""
  } 
 
  const formValidation = yup.object().shape({
    name: yup.string().min(3, "Incorrect").required("Please Enter Your Name"),
    email: yup.string().email("Invalid email").required("Email is required !"),
    phone: yup.string().min(10).max(10).required("Phone No. required !"),
    password: yup.string().min(4).max(12).required("password is required"),
    confirmPassword: yup
      .string("Confirm your Password")
      .oneOf([yup.ref("password")], "Password does not match"),
  });

  
  const postDataToServer = async(values)=>{

    const makeReq = await fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const response = await makeReq.json();

    if (response.error) {
      if(response.error.name){
       Swal.fire("Sorry", `${response.error.name}`, "error");
      }
      else{
       Swal.fire("Sorry", `${response.error}`, "error");
      }
   }
   if (response.message) {
     Swal.fire(
       "Registered successfully !"
     );
     navigate("/");
   }

  }

  return (
    <>
      <div className="loginInner">
        <Formik
        initialValues={initialFormData}
        validationSchema={formValidation}
        onSubmit={(values, {resetForm})=>{
               console.log(values);
               postDataToServer(values);
               resetForm();
        }}>
          <Form>

         
          <div className="heading">
            <h2>Registration</h2>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BiUserCircle/>
              </div>
              <Field type="text" name="name" placeholder="Username" />
            </div>
            <div>
            <ErrorMessage name="name" />
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BsShieldLock/>
              </div>
              <Field type="email" name="email"  placeholder="abc@example.com" />
            </div>
            <div>
            <ErrorMessage name="email" />
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BsShieldLock/>
              </div>
              <Field type="number" name="phone" placeholder="Enter your phone number" />
            </div>
            <div>
            <ErrorMessage name="phone" />
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BsShieldLock/>
              </div>
              <Field type="password" name="password"  placeholder="Password" />
              
            </div>
             <div>
             <ErrorMessage name="password" />
             </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BsShieldLock/>
              </div>
              <Field type="text" name="confirmPassword"  placeholder="ConfirmPassword" />
            </div>
            <div>
              <ErrorMessage name="confirmPassword" />
            </div>
          </div>
          <div className="inputWrapper">
            <button type="submit" >Submit</button>
          </div>
          <div className="forgot">
            <p>If already registered ? <Link to="/login">login</Link></p>
          </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignUp;
