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
import { MdOutlineContactPhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";



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
  const currentPrice = (data) => {
    return data.price - (data.price / 100) * data.offer;
  };

  useEffect(() => {
    convertDistance();
  }, []);

  return (
    <>

      <div className="shoplayout">

        <div className="showshopcontainer">
          <div className="showshop_section1">
            <div className="showshop_name">
              <h4 className="showshop_section1_shop_items"> Shop Name:-{data.shop_name}</h4>
            </div>
            <div className="showshop_contact">
              <h4 className="showshop_section1_shop_items">< GrLocation />{data.shop_address}</h4>
              <h4 className="showshop_section1_shop_items"><MdOutlineContactPhone />{data.shop_mobile}</h4>

            </div>

          </div>
          <div className="showshop_section2">



            {data.shop_services.length !== 0 ? data.shop_services.map((data, index) => {
              return (
                <React.Fragment key={index}>

                  <div className="show-shop-services">
                    <div className="showshop_section2_showshop_details">
                      <p>{data.service_name}</p>
                    </div>
                    <div className="showshop_details">
                      <del className="showshop_section2_shop_items">{data.price}</del>
                    </div>
                    <div className="showshop_details">
                      <p className="showshop_section2_shop_items">{currentPrice(data)}</p>
                    </div>
                    <div className="showshop_details">
                      <p className="showshop_section2_shop_items">{data.offer} % </p>
                    </div>
                  </div>
                </React.Fragment>
              )
            }) : (<p>Does not Provide any Services</p>)}
          </div>
          <div className="showshop_section3">
            <div className="location">
              <div id="dis" className="showshop_section3_shop_items">{distanceFromUser} Away  </div>
            </div>
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
              <div className="booknow">
                <button>Book Appointmemt</button>

              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
