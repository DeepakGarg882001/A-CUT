import React from "react";
import {BiUserCircle} from "react-icons/bi"
import {BsShieldLock} from "react-icons/bs";
import "./login.css";
const Login = () => {
  return (
    <>
      <div className="loginInner">
        <form action="">
          <div className="heading">
            <h2>LOGIN</h2>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BiUserCircle/>
              </div>
              <input type="text" name="" placeholder="Username" />
            </div>
          </div>
          <div className="inputWrapper">
            <div className="inputInner">
              <div className="icon">
                <BsShieldLock/>
              </div>
              <input type="password" name="" id="" placeholder="Password" />
            </div>
          </div>
          <div className="inputWrapper">
            <button>Submit</button>
          </div>
          <div className="forgot">
            <p><a href="#">Forgot Password ?</a></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
