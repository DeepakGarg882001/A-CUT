import {
    SERVICE_IS_CLICKED,
    CLEAR_BOOKING_DATA,
    ADD_TIME_SLOT,
    UPDATE_DATE,
    } from "../reduxConstants";


export const selectServiceAction = (data) =>{
   return({
      type:SERVICE_IS_CLICKED,
      data
   })
}

export const clearBookingData = ()=>{
   return({
      type:CLEAR_BOOKING_DATA
   })
}

export const addTimeSlot =(data)=>{
   return {
      type:ADD_TIME_SLOT,
      data
   }
}

export const updateDate = (data)=>{
   return({
      type:UPDATE_DATE,
      data
   })

}