import React, { useState } from "react";
import "../../styles/forgotPass.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

import forgotPassImg from "../../Assets/accessDenied.png";

const ForgotPass = () => {
  const [btnActive, setBtnActive] = useState(false);
  const cookie = new Cookies();
  const navigate = useNavigate();

  const initialData = {
    email: "",
  };

  const validation = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required !"),
  });

  const url = process.env.REACT_APP_SERVER_URL;

  return (
    <>
      <div className="forgotPass-canvas">
        <div className="forgotPass-left-sec">
          <img src={forgotPassImg} className="forgotPass-img" />
        </div>

        <div className="forgotPass-right-sec">
          <div className="forgotPass-right-top">
            <h1> Forgot Password?</h1>
          </div>

          <div className="forgotPass-right-middle">
            <p>Enter the email address associated with your account.</p>
          </div>

          <div>
            <Formik
              initialValues={initialData}
              validationSchema={validation}
              onSubmit={async (values, { resetForm }) => {
                setBtnActive(!btnActive);

                let timerInterval;
                const waitingAlert = Swal.fire({
                  title: "Sending the OTP ... ",
                  showConfirmButton: false,
                  html: "It may Take time upto  <b> </b> minutes .",
                  timer: 130000,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector("b");
                    timerInterval = setInterval(() => {
                       let min = Math.floor((Swal.getTimerLeft() / 1000 / 60) << 0);
                       let sec = Math.floor((Swal.getTimerLeft() / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
                      b.textContent = min+":"+sec;
                    }, 1000);
                  },
                });

                const makeRequest = await fetch(`${url}/user/forgot/pass`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                }).then(waitingAlert);

                const response = await makeRequest.json();

                if (response.token) {
                  cookie.set("BHB_FgPass", response.token);
                  Swal.fire("", "OTP has been send to your email", "success");
                  navigate("/user/forgot/enter/otp");
                } else {
                  if (response.error.message) {
                    Swal.fire(
                      response.error.name,
                      response.error.message,
                      "error"
                    );
                  } else {
                    Swal.fire("Sorry ", response.error, "error");
                  }
                }

                setBtnActive(false);
                resetForm();
              }}
            >
              <Form className="forgotPass-form">
                <Field
                  as={TextField}
                  variant="standard"
                  className="forgotPass-field"
                  placeholder="Enter Email Address"
                  name="email"
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdEmail className="field-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <ErrorMessage name="email" />

                <button
                  style={{
                    color: "white",
                    backgroundColor: btnActive ? "#d3c8e5" : "#ff418c",
                  }}
                  type="submit"
                  disabled={btnActive}
                  className="forgotPass-btn"
                >
                  Next
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
