import React from "react";
import * as yup from "yup";
import {BiUserCircle} from "react-icons/bi"
import {BsShieldLock} from "react-icons/bs";
import "../../styles/login.css";
import {Formik, Form, ErrorMessage,Field} from "formik"

const Login = () => {

  const url = process.env.REACT_APP_SERVER_URL;
 
  const initialFormData = {
    email :"",
    password:""
  } 
 
  const formValidation = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required !"),
    password: yup.string().required("password is required"),
  });

  const postDataToServer = async(values)=>{

    const makeReq = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const response = await makeReq.json();

    console.log(response);

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
          }}
        >
          <Form>
            
          
          <div className="heading">
            <h2>LOGIN</h2>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BiUserCircle/>
              </div>
              <Field type="text" name="email" placeholder="Username" />
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BsShieldLock/>
              </div>
              <Field type="password" name="password"  placeholder="Password" />
            </div>
          </div>
          <div className="inputWrapper">
            <button type="submit">Submit</button>
          </div>
          <div className="forgot">
            {/* <p><a href="#">Forgot Password ?</a></p> */}
          </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};


export default Login;
