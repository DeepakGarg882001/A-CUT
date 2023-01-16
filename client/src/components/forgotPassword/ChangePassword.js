import React,{useState} from 'react'
import "../../styles/setPassword.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import {FaLock} from "react-icons/fa";
import {MdPassword} from "react-icons/md";

import verifiedImg from "../../Assets/verified.png";
import Cookies from 'universal-cookie';



const ChangePassword = () => {
  const cookie = new Cookies();
  const [btnActive, setBtnActive] = useState(false);
  const navigate = useNavigate();

  const initialData = {
    password: "",
    confirmPassword:""
  };

  const validation = yup.object().shape({
    password: yup.string().min(4).max(12).required("password is required"),
    confirmPassword: yup
      .string("Confirm your Password")
      .oneOf([yup.ref("password")], "Password does not match"),
  });

  const url = process.env.REACT_APP_SERVER_URL;

  return (
    <div className="setPass-canvas">

<div className="setPass-left-sec">
          <img src={verifiedImg} className="setPass-img" />
          <p>You are a Verified user !</p>
        </div>

        <div className="setPass-right-sec">
          <div className="setPass-right-top">
            <h1> Create New Password</h1>
          </div>

          <div className="setPass-right-middle">
            <p>Set a Secure Password, which you can remember.</p>
          </div>

        <div>
          <Formik
            initialValues={initialData}
            validationSchema={validation}
            onSubmit={async (values, { resetForm }) => {

              setBtnActive(!btnActive);
              const {password} = values;
              const makeRequest = await fetch(`${url}/user/new/pass`, {
                method: "POST",
                headers: {
                    Accept:"application/json",
                  "Content-Type": "application/json",
                },
                credentials:"include",
                body: JSON.stringify({password}),
              });

              const response = await makeRequest.json();

              if(response.message){
                Swal.fire("Hurry",response.message,"success");
                navigate("/login");

              }else if(response.error.message){
                Swal.fire(response.error.name,response.error.message,"error");
                navigate("/user/pass/forgot");
              }else{
                Swal.fire("Sorry ",response.error,"error");
                navigate("/user/pass/forgot");
              }
              cookie.remove("BHB_FgPass",{ path: "/",domain:"localhost" });
              setBtnActive(false);
              resetForm();
            }}
          >
            <Form className="setPass-form">
              
            <Field
                  as={TextField}
                  variant="standard"
                  label="Password"
                  placeholder="######"
                  className="setPass-field"
                  name="password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaLock className="signUp-field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="password" />
                </p>

                <Field
                  as={TextField}
                  variant="standard"
                  label="Confirm Password"
                  placeholder="re-type password"
                  name="confirmPassword"
                  className="setPass-field"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdPassword className="signUp-field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="confirmPassword" />
                </p>

              <button 
              style={{color: "white",backgroundColor: btnActive ? "#b1bcfd" : "#be5cd6"}}
              type="submit" 
              disabled={btnActive} 
              className="setPass-btn"
              >
                Save
              </button>
            </Form>
          </Formik>
          </div>
        </div>
      </div>
  )
}

export default ChangePassword;