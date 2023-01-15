import React, { useState } from "react";
import "../../styles/navbar.css";
import Menu from "./Menu";
import logo from "../../Assets/logo.png";

import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import userAvtar from "../../Assets/shop3.jpg";

const NavBar = () => {
  const [activePanel, setActivePanel] = useState("none");
  const user = useSelector((state) => state.userReducer);
  const url = process.env.REACT_APP_SERVER_URL;
  const location = useLocation().pathname;

  return (
    <>
      <div className="canvas-navbar">
        <div
          className="canvas-navbar-side-panel"
          style={{ display: activePanel }}>
          <div className="under-side-panel-navbar">
            <div className="side-panel-close-sec">
              <MdClose onClick={() => setActivePanel("none")} />
            </div>

            <div className="side-panel-menu">
              <Menu setActivePanel={setActivePanel} />
            </div>
          </div>
        </div>

        <div
          className="navbar-canvas-header"
          style={{
            backgroundImage:
              location === "/contact"
                ? "linear-gradient(19deg, #1c004f , #3e0026,#55000c)"
                : "",
          }}
        >
          <div className="navbar-header-left">
            <div className="navbar-header-left-icon">
              <MdOutlineMenu onClick={() => setActivePanel("block")} />
            </div>
            <Link style={{ textDecoration: "none" }} to="/">
              <div className="canvs-navbar-cmp-sec">
                <div className="under-navbar-cpm-sec">
                  <img src={logo} className="navbar-cpm-logo" alt="company_logo"/>
                </div>
                <div className="under-navbar-cpm-sec">
                  <h1 className="navbar-cpm-name"> A-CUT </h1>
                </div>
              </div>
            </Link>
          </div>

          <div className="navbar-header-right">
            {user.token ? (
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <div className="navbar-header-profile">
                  <img
                    className="navbar-header-profile-img"
                    src={
                      user.image ? `${url}/${user.image.filePath}` : userAvtar
                    }
                    alt="user_img"
                  />
                </div>
              </Link>
            ) : (
              <div>
                {location === "/" || location === "/login" ? (
                  <ul className="navbar-header-right-btn-sec">
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <li className="navbar-header-right-btn navbar-signup">
                        Login
                      </li>
                    </Link>
                    <Link
                      to="/selectAccount"
                      style={{ textDecoration: "none" }}
                    >
                      <li className="navbar-header-right-btn "> Sign-Up</li>
                    </Link>
                  </ul>
                ) : null}
              </div>
            )}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
