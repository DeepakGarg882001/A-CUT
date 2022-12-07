import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

import "../../styles/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="connect">
          <h1 id="connect">Connect Us</h1>
          <div className="icon">
            <Link><AiFillInstagram  id ="social"/></Link>
            <Link><AiFillFacebook  className ="facebook" id ="social"/></Link>
            <Link><AiFillTwitterCircle id ="social" /></Link>
            <Link><SiGmail  id ="social"/></Link>
          </div>
          <h4 id ="footer_bootom">@CopyRight:www.haircut.com :Design By RedCoder </h4>
          <h4 id ="footer_bootom">All Rights Reserved</h4>
        </div>

      </div>
    </>
  )
}

export default Footer;