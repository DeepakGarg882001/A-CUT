import React from 'react'
import "../../styles/home.css";
import video from "../../Assets/video.mp4";
import s1 from "../../Assets/home1.jpg";
import s2 from "../../Assets/home2.jpg";
import s3 from "../../Assets/home3.jpg";
const Home = () => {
  return (
    <>
    <div>
      <div className="Work-flow">
        <h2>Total work flow of this app by seing below video</h2>
        <video controls>
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
      </div>
      <div className="shops">
        <h2>Available Shops</h2>
        <div className='individual'>
          <div className="individual-shop">
            <h3>shop1</h3>
            <img src={s1} alt="img" />
            <button className='btn'>Book Now</button>
          </div>
          <div className="individual-shop">
            <h3>shop2</h3>
            <img src={s2} alt="img" />
            <button className='btn'>Book Now</button>
          </div>
          <div className="individual-shop">
            <h3>shop3</h3>
            <img src={s3} alt="img" />
            <button className='btn'>Book Now</button>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Home;