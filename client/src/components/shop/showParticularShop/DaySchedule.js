import React, { useState, useReducer } from "react";
import "../../../styles/shop1.css";
import { useSelector } from "react-redux";

const DaySchedule = ({ data }) => {
  
  const bookedSlots = useSelector( (state)=> state.bookedSlotsReducer);

  const slots = [];

  const date = new Date();
  const day = date.toString().substring(0, 3);

  const allDays = data.length !== 0 ? data.shop_time : [];

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

  // making the number of slots of Shop
  for (let i = openTime; i < closeTime; i = i + 0.25) {
    slots.push(i);
  }

  // Converting Hours into of 12 formate
  const convertToHr = (value) => {
    if (value > 12) {
      return value - 12;
    } else {
      return value;
    }
  };

  // Adding Time to each Slot
  const convertToTime = (number) => {
    const nonDecimal = Math.floor(number);
    const decimalValue = number - nonDecimal;
    const hour = convertToHr(nonDecimal);
    switch (decimalValue) {
      case 0:
        return (
          <>
            <p className="schedule-element-text">
              <span>{hour}:00 </span>
              {nonDecimal > 11 ? "pm" : "am"}
            </p>
            <span> - </span>
            <p className="schedule-element-text">
              <span>{hour}:15 </span>
              {nonDecimal > 11 ? "pm" : "am"}
            </p>
          </>
        );

      case 0.25:
        return (
          <>
            <p className="schedule-element-text">
              <span>{hour}:15 </span>
              {nonDecimal > 11 ? "pm" : "am"}
            </p>
            <span> - </span>
            <p className="schedule-element-text">
              <span>{hour}:30 </span>
              {nonDecimal > 11 ? "pm" : "am"}
            </p>
          </>
        );

      case 0.5:
        return (
          <>
            <p className="schedule-element-text">
              <span>{hour}:30 </span>
              {nonDecimal > 11 ? "pm" : "am"}
            </p>
            <span> - </span>
            <p className="schedule-element-text">
              <span>{hour}:45 </span>
              {nonDecimal > 11 ? "pm" : "am"}
            </p>
          </>
        );
      case 0.75:
        return (
          <>
            <p className="schedule-element-text">
              <span>{hour}:45 </span>
              {nonDecimal > 11 ? "pm" : "am"}
            </p>
            <span> - </span>
            <p className="schedule-element-text">
              <span>{hour + 1 > 12 ? 1 : hour + 1}:00</span>
              {nonDecimal + 1 > 11 ? "pm" : "am"}
            </p>
          </>
        );

      default:
        return;
    }
  };

  // returning the Body of Component
  return (
    <>
      <div className="schedule-show-sec">
        {slots.length !== 0
          ? slots.map((data, index) => {
              for (let i = 0; i < bookedSlots.length; i++) {
                if (data === bookedSlots[i].time_slot) {
                  return (
                    <React.Fragment key={index}>
                      <div className="schedule-sec-element-booked">
                        {convertToTime(data)}
                      </div>
                    </React.Fragment>
                  );
                }
              }
              return (
                <React.Fragment key={index}>
                  <div className="schedule-sec-element">
                    {convertToTime(data)}
                  </div>
                </React.Fragment>
              );
            })
          : null}
      </div>
    </>
  );
};

export default DaySchedule;
