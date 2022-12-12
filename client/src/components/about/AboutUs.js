import React from "react";
import img1 from "../../Assets/about1.png";
import "../../styles/about.css";
import mem1img from "../../Assets/team_img1.jpg";

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
            
          <div className="team_member" id="jitu_details">JITENDRA KUMAR </div>
          {/* <img src={mem1img} alt="loading" id="team_img" /> */}
          <div className="team_member" id ="garg_details">DEEPAK GARG</div>
          <div className="team_member" id="sharma_details">JOGINDER SHARMA</div>

        
        </div>

      </div>
    </>
  );
};

export default AboutUs;
