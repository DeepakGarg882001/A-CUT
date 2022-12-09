import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Link ,useNavigate} from "react-router-dom";



import "../../styles/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_inner">
        <div className="connect">
          <h1 id="connect">Connect Us</h1>
          <div className="icon">
            <Link to="/"><AiFillInstagram  id ="social"/></Link>
            <Link to="/"><AiFillFacebook  className ="facebook" id ="social"/></Link>
            <Link to="/"><AiFillTwitterCircle id ="social" /></Link>
            <Link to="/"><SiGmail  id ="social"/></Link>
           <h4 id ="footer_bootom">@CopyRight: www.haircut.com :Design By RedCoder </h4>
          <h4 id ="footer_bootom">All Rights Reserved</h4>
          </div>
        </div>

        </div>
      

      </div>
    </>
  )
}

export default Footer;