import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getParticularShopData } from "../../../redux/action/particularShopAction";
import * as geolib from "geolib";
import "../../../styles/showShops.css";
import { getDistance } from "geolib";
import { clearBookingData } from "../../../redux/action/bookShopSlotAction";
import { bookedSlotsAction } from "../../../redux/action/bookedSlotsAction";
import { removeParticularShopData } from "../../../redux/action/particularShopAction";
import "../../../styles/shoplayout.css"
const ShopLayout = ({ data }) => {
  const userLocation = useSelector((state) => state.userLocationReducer);
  const dispatch = useDispatch();
  const distance = getDistance(
    { latitude: userLocation.latitude, longitude: userLocation.longitude },
    {
      latitude: data.shop_location.latitude,
      longitude: data.shop_location.longitude,
    }
  );
  console.log("data is", data);
  const [distanceFromUser, setDistanceFromUser] = useState(distance);

  const convertDistance = () => {
    if (distanceFromUser > 499) {
      setDistanceFromUser(
        `${geolib.convertDistance(distanceFromUser, "km").toFixed(1)} km`
      );
    } else {
      setDistanceFromUser(
        `${geolib.convertDistance(distanceFromUser, "m")} meter`
      );
    }
  };
  useEffect(() => {
    convertDistance();
  }, []);

  return (
    <>


      <div className="showshopcontainer">
        <div className="showshop_section1">
          <div className="showshop_name">
          <h2 className="shop_items"> Shop Name:-{data.shop_name}</h2>

          </div>
          <div className="showshop_contact"></div>

        </div>
        <div className="showshop_section1">
          <div className="showshop_details">

          </div>
        </div>
        <div className="showshop_section1">
<div className="location"></div>
        </div>
      </div>
      {/*
       <div className="allShop-one-list">
        <Link
          to="/showShopDetails"
          onClick={() => {
            dispatch(removeParticularShopData());
            dispatch(clearBookingData());
            dispatch(
              bookedSlotsAction({
                shop_name: data.shop_name,
                shop_id: data._id,
                date: new Date().toDateString(),
                counter_number: 1,
              })
            );
            dispatch(getParticularShopData(data._id));
          }}
          style={{ textDecoration: "none" }}
        >
        
          <div className="shoplayout">
            <div className="shop1items">
              <div >
                <p className="shop_items"> {data.shop_name}</p>
              </div>
              <div>
                <h2 className="shop_items"> Shop Address:-{data.shop_address}</h2>
              </div>
              <div>
                <h2> Services:-{data.shop_services.length!==0? data.shop_services.map((data,index)=>{
                  return(
                    <React.Fragment key={index}>
                    <span>{data.service_name} ,</span>

                    </React.Fragment>
                  )

                }) : (<span>Does Not Provide any Services yet</span>)}</h2>
              </div>
            </div>
            <div className="shop2items">
              <div>
                <h2 className="shop_items">Shop Mobile:-{data.shop_mobile}</h2>
              </div>
              
              <div id ="dis" className="shop_items">Distance:-{distanceFromUser}</div>
            </div>

          </div>

        </Link>
      </div> */}
    </>
  );
};

export default ShopLayout;
