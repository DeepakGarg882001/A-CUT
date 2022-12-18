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
import getAllShopAction from "../../redux/action/allShopsAction";
import userLocationAction from "../../redux/action/userLocationAction";

 const  Home=()=> {

  const dispatch = useDispatch();
  const AllServices = useSelector( (state)=> state.plateformServiceReducer);
  const AllShops = useSelector( (state)=> state.allShopDataReducer);
  
  const getUserLocation =()=>{

    navigator.geolocation.getCurrentPosition( (position)=>{
      dispatch(userLocationAction({latitude:position.coords.latitude,longitude:position.coords.longitude}))
    })

  }


  useEffect(()=>{
    dispatch(getPlateformServiceListAction());
    dispatch(getAllShopAction());
    getUserLocation()
    

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
          {AllShops.length !=0? AllShops.map((data,index)=>{
            return(
              <React.Fragment key={index}>
              <ShopContainer 
              data={data}
            /> 
              </React.Fragment>
            )
          }):(<div><h3>No Shop is Available</h3></div>)}
           
            
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
              <React.Fragment key={index}  >
                <Link className="servicesabc" to="/all_shops" onClick={()=>dispatch(getAllShopAction(data.service_name))}>
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
