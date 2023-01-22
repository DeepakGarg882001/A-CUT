import React, { useState } from "react";
import "../../styles/navbar.css";
import Menu from "./Menu";
import logo from "../../Assets/logo.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import userAvtar from "../../Assets/shop3.jpg";
import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
// import Menu from '@mui/material/Menu';
const NavBar = () => {
  const [activePanel, setActivePanel] = useState("none");
  const user = useSelector((state) => state.userReducer);
  const url = process.env.REACT_APP_SERVER_URL;
  const location = useLocation().pathname;
  const navigate = useNavigate();
  //dropdown
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="canvas-navbar">
        <div
          className="canvas-navbar-side-panel"
          style={{ display: activePanel }}
        >
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
                  <img
                    src={logo}
                    className="navbar-cpm-logo"
                    alt="company_logo"
                  />
                </div>
                <div className="under-navbar-cpm-sec">
                  <h1 className="navbar-cpm-name">
                    {" "}
                    <i>Salon Dekho</i>{" "}
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="navbar-header-right">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="all_shops">
                <li>Shops</li>
              </Link>
            </ul>
            {user.token ? (
              <Link to="/profile" style={{ textDecoration: "none" }}>
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
                <ul className="navbar-header-right-btn-sec">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <li className="navbar-header-right-btn navbar-signup">
                      Login
                    </li>
                  </Link>
                  <Link to="/selectAccount" style={{ textDecoration: "none" }}>
                    <li className="navbar-header-right-btn "> Sign-Up</li>
                  </Link>
                </ul>
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
