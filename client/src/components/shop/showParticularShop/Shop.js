import React, { useState, useEffect } from "react";
import "../../../styles/shop1.css";
import * as geolib from "geolib";
import DaySchedule from "./DaySchedule";
import SelectServices from "./SelectServices";
import BookNow from "./BookNow";

import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { Link, useNavigate, useParams } from "react-router-dom";

const Shop = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();

  const result = useSelector((state) => state.bookShopSlotDataReducer);
  const userData = useSelector((state) => state.userReducer);
  const ShopData = useSelector((state) => state.particularShopReducer);
  const userLocation = useSelector((state) => state.userLocationReducer);
  // const distance = geolib.getPreciseDistance(
  //   userLocation,
  //   ShopData.shop_location
  // );
  // const [distanceFromUser, setDistanceFromUser] = useState(distance);

  // const convertDistance = () => {
  //   if (distanceFromUser > 499) {
  //     setDistanceFromUser(
  //       `${geolib.convertDistance(distanceFromUser, "km").toFixed(1)} km`
  //     );
  //   } else {
  //     setDistanceFromUser(
  //       `${geolib.convertDistance(distanceFromUser, "m")} meter`
  //     );
  //   }
  // };
  // useEffect(() => {
  //   convertDistance();
  // }, []);

  const userName = userData.name;


  return (
    <>
      <header id="header">
        <div className="shop-details">
          <h2>{ShopData.shop_name}</h2>
          <div className="owner-detail">
            <div className="owner-name">
              <h3>
                <span>{ShopData.owner_name}</span>
              </h3>
              <h3>
                <span>{ShopData.shop_address}</span>
              </h3>
            </div>
            <div className="rating">
              <h3>
                <span>{ShopData.shop_mobile}</span>
              </h3>
              <h3>
                <span>Rating</span>
              </h3>
            </div>
            <div className="shop-timing">
              <h3>
                <span>
                  Shop Timing <span /> ➤ <span /> 9:00 AM TO 7:00 PM
                </span>
              </h3>
            </div>
          </div>
         </div>

        <div>
           
           {ShopData.shop_counters.length !==0? ShopData.shop_counters.map( (data,index)=> {
            return(
              <React.Fragment key={index}>
                <div>
                  <p>Counter : {data.counter_number}</p>
                </div>
              </React.Fragment>
            )
           }) : null }

        </div>

        <div className="booking-details">
          <div className="schdule-time">
            <DaySchedule data={ShopData} />
          </div>
          <div className="shop-services">
            <SelectServices data={ShopData}/>
            
            <BookNow data={ShopData}/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Shop;

