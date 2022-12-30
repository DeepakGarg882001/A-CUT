import React, { useState, useReducer } from "react";
import "../../../styles/shop1.css";

const DaySchedule = (data) => {
  const bookedSlots = [{time_slot:9},{time_slot:11},{time_slot:15},{time_slot:16.5}];


  const date = new Date();
  const day = date.toString().substring(0,3)
  
  const allDays = data.length !==0 ? data.shop_time : [];

  let openTime ;
  let closeTime ;

  for(let j=0;j<allDays.length;j++){
    if(allDays[j]===day){
      openTime = allDays[j].open;
      closeTime= allDays[j].close;
    }
  }



  
  const slots = [];

  for (let i = openTime; i < closeTime; i = i + 0.25) {
    console.log(openTime);
    slots.push(i);
  }

  const convertToHr = (value) => {
    if (value > 12) {
      return value - 12;
    } else {
      return value;
    }
  };

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
              <span>{hour + 1}:00</span>
              {nonDecimal + 1 > 11 ? "pm" : "am"}
            </p>
          </>
        );

      default:
        return;
    }
  };

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
