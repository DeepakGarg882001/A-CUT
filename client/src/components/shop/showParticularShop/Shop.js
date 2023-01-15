import React, { useEffect, useState } from "react";
import "../../../styles/shop1.css";
// import * as geolib from "geolib";
import DaySchedule from "./DaySchedule";
import SelectServices from "./SelectServices";
import BookNow from "./BookNow";
import { clearBookingData } from "../../../redux/action/bookShopSlotAction";
import { updateDate } from "../../../redux/action/bookShopSlotAction";
import { useDispatch, useSelector } from "react-redux";
import { bookedSlotsAction } from "../../../redux/action/bookedSlotsAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
  const dispatch = useDispatch();

  const ShopData = useSelector((state) => state.particularShopReducer);
  const userLocation = useSelector((state) => state.userLocationReducer);
  const bookingData = useSelector((state) => state.bookShopSlotDataReducer);
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
  }, [showingDate]);

  useEffect(() => {
    dispatch(clearBookingData());
  }, []);

  return (
    <>
      <header id="header">
        {/* <ToastContainer /> */}
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
                  Shop Timing <span /> ➤ <span /> {openTime} AM TO  {closeTime} PM
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div>
          <div>
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

          {shopCounters !== []
            ? shopCounters.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <div>
                      <p>Counter : {data.counter_number}</p>
                    </div>
                  </React.Fragment>
                );
              })
            : null}
        </div>

        <div className="booking-details">
          <div className="schdule-time">
            <DaySchedule data={ShopData} time={{ openTime, closeTime }} />
          </div>
          <div className="shop-services">
            <div className="service-headline">
              <h2>Services</h2>
            </div>
            <SelectServices data={ShopData} time={{ openTime, closeTime }} />
            <BookNow shopData={ShopData} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Shop;
