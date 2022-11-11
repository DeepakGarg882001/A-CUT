import React from "react";
import {BiUserCircle} from "react-icons/bi";
import {BsShieldLock} from "react-icons/bs";
import "../../styles/signup.css";
import * as yup from "yup";

import {Formik,Form,Field,ErrorMessage} from "formik";

const SignUp = () => {
 

  const initialFormData = {
    name:"",
    email:"",
    phone:"",
    password:""
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

  
  const postDataToServer = (values)=>{

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
              <ErrorMessage name="name" />
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BsShieldLock/>
              </div>
              <Field type="email" name="email"  placeholder="abc@example.com" />
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BsShieldLock/>
              </div>
              <Field type="number" name="phone"  placeholder="Enter your phone number" />
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
            <ErrorMessage name="password" />
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BsShieldLock/>
              </div>
              <Field type="text" name="confirmPassword"  placeholder="ConfirmPassword" />
              <ErrorMessage name="confirmPassword" />
            </div>
          </div>
          <div className="inputWrapper">
            <button type="submit" >Submit</button>
          </div>
          <div className="forgot">
            <p><a href="#">If already registered ? login</a></p>
          </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignUp;
