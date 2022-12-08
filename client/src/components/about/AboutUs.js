import React from "react";
import img1 from "../../Assets/about1.png";
import "../../styles/about.css";

const AboutUs = () => {
  return (
    <>
      <div className="about">
        <div className="about-img">
          <img src={img1} alt="loading" />
        </div>
        <div className="about-content">
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
    </>
  );
};

export default AboutUs;
