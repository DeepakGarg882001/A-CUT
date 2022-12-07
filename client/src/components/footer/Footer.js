import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";


import "../../styles/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="connect">
          <h1 id="connect">Connect Us</h1>
          <div className="icon">
            <a href=""><AiFillInstagram  id ="social"/></a>
            <a href=""><AiFillFacebook  className ="facebook" id ="social"/></a>
            <a href=""><AiFillTwitterCircle id ="social" /></a>
            <a href=""><SiGmail  id ="social"/></a>
          </div>
          <h4 id ="footer_bootom">@CopyRight: www.haircut.com :Design By RedCoder </h4>
          <h4 id ="footer_bootom">All Rights Reserved</h4>
        </div>

      </div>
    </>
  )
}

export default Footer;