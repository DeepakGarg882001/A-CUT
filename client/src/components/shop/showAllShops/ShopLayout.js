import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getParticularShopData } from "../../../redux/action/particularShopAction";
import * as geolib from "geolib";
import "../../../styles/showShops.css";
import { getDistance } from "geolib";
import { clearBookingData } from "../../../redux/action/bookShopSlotAction";


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
      <div className="allShop-one-list">
        <Link
          to="/showShopDetails"
          onClick={() => {
            dispatch(getParticularShopData(data._id));
            dispatch(clearBookingData());
            }}
          style={{ textDecoration: "none" }}
        >
          <div>
            <h2>{data.shop_name}</h2>
          </div>
          <div>{distanceFromUser}</div>
        </Link>
      </div>
    </>
  );
};

export default ShopLayout;
