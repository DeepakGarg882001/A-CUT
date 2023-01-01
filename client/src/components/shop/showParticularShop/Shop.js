import React,{useEffect} from "react";
import "../../../styles/shop1.css";
// import * as geolib from "geolib";
import DaySchedule from "./DaySchedule";
import SelectServices from "./SelectServices";
import BookNow from "./BookNow";
import { clearBookingData } from "../../../redux/action/bookShopSlotAction";

import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";

// import { Link, useNavigate, useParams } from "react-router-dom";

const Shop = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();

  const result = useSelector((state) => state.bookShopSlotDataReducer);
  const userData = useSelector((state) => state.userReducer);
  const ShopData = useSelector((state) => state.particularShopReducer);
  const userLocation = useSelector((state) => state.userLocationReducer);
    
  const date = new Date();
  const day = date.toString().substring(0, 3);

  const allDays = ShopData.length !== 0 ? ShopData.shop_time : [];

  let openTime;
  let closeTime;
  const { Mon, Tue, Wed, Fri, Sat, Sun, Thu } = allDays;

  // Getting the Shop Opentime and CloseTime of Today
  switch (day) {
    case "Mon":
      openTime = Mon.open;
      closeTime = Mon.close;
      break;

    case "Tue":
      openTime = Tue.open;
      closeTime = Tue.close;
      break;

    case "Wed":
      openTime = Wed.open;
      closeTime = Wed.close;
      break;

    case "Thu":
      openTime = Thu.open;
      closeTime = Thu.close;
      break;

    case "Fri":
      openTime = Fri.open;
      closeTime = Fri.close;
      break;

    case "Sat":
      openTime = Sat.open;
      closeTime = Sat.close;
      break;

    case "Sun":
      openTime = Sun.open;
      closeTime = Sun.close;
      break;
    default:
      break;
  }






  useEffect(() => {
    dispatch(clearBookingData());
  }, []);



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
            <DaySchedule data={ShopData} time={{openTime,closeTime}} />
          </div>
          <div className="shop-services">
            <SelectServices data={ShopData} time={{openTime,closeTime}} />
            
            <BookNow data={ShopData}/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Shop;

