import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import img1 from "../../Assets/about1.png";
import "../../styles/about.css";
import mem1img from "../../Assets/team_img1.jpg";
import { INSTA_ACC,GITHUB_ACC, FB_ACC, LINKEDIN_ACC,  You_TUBE } from "../Constants";


const AboutUs = () => {
  return (
    <>
      <div className="about">
        <div className="about-img">
          <img src={img1} alt="loading" />
        </div>
        <div className="about-content">
          <p className="about_main">ABOUT OUR APP</p>
          <p>Our motivation for making this app is to save the time.
            Whenever we are going in a saloon for the hair_cut ,In most
            of the time the croud of 5 to 6 people are sitting there and
            we have to wait for hours. So this kind of problem is solved
            by our app. With the help of this app we can see the waiting
            list from our home and according to our free time we can book
            our number and track the waiting list.There is an another
            feathure in this app like we choose the shop by their rating.
          </p>
        </div>
      </div>
      <div className="team_main">
        <p id="team_heading">Team Member</p>

        <div className="team_inner">

          <div className="team_member" id="jitu_details">
            DEEPAK GARG
            <div className="imgabout">
              <img src={mem1img} alt="loading" id="team_img" />
              <div className="about_social_media">
                <div className="about_social_links">
                  <Link href={LINKEDIN_ACC} target="_self" id="about_icon">  <FaLinkedinIn /> </Link>
                  <Link href={GITHUB_ACC} target="_self" >  <AiFillGithub id="about_icon" /> </Link>
                  <Link href={You_TUBE} target="_self" >  <AiOutlineYoutube id="about_icon" /> </Link>
                  <Link href={FB_ACC} target="_self" >  <FaFacebookF id="about_icon" /> </Link>
                  <Link href={INSTA_ACC} target="_self" >  <FaInstagram id="about_icon" /> </Link>
                </div>

              </div>

            </div>
          </div>
          <div className="team_member" id="garg_details">JOGENDER SHARMA
          <div className="imgabout">
              <img src={mem1img} alt="loading" id="team_img" />
              <div className="about_social_media">
                <div className="about_social_links">
                  <Link href={LINKEDIN_ACC} target="_self" id="about_icon">  <FaLinkedinIn /> </Link>
                  <Link href={GITHUB_ACC} target="_self" >  <AiFillGithub id="about_icon" /> </Link>
                  <Link href={You_TUBE} target="_self" >  <AiOutlineYoutube id="about_icon" /> </Link>
                  <Link href={FB_ACC} target="_self" >  <FaFacebookF id="about_icon" /> </Link>
                  <Link href={INSTA_ACC} target="_self" >  <FaInstagram id="about_icon" /> </Link>
                </div>

              </div>

            </div>
          </div>
          <div className="team_member" id="sharma_details">JITENDRA KUMAR
          <div className="imgabout">
              <img src={mem1img} alt="loading" id="team_img" />
              <div className="about_social_media">
                <div className="about_social_links">
                  <Link href="https://www.linkedin.com/in/jitendra-kumar-5214261a9/" target="_self" id="about_icon">  <FaLinkedinIn /> </Link>
                  <Link href={GITHUB_ACC} target="_self" >  <AiFillGithub id="about_icon" /> </Link>
                  <Link href={You_TUBE} target="_self" >  <AiOutlineYoutube id="about_icon" /> </Link>
                  <Link href={FB_ACC} target="_self" >  <FaFacebookF id="about_icon" /> </Link>
                  <Link href={INSTA_ACC} target="_self" >  <FaInstagram id="about_icon" /> </Link>
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
