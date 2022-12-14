import React from "react";
import "../../styles/menu.css";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import userImg from "../../Assets/shop3.jpg";
import getAllShopAction from "../../redux/action/allShopsAction";
import {
  MdHome,
  MdOutlineLogin,
  MdOutlineInfo,
  MdOutlineContactSupport,
  MdMiscellaneousServices,
  MdOutlineLogout,
} from "react-icons/md";
import { BsBoxArrowUpRight, BsShopWindow } from "react-icons/bs";

import { logoutUserDataAction } from "../../redux/action/userAction";


const Menu = ({ setActivePanel }) => {

  const dispatch = useDispatch();
  const url = process.env.REACT_APP_SERVER_URL;

  const user = useSelector((state) => state.userReducer);

  return (
    <>
      <div className="menu-canvas">
      
        {user.token ? (
          <div className="side-panel-profile">
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard"
              onClick={() => setActivePanel("none")}
            >
              <div className="side-panel-profile-img">
                <img
                  src={user.image ? `${url}/${user.image.filePath}` : userImg}
                  className="menu-profile-img"
                  alt="user_profile"
                />
              </div>
            </Link>
            <div className="side-panel-profile-name">
              <h1>{user.name}</h1>
            </div>
          </div>
        ) : null}

        <div className="side-panel-options">
          <ul className="menu-list-desk">
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => setActivePanel("none")}
            >
              <li className="menu-list-option">
                <MdHome /> Home
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/services"
              onClick={() => setActivePanel("none")}
            >
              <li className="menu-list-option">
                <MdMiscellaneousServices /> Services
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/all_shops"
              onClick={() =>{ 
                dispatch(getAllShopAction());
                setActivePanel("none");
                }}
            >
              <li className="menu-list-option">
                <BsShopWindow /> All Shops
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/about"
              onClick={() => setActivePanel("none")}
            >
              <li className="menu-list-option">
                <MdOutlineInfo /> About Us
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/contact"
              onClick={() => setActivePanel("none")}
            >
              <li className="menu-list-option">
                <MdOutlineContactSupport />
                Contact Us
              </li>
            </Link>

            {user.token ? (
              <Link
                to="/"
                onClick={() => {
                  dispatch(logoutUserDataAction());
                  setActivePanel("none");
                }}
              >
                <li className="menu-list-option">
                  <MdOutlineLogout /> Logout{" "}
                </li>
              </Link>
            ) : (
              <>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/selectAccount"
                  onClick={() => setActivePanel("none")}
                >
                  <li className="menu-list-option">
                    <BsBoxArrowUpRight /> SignUp
                  </li>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/login"
                  onClick={() => setActivePanel("none")}
                >
                  <li className="menu-list-option">
                    <MdOutlineLogin /> Login{" "}
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
