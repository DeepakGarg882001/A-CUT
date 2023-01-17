import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/emailverify.css";
import logo from "../../Assets/logo.png";
import { useParams } from 'react-router-dom';

const EmailVerify = () => {
      let { role } = useParams();
      console.log(role);
      return (
            <>
                  <div className="emailverify_main">
                        <img src={logo} alt="wait" />
                        <div className="input_email">
                              <h1>Enter Your Valid Email Address</h1>
                        </div>
                        <input type="text" placeholder="enter your mail id" className="mail_button" />

                        <Link to="/otpverify">
                              <button className="email_otp">Request Otp</button>
                        </Link>
                        
                  </div>

            </>
      )
}

export default EmailVerify
