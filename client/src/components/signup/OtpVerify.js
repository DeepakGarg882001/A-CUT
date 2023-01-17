import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/otpverify.css"
import logo from "../../Assets/logo.png";


const OtpVerify = () => {
      return (
            <>
                  <div className="otpverify_main">
                        <img src={logo} alt="" />
                        <div className="otpverify">
                              <h2>
                                    Hurry Up !! verifing account</h2>
                        </div>
                        <input type="text" placeholder="Enter Otp" id="verify_input"
                        />

                        <div className="otpbutton">
                              <Link to="">
                                    <button className="submitotp"> Submit Otp</button>
                              </Link>
                        </div>
                  </div>


            </>
      )
}

export default OtpVerify
