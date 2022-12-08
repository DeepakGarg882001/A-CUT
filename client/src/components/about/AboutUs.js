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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            placeat est reprehenderit deleniti, ducimus provident aut alias odio
            adipisci pariatur, tempore illo labore amet ut doloremque facere
            odit ratione? Aspernatur ullam esse velit, pariatur dignissimos non
            nesciunt doloribus excepturi beatae magnam soluta rem itaque ad
            deserunt provident quo quidem obcaecati?
          </p>
        </div>
      </div>
      <div className="team_main">
      <p id="team_heading">Team Member</p>

        <div className="team_inner">
          <div className="team_member">JITENDRA KUMAR </div>
          <div className="team_member">DEEPAK GARG</div>
          <div className="team_member">JOGINDER SHARMA</div>
        </div>

      </div>
    </>
  );
};

export default AboutUs;
