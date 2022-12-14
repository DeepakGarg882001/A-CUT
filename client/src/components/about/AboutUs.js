import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import img1 from "../../Assets/about1.png";
import "../../styles/about.css";
import mem1img from "../../Assets/team_img1.jpg";
import { INSTA_ACC, GITHUB_ACC, FB_ACC, LINKEDIN_ACC, You_TUBE } from "../Constants";


const AboutUs = () => {
  return (
    <>
      <div className="about-page">

        <div className="about">
          <div className="about-img">
            <img src={img1} alt="loading" />
          </div>
          <div className="about-content">
            <p className="about_main">ABOUT OUR APP</p>
            <p>Our motivation for making this app is to save the time.
              Whenever we are going in a saloon for the Hair Cut ,In most
              of the time the crowd of peoples are sitting there and
              we have to wait for hours. So this kind of problem is solved
              by our app. With the help of this app we can see the waiting
              list from our home and according to our free time we can book
              our slot and track the waiting list.There is an another
              feature in this app like we choose the shop by their rating.
            </p>
          </div>
        </div>

        <div className="team_main">
          <p id="team_heading">Team Member</p>

          <div className="team_inner">

            <div className="team_member" id="jitu_details">
              Deepak Garg
              <div className="imgabout">
                <img src={mem1img} alt="loading" id="team_img" />
                <div className="about_social_media">
                  <div className="about_social_links">
                    <a href="" target="_self" id="about_icon">  <FaLinkedinIn /> </a>
                    <a href="" target="_self" id="about_icon">  <AiFillGithub /> </a>
                    <a href="" target="_self" id="about_icon">  <AiOutlineYoutube /> </a>
                    <a href="" target="_self" id="about_icon">  <FaFacebookF /> </a>
                    <a href="" target="_self" id="about_icon">  <FaInstagram /> </a>
                  </div>

                </div>

              </div>
            </div>

            <div className="team_member" id="jitu_details">
              Joginder Gautam
              <div className="imgabout">
                <img src={mem1img} alt="loading" id="team_img" />
                <div className="about_social_media">
                  <div className="about_social_links">
                    <a href="" target="_self" id="about_icon">  <FaLinkedinIn /> </a>
                    <a href="" target="_self" id="about_icon">  <AiFillGithub /> </a>
                    <a href="" target="_self" id="about_icon">  <AiOutlineYoutube /> </a>
                    <a href="" target="_self" id="about_icon">  <FaFacebookF /> </a>
                    <a href="" target="_self" id="about_icon">  <FaInstagram /> </a>
                  </div>

                </div>

              </div>
            </div>

            <div className="team_member" id="jitu_details">
              Jitendra Kumar
              <div className="imgabout">
                <img src={mem1img} alt="loading" id="team_img" />
                <div className="about_social_media">
                  <div className="about_social_links">
                    <a href="https://www.linkedin.com/in/jitendra-kumar-5214261a9/" target="_self" id="about_icon">  <FaLinkedinIn /> </a>
                    <a href="https://github.com/jitendra-191906" target="_self" id="about_icon">  <AiFillGithub /> </a>
                    <a href="https://www.youtube.com/channel/UCc0UvKHN38t7Z0R-yOTIRBQ" target="_self" id="about_icon">  <AiOutlineYoutube /> </a>
                    <a href="https://www.facebook.com/profile.php?id=100012428051222" target="_self" id="about_icon">  <FaFacebookF /> </a>
                    <a href="https://www.instagram.com/jitendra_jaat_123/" target="_self" id="about_icon">  <FaInstagram /> </a>
                  </div>

                </div>

              </div>
            </div>


          </div>

        </div>
      </div>

    </>
  );
};

export default AboutUs;
