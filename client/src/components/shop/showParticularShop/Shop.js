import React, { useEffect, useState } from "react";
import "../../../styles/shop1.css";
import DaySchedule from "./DaySchedule";
import SelectServices from "./SelectServices";
import BookNow from "./BookNow";
import { clearBookingData } from "../../../redux/action/bookShopSlotAction";
import {
  updateDate,
  updateCounterNumber,
} from "../../../redux/action/bookShopSlotAction";
import { useDispatch, useSelector } from "react-redux";
import { bookedSlotsAction } from "../../../redux/action/bookedSlotsAction";
import "react-toastify/dist/ReactToastify.css";
import { BiUser } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import { IoCallOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";

const Shop = () => {
  const dispatch = useDispatch();
  const ShopData = useSelector((state) => state.particularShopReducer);
  const userLocation = useSelector((state) => state.userLocationReducer);
  const bookingData = useSelector((state) => state.bookShopSlotDataReducer);

  const image_url = process.env.REACT_APP_IMAGE_URL;
  const crrAvtar = ShopData.image
    ? `${image_url}/${ShopData.image.filePath}`
    : "";

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

  for (let k = 0; k < allDays.length; k++) {
    if (allDays[k].day === day) {
      openTime = allDays[k].open;
      closeTime = allDays[k].close;
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
    window.scrollTo({ top: 0, behavior: "smooth" });

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

      default:
        break;
    }
  };

  return (
    <>
      <div className="shopinfo">
        <div className="shopinfo1">
          <div className="shopinfo1_shopdetials">
            <h2> {ShopData.shop_name}</h2>
            <p>
              <span>
                {" "}
                <AiFillStar style={{ color: "green" }} /> {ShopData.shop_rating}
              </span>
            </p>

            <p>
              {" "}
              <HiOutlineUser />
              {ShopData.owner_name}
            </p>
            <p>
              <IoCallOutline />
              {ShopData.shop_mobile}
            </p>
            <p>
              <SiGooglemaps />
              {ShopData.shop_address}
            </p>
          </div>
          <div className="shopinfo_shopimg">
            {crrAvtar !== "" ? (
              <img src={crrAvtar} className="shop_details" alt="shop_img" />
            ) : (
              <div className="">Add Linear Gradient</div>
            )}
          </div>
        </div>
        <div className="shopinfo2">
          <p>
            Shop Timing : <span>{convertTime(openTime)}</span> -{" "}
            <span>{convertTime(closeTime)}</span>
          </p>
          <div className="date">
            <h3>Choose Date:</h3>
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

          <h3>Choose Counter:</h3>
        </div>
        <div className="shopinfo3">
          {shopCounters !== []
            ? shopCounters.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <div
                      onClick={() =>
                        dispatch(updateCounterNumber(data.counter_number))
                      }
                    >
                      <button className="counter_no">
                        Counter : {data.counter_number}{" "}
                      </button>
                    </div>
                  </React.Fragment>
                );
              })
            : null}
        </div>
        <div className="shopinfo4">
          <div className="shopinfo4_timeslot">
            <h3>Select Time Slot</h3>

            <DaySchedule data={ShopData} time={{ openTime, closeTime }} />
          </div>
          <div className="shopinfo4_services">
            <div className="shopinfo4_services1">
              <h3>Select Services</h3>
              <SelectServices data={ShopData} time={{ openTime, closeTime }} />
            </div>
            <div className="shopinfo4_services2">
              <BookNow shopData={ShopData} />
            </div>
          </div>
        </div>
        <div className="shopinfo5">
          {ShopData.length !== 0 ? (
            <iframe
              width="90%"
              height="1000%"
              title="shop_location"
              src={`https://maps.google.com/maps?q=${ShopData.shop_location.latitude},${ShopData.shop_location.longitude}&z=14&output=embed`}
            ></iframe>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Shop;
