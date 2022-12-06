import React from "react";
import "../../styles/navbar.css";

import { Link,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { LogOut_User } from "../../redux/action/Current_User_Action";
import tempimg from "../../Assets/shop3.jpg";

const NavBar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const data = useSelector((state) => state.Current_User_Reducer);

	const logoutUser = ()=>{
		dispatch(LogOut_User());  
		navigate("/");
	}
    
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h3>Logo</h3>
        </div>
        <ul className="menu">
          <Link to="/">
            <li className="item" id="home">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="item" id="about">
              About
            </li>
          </Link>
          <Link to="/services">
            <li className="item" id="services">
              Services
            </li>
          </Link>
          {data.length !== 0 ? (
			
				<li className="item button" onClick={logoutUser}> Logout </li>
			
		  ) : (
            <>
              <Link to="/login">
                <li className="item button" id="log">
                  LogIn
                </li>
              </Link>
              <Link to="/signup">
                <li className="item button " id="sign">
                  SignUp
                </li>
              </Link>
            </>
          )}

          {data.length !== 0 ? (
            <li className="user-Profile-sec" >
              <div className="user-Profile">
                <img className="user-Profile-img" src = {tempimg} alt="user profile" />
              </div>
            </li>
          ) : null}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
