import React, { useEffect, useState } from "react";
import "../../../styles/shop1.css";
import DaySchedule from "./DaySchedule";
import SelectServices from "./SelectServices";
import BookNow from "./BookNow";
import { clearBookingData } from "../../../redux/action/bookShopSlotAction";
import { updateDate, updateCounterNumber } from "../../../redux/action/bookShopSlotAction";
import { useDispatch, useSelector } from "react-redux";
import { bookedSlotsAction } from "../../../redux/action/bookedSlotsAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Field } from "formik";


const Shop = () => {
  const dispatch = useDispatch();
  const ShopData = useSelector((state) => state.particularShopReducer);
  const userLocation = useSelector((state) => state.userLocationReducer);
  const bookingData = useSelector((state) => state.bookShopSlotDataReducer);

  const image_url = process.env.REACT_APP_IMAGE_URL;
  const crrAvtar = ShopData.image ? `${image_url}/${ShopData.image.filePath}` : "";

  // working with Date
  const todayDate = new Date();
  const minDate = todayDate.toJSON().substring(0, 10);
  const [date, setDate] = useState(todayDate);
  const generateDate = new Date(date);
  const day = generateDate.toString().substring(0, 3);
  const showingDate = generateDate.toDateString();
  const defaultDateValue = generateDate.toJSON().substring(0, 10);

  // changing Date value
  const changeDate = (value) => {
    let changedValue = new Date(value);
    if (changedValue > todayDate) {
      setDate(value);
    } else if (changedValue <= todayDate) {
      setDate(todayDate);
    }
  };

  const allDays = ShopData.length !== 0 ? ShopData.shop_time : [];

  let openTime;
  let closeTime;
  const { Mon, Tue, Wed, Fri, Sat, Sun, Thu } = allDays != [] ? allDays : [];

  if (allDays.length != 0) {
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
  }

  const shopCounters = ShopData.length === 0 ? [] : ShopData.shop_counters;

  useEffect(() => {
    dispatch(updateDate(showingDate));

    if (ShopData.length !== 0) {
      dispatch(
        bookedSlotsAction({
          shop_name: ShopData.shop_name,
          shop_id: ShopData._id,
          date: showingDate,
          counter_number: bookingData.counter_number,
        })
      );
    }
  }, [showingDate, bookingData.counter_number]);

  useEffect(() => {
    dispatch(clearBookingData());
  }, []);

  // Converting Hours into of 12 formate
  const convertToHr = (value) => {
    if (value > 12) {
      return value - 12;
    } else {
      return value;
    }
  };

  // Converting The Shop Time
  const convertTime = (number) => {

    const nonDecimal = Math.floor(number);
    const decimalValue = number - nonDecimal;
    let hour = convertToHr(nonDecimal);

    switch (decimalValue) {
      case 0:
        return `${hour}:00 ${nonDecimal >= 12 ? "PM" : "AM"}`;

      case 0.25:
        return `${hour}:15 ${nonDecimal >= 12 ? "PM" : "AM"}`;
      case 0.5:
        return `${hour}:30 ${nonDecimal >= 12 ? "PM" : "AM"}`;
      case 0.75:
        return `${hour}:45 ${nonDecimal >= 12 ? "PM" : "AM"}`;

      default: break;
    }

  }

  return (
    <>
      <header id="header">
        <div>

          {crrAvtar !== "" ? <img src={crrAvtar}
            className="shop_details"
            alt="shop_img" /> :
            <div className="" >Add Linear Gradient</div>
          }
        </div>


        <div className="shop-details">
          <h2> Shop Name :-{ShopData.shop_name}</h2>
          <div className="owner-detail">
            <div className="owner-name">
              <h3>
                <span> Owner Name:-{ShopData.owner_name}</span>
              </h3>
              <h3>
                <span> Address:-{ShopData.shop_address}</span>
              </h3>
            </div>
            <div className="rating">
              <h3>
                <span> Mobile no:-{ShopData.shop_mobile}</span>
              </h3>
              <h3>
                <span>Rating</span>
              </h3>
            </div>
            <div className="shop-timing">
              <h3>
                <span>
                  Shop Timing <span /> ➤ <span /> {convertTime(openTime)} - {convertTime(closeTime)}
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Choose Your Date:-</h3>
            <p>
              Date : <span>{showingDate}</span>{" "}
              <input
                type="date"
                className="shop-canvas-choose-date"
                required
                min={minDate}
                defaultValue={defaultDateValue}
                onChange={(e) => changeDate(e.target.value)}
              />
            </p>
          </div>
          <h3>Select Counter For Booking:-</h3>


            {shopCounters !== []
              ? shopCounters.map((data, index) => {
               
                return (

                  <React.Fragment key={index}>

                    <div onClick={() => dispatch(updateCounterNumber(data.counter_number))}>
                      <button className="counter_no">Counter : {data.counter_number} </button>
                    </div>

                  </React.Fragment>

                );
              })
              : null}
        </div>

        <div className="booking-details">
          <div className="schdule-time">
            <h1>Choose Your Time Slot</h1>
            <DaySchedule data={ShopData} time={{ openTime, closeTime }} />
          </div>
          <div className="shop-services">
            <div className="service-headline">
              <h1>Select Services</h1>
              <h2>Services</h2>
            </div>
            <SelectServices data={ShopData} time={{ openTime, closeTime }} />
            <BookNow shopData={ShopData} />
          </div>
        </div>

        <div className ="shop_location" >
          Follow the path For Reach Our Shop
          {ShopData.length !== 0 ? (<iframe 
            width="100%"
            height="100%"
            title="shop_location"
            src={`https://maps.google.com/maps?q=${ShopData.shop_location.latitude},${ShopData.shop_location.longitude}&z=14&output=embed`}
          ></iframe>) : null}

        </div>

      </header>
    </>
  );
};

export default Shop;
