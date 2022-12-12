import React from "react";
import "../../styles/footer.css";

import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

// import ieLife from "../../images/ieLife.png";

import {SiGooglemaps} from "react-icons/si";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md"

import { Link } from "react-router-dom";
import {INSTA_ACC,FB_ACC,LINKEDIN_ACC,CUH_LOC,Mob_NO,email_id,You_TUBE} from "../constants";


const Footer = () => {
  return (
    <>
      <div className="footer-canvas">
        <div className="footer-canvas-top">
          <div className="footer-top-name-sec">
            <h1 className="footer-top-name">BirdsHeartBeat</h1>
            <h3>NON-PROFIT ORGANIZATION </h3>
          </div>

          <div className="footer-top-icon-sec">
           <a href={LINKEDIN_ACC} target="_self" >  <FaLinkedinIn /> </a>
           <a href={You_TUBE} target="_self" >  <AiOutlineYoutube /> </a>
           <a href={FB_ACC} target="_self" >  <FaFacebookF /> </a>
           <a href={INSTA_ACC} target="_self" >  <FaInstagram /> </a>
          </div>
        </div>

        <div className="footer-canvas-middle" >
              
              <div className="footer-middle-ngo">
                <h1 className="footer-middle-ngo-name">BirdsHeartBeat</h1>
                <p>The moto of this Organization is to save Birds Life and reduce the problems created by Humans which they are facing.</p>
              </div>

              <div className="footer-middle-info-sec">
                <h1 className="footer-middle-info-name">Information</h1>
                <div className="footer-middle-info-details">
                   <Link to="/balance/utilise" > <p> Work Progress </p></Link>
                   <Link to="/donate" > <p> Donate? </p></Link>
                   <Link to="/balance" > <p> Check Balance </p></Link>
                   <Link to="/about" > <p> About </p></Link>
                   <Link to="/contact" > <p> Contact </p></Link>
                   <Link to="/suggestions" > <p> Suggestions </p></Link>
                </div>
              </div>

              <div className="footer-middle-basic-details">
                
                <a  href={CUH_LOC} target="_self" >
                <div className="footer-middle-basic-text">
                  <SiGooglemaps /> <span className="footer-basic-detail-text">Central University of Haryana </span>
                </div>
                </a>

                <a href={`tel:${Mob_NO}`} target="_self" >
                <div className="footer-middle-basic-text">
                  <FaPhoneAlt /> <span className="footer-basic-detail-text"> (+91) {Mob_NO} </span>
                </div>
                </a>

                <a  href={`mailto:${email_id}`} target="_self">
                <div className="footer-middle-basic-text">
                 <MdEmail /> <span className="footer-basic-detail-text"> {email_id} </span>
                </div>
                </a>
                 
              </div>
        </div>

        <div className="footer-canvas-bottom">
          <div> Copyright © 2022 | All rights reserved </div>
          <div className="footer-bottom-org">
            <p>
              This Organization is made with 🤍 by{" "}
              </p> 
              <span>
                <img  className="footer-life-img"/>
              </span>
            
          </div>
        </div>
        

        </div>
      
    </>
  );
};

export default Footer;
