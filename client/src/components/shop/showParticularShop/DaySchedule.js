import React, { useEffect } from "react";
import "../../../styles/shop1.css";
import { useSelector, useDispatch } from "react-redux";
import { addTimeSlot } from "../../../redux/action/bookShopSlotAction";
import { toast } from "react-toastify";
import { updateStartingTime,updateEndingTime } from "../../../redux/action/bookShopSlotAction";
const DaySchedule = ({ data, time }) => {
  const dispatch = useDispatch();

  const bookedSlots = useSelector((state) => state.bookedSlotsReducer);
  const bookingData = useSelector((state) => state.bookShopSlotDataReducer);
  const { openTime, closeTime } = time;
  const slots = [];

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

  useEffect(() => {
    if (bookingData.error !== "") {
      toast.error(bookingData.error);
    }
  }, [bookingData]);


  const staringTime = (number) => {
    const nonDecimal = Math.floor(number);
    const decimalValue = number - nonDecimal;
    let hour = convertToHr(nonDecimal);
      if(decimalValue=== 0){
         dispatch(updateStartingTime(`${hour}:00 ${nonDecimal >= 12 ? "PM" : "AM"}`)) ;
      }
      if(decimalValue=== 0.25){
         dispatch(updateStartingTime(`${hour}:15 ${nonDecimal >= 12 ? "PM" : "AM"}`));
      }
      if(decimalValue=== 0.5){
         dispatch(updateStartingTime(`${hour}:30 ${nonDecimal >= 12 ? "PM" : "AM"}`));
      }
      if(decimalValue=== 0.75){
         dispatch(updateStartingTime(`${hour}:45 ${nonDecimal >= 12 ? "PM" : "AM"}`));
      }

  };

  const endingTime = (number) => {
    const nonDecimal = Math.floor(number);
    const decimalValue = number - nonDecimal;
    let hour = convertToHr(nonDecimal);
    
      if(decimalValue === 0){
        dispatch(updateEndingTime(`${hour}:00 ${nonDecimal >= 12 ? "PM" : "AM"}`));
      }
      if(decimalValue === 0.25){
        dispatch(updateEndingTime(`${hour}:15 ${nonDecimal >= 12 ? "PM" : "AM"}`));
      }
      if(decimalValue === 0.5){
        dispatch(updateEndingTime(`${hour}:30 ${nonDecimal >= 12 ? "PM" : "AM"}`));
      }
      if(decimalValue === 0.75){
        dispatch(updateEndingTime(`${hour}:45 ${nonDecimal >= 12 ? "PM" : "AM"}`));
      }

  };
  const updateTiming = () => {
    let firstSlot= bookingData.time_slot.length!==0? bookingData.time_slot[0].slot: 0;
    let LastSlot=bookingData.time_slot.length!==0? bookingData.time_slot[
      bookingData.time_slot.length - 1
    ].slot + 0.25: 0;
  
    if(firstSlot!==0){
    staringTime(firstSlot);
    endingTime(LastSlot);
    }
    else{
      dispatch(updateEndingTime(``));
      dispatch(updateStartingTime(``));
    }
  };
 
  useEffect(()=>{
    updateTiming();
  },[bookingData.time_slot.length])
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
                      <div className="schedule-sec-element element-booked">
                        {convertToTime(data)}
                      </div>
                    </React.Fragment>
                  );
                }
              }

              for (let z = 0; z < bookingData.time_slot.length; z++) {
                if (data === bookingData.time_slot[z].slot) {
                  return (
                    <React.Fragment key={index}>
                      <div
                        className="schedule-sec-element element-selected"
                        onClick={() => {
                          dispatch(
                            addTimeSlot({
                              slot: data,
                              bookedSlots,
                              closeTime,
                            })
                          );
                          updateTiming();
                        }}
                      >
                        {convertToTime(data)}
                      </div>
                    </React.Fragment>
                  );
                }
              }

              return (
                <React.Fragment key={index}>
                  <div
                    className="schedule-sec-element"
                    onClick={() =>
                      dispatch(
                        addTimeSlot({
                          slot: data,
                          bookedSlots,
                          closeTime,
                        })
                      )
                    }
                  >
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
