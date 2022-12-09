import React from 'react'
import "../../styles/home.css";
import video from "../../Assets/video.mp4";
import s1 from "../../Assets/home1.jpg";
import s2 from "../../Assets/home2.jpg";
import s3 from "../../Assets/home3.jpg";
import Services from '../services/Services';
import {Link} from "react-router-dom";


const Home = () => {

  const AllServices = [];
  return (
    <>
    <div className="home_main">
      <div className="Work-flow">
        <h2>Total work flow of this app by seing below video</h2>
        <video controls>
        <source src={video} type="video/mp4" id ="video"/>
        Your browser does not support the video tag.
        </video>
      </div>
      <div className="shops">
        <h2>Available Shops</h2>
        <div className='individual'>
          <div className="individual-shop">
            {/* shop start */}
            <h3>Shop Name 1</h3>
            <img src={s1} alt="img" />
            <button className='btn'>Book Now</button>
          </div>
          <div className="individual-shop">
            <h3>Shop Name 2</h3>
            <img src={s2} alt="img" />
            <button className='btn'>Book Now</button>
          </div>
          <div className="individual-shop">
            <h3>Shop Name 3</h3>
            <img src={s3} alt="img" />
            <button className='btn'>Book Now</button>
          </div>
          </div>
      </div>
    </div>
     
     <div>
          <div>
            <h2>Our Service</h2>
          </div>
          <div>
            {AllServices.map((data,index)=>{
              return(  
                <React.Fragment key={index}>
                  <Link>
                     <Services data={data}/>
                  </Link>
                </React.Fragment>         
              )
            })}
          </div>
     </div>


    </>
  )
}

export default Home;