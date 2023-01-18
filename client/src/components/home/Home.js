import React, { useEffect } from "react";
import "../../styles/home.css";
import logo from "../../Assets/logo.png";
import Services from "../plateformServices/PlateformServices";
import { Link } from "react-router-dom";
import ShopContainer from "../shop/showParticularShop/ShopContainer";
import { useDispatch, useSelector } from "react-redux";
import getPlateformServiceListAction from "../../redux/action/getPlateformServicesAction";
import { getAllShopAction } from "../../redux/action/allShopsAction";
import userLocationAction from "../../redux/action/userLocationAction";
import imgg from "../../Assets/home.png";

const Home = () => {

  const dispatch = useDispatch();
  const AllServices = useSelector((state) => state.plateformServiceReducer);
  const AllShops = useSelector((state) => state.allShopDataReducer);

  const getUserLocation = () => {

    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(userLocationAction({ latitude: position.coords.latitude, longitude: position.coords.longitude }))
    })

  }


  useEffect(() => {
    dispatch(getPlateformServiceListAction());
    dispatch(getAllShopAction());
    getUserLocation();


  }, []);

  return (
    <>
      <div>

        <div className="home_page">
          <div className="home1">
            <img src={imgg} alt="loading" />


          </div>
          {/* //scrolling or alternate */}
          <div className="home2">
            <div className="home_contain">
              <h1>|| WELCOME ||</h1>

              <h3>Start Journey With  CikUra</h3>
            </div>
            <div className="home_logo">
              <img src={logo} alt="loading" />

            </div>


          </div>
        </div>
        <div className="shops">
          <h2 id="labela-about">Available Shops</h2>
          <div className="individual">
            {AllShops.length !== 0 ? AllShops.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <ShopContainer
                    data={data}
                  />
                </React.Fragment>
              )
            }) : (<div><h3>No Shop is Available</h3></div>)}


          </div>
        </div>
      </div>

      <div>
        <div >
          <h2 id="labela-about">Our Services</h2>
        </div>

        <div className="services_home">
          {AllServices.map((data, index) => {
            return (
              <React.Fragment key={index}  >
                <Link className="servicesabc" to="/all_shops" onClick={() => dispatch(getAllShopAction(data.service_name))}>
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
