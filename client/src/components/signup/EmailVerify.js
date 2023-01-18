import React from "react";
import "../../styles/emailverify.css";
import logo from "../../Assets/logo.png";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import Cookie from "universal-cookie";

const EmailVerify = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  let { role } = useParams();

  const cookie = new Cookie();
  const navigate = useNavigate();
  const initialData = {
    email: "",
    role: role,
  };
  const validation = "";

  const postData = async (values) => {
    let timerInterval;
    const waitingAlert = Swal.fire({
      title: "Sending the OTP... ",
      showConfirmButton: false,
      html: "It may Take time upto  <b> </b> minutes .",
      timer: 130000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          let min = Math.floor((Swal.getTimerLeft() / 1000 / 60) << 0);
          let sec = Math.floor(
            (Swal.getTimerLeft() / 1000) % 60
          ).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          });
          b.textContent = min + ":" + sec;
        }, 1000);
      },
    });

    const makeRequest = await fetch(`${url}/verifyEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(waitingAlert);

    const response = await makeRequest.json();

    if (response.token) {
      cookie.set("A_CUT_Email", response.token);
      Swal.fire("", "OTP has been send to your email", "success");
      navigate("/otpverify");
    } else {
      if (response.error.message) {
        Swal.fire(response.error.name, response.error.message, "error");
      } else {
        Swal.fire("Sorry ", response.error, "error");
      }
    }
  };

  return (
    <>
      <div className="emailverify_main">
        <div>
          <img src={logo} alt="wait" />

        </div>

        <Formik
          initialValues={initialData}
          validationSchema={validation}
          onSubmit={(values, { resetForm }) => {
            postData(values);
            resetForm();
          }}
        >
       
            <Form >
              <div >
                <div className="email_verfiy">
                  <label className="mail_button1">Enter Your Email Address</label>

                </div>
                <div >
                  <Field type="email" name="email" className="mail_button" placeholder="enter your valid mail" />
                  <p>
                    <ErrorMessage name="email" />
                  </p>
                </div>

              </div>



          <div>
            <button type="submit" className="mail_otp">Next</button>
          </div>
        </Form>
      </Formik>
    </div>
    </>
  );
};

export default EmailVerify;
