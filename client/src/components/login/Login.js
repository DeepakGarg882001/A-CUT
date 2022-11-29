import React from "react";
import * as yup from "yup";
import { BiUserCircle } from "react-icons/bi";
import { BsShieldLock } from "react-icons/bs";
import "../../styles/login.css";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import {Get_Current_User} from "../../redux/action/Current_User_Action";
import {useDispatch} from "react-redux";

const Login = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookie = new Cookies();
 
  const initialFormData = {
    email: "",
    password: "",
  };

  const formValidation = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required !"),
    password: yup.string().required("password is required"),
  });

  const postDataToServer = async (values) => {
    const makeRequest = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const response = await makeRequest.json();
    if (response.error) {
      console.log(response.error);
      if (response.error.name) {
        Swal.fire("Sorry", `${response.error.name}`, "error");
      } else {
        Swal.fire("Sorry", `${response.error}`, "error");
      }
    }
    if (response.message) {
      Swal.fire("Welcome Back ", `${response.data.name}`, "success");
      cookie.set("BHB_token", `${response.data.token}`);
      dispatch(Get_Current_User(response.data));
      navigate("/");
    }
  };

  return (
    <>
      <div className="loginInner">
        <Formik
          initialValues={initialFormData}
          validationSchema={formValidation}
          onSubmit={(values, { resetForm }) => {
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
                  <BiUserCircle />
                </div>
                <Field type="text" name="email" placeholder="Username" />
              </div>
              <div>
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="inputWrapper">
              <div className="inputInner">
                <div className="icon">
                  <BsShieldLock />
                </div>
                <Field type="password" name="password" placeholder="Password" />
              </div>
              <div>
                <ErrorMessage name="password" />
              </div>
            </div>

            <div className="forgot">
              <p>
                <Link>Forgot Password ?</Link>
              </p>
            </div>

            <div className="inputWrapper">
              <button type="submit">Submit</button>
            </div>

            <div>
              <p>
                Don't have any Account?
                <span>
                  <Link>SignUp</Link>
                </span>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
