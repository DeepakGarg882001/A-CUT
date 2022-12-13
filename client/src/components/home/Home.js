import React,{useEffect} from "react";
import "../../styles/home.css";
import video from "../../Assets/video.mp4";
import s1 from "../../Assets/home1.jpg";
import s2 from "../../Assets/home2.jpg";
import s3 from "../../Assets/home3.jpg";
import Services from "../plateformServices/PlateformServices";
import { Link } from "react-router-dom";
import ShopContainer from "../shop/showParticularShop/ShopContainer";
import {useDispatch,useSelector} from "react-redux";
import getPlateformServiceListAction from "../../redux/action/getPlateformServicesAction";



 const  Home=()=> {

  const dispatch = useDispatch();
  const AllServices = useSelector( (state)=> state.plateformServiceReducer);

  useEffect(()=>{
    dispatch(getPlateformServiceListAction());
  },[]);

  return (
    <>
      <div>
        <div className="Work-flow">
          <h2>Total work flow of this app by seing below video</h2>
          <video controls>
            <source src={video} type="video/mp4" id="video" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="shops">
          <h2 id="labela-about">Available Shops</h2>
          <div className="individual">
            <ShopContainer
            name="hello"
            img={s1}
            />
            <ShopContainer
            name="hi"
            img={s2}
            />
            <ShopContainer
            name="hello"
            img={s3}
            />
          </div>
        </div>
      </div>

      <div>
        <div >
          <h2 id="labela-about">Our Service</h2>
        </div>
        <div className="services_home">
          {AllServices.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <Link>
                  <Services data={data} />
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
