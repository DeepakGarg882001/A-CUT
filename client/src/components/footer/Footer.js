import React from "react";
import "../../styles/footer.css";

import {  FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  INSTA_ACC,FB_ACC,LINKEDIN_ACC,CUH_LOC,Mob_NO,email_id,You_TUBE,} from "../Constants";

const Footer = () => {
  return (
    <>

      <div className="footer-canvas">
    
        <div className="footer-canvas-middle">
          <div className="footer-middle-ngo">
            <h1 className="footer-middle-ngo-name">A CUT</h1>
            <p>
              The moto of this application is to save time </p>
          </div>

          <div className="footer-middle-info-sec">
            <h1 className="footer-middle-info-name">Information</h1>
            <div className="footer-middle-info-details">
              <Link to="/" className="info_items">
                {" "}
                <p> Home </p>
              </Link>
              <Link to="/about" className="info_items">
                {" "}
                <p> About </p>
              </Link>
              <Link to="/contact" className="info_items">
                {" "}
                <p> Contact </p>
              </Link>
              <Link to="/all_shops" className="info_items">
                {" "}
                <p> All Shops </p>
              </Link>
            </div>
          </div>

          <div className="footer-middle-basic-details">
            <p className="footer-middle-info-name">Location</p>

            <a href={CUH_LOC} target="_self" id="location_items">
              <div className="footer-middle-basic-text">
                <SiGooglemaps />{" "}
                <span className="footer-basic-detail-text">
                  Central University of Haryana{" "}
                </span>
              </div>
            </a>

            <a href={`tel:${Mob_NO}`} target="_self" id="location_items">
              <div className="footer-middle-basic-text">
                <FaPhoneAlt />{" "}
                <p className="footer-basic-detail-text"> (+91) {Mob_NO} </p>
              </div>
            </a>

            <a href={`mailto:${email_id}`} target="_self" id="location_items">
              <div className="footer-middle-basic-text">
                <MdEmail />{" "}
                <span className="footer-basic-detail-text"> {email_id} </span>
              </div>
            </a>
          </div>
          <div className="footer-top-icon-sec">
            <p className="footer-middle-info-name">Social Media </p>
            <div className="footer_social">
              <a href={LINKEDIN_ACC} target="_self" id="footer_icon">
                {" "}
                <AiOutlineTwitter />{" "}
              </a>
              <a href={You_TUBE} target="_self">
                {" "}
                <AiOutlineYoutube id="footer_icon" />{" "}
              </a>
              <a href={FB_ACC} target="_self">
                {" "}
                <FaFacebookF id="footer_icon" />{" "}
              </a>
              <a href={INSTA_ACC} target="_self">
                {" "}
                <FaInstagram id="footer_icon" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-canvas-bottom">
          <div> Copyright © 2022 | All rights reserved </div>
          <div className="footer-bottom-org">
            <p>Made with 🤍 by Red Coders </p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
