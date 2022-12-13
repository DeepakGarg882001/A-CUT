import React from "react";
import * as yup from "yup";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import "../../styles/login.css";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDataAction } from "../../redux/action/userAction";
import { getOwnerShopDataAction } from "../../redux/action/ownerShopAction";
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
      dispatch(userDataAction(response.data));

      if(response.data.userRole.role==="owner"){
         if(response.data.shop_id){
           navigate("/owner");
           dispatch(getOwnerShopDataAction());
         }else{
           navigate("/owner/createShop");
         }
      }else if(response.data.userRole.role==="admin"){
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <>
      <div className="loginInner">
        <Formik
          initialValues={initialFormData}
          validationSchema={formValidation}
          onSubmit={(values, { resetForm }) => {
            postDataToServer(values);
            resetForm();
          }}
        >
          <Form className="login_page">
            <div className="heading">
              <h2>LOGIN</h2>
            </div>
            <div className="inputWrapper">
              <div className="inputInner">
                <div >
                  <FaUserAlt className="icon" />
                </div>
                <Field type="text" name="email" placeholder="Username" />
              </div>
              <div>
                <p id="error_msg"> <ErrorMessage name="email" /></p>
              </div>
            </div>
            <div className="inputWrapper">
              <div className="inputInner">
                <div >
                  <AiFillLock className="icon" />
                </div>
                <Field type="password" name="password" placeholder="Password" />
              </div>
              <div>
                <p id="error_msg"> <ErrorMessage name="password" /></p>
               </div>
            </div>

            <div className="forgot_login">
              <p >
                <Link to="/forgotPass" className="forgpass">Forgot Password ?</Link>
              </p>
            </div>

            <div className="inputWrapper">
              <button type="submit">Submit</button>
            </div>

            <div>
              <p className="no_account">
                Don't have any Account?
                <span>
                  <Link to="/selectAccount" id="login_signup"> SignUp</Link>
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
