import {
    SERVICE_IS_CLICKED,
    CLEAR_BOOKING_DATA,
    ADD_TIME_SLOT,
    UPDATE_DATE,
    UPDATE_ENDING_TIME,
    UPDATE_STARTING_TIME,
    UPDATE_COUNTER_NUMBER,
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

export const updateStartingTime = (data)=>{
   return({
      type:UPDATE_STARTING_TIME,
      data
   })
}

export const updateEndingTime = (data)=>{
   return({
      type:UPDATE_ENDING_TIME,
      data
   })
}

export const updateCounterNumber = (data)=>{
   return({
      type:UPDATE_COUNTER_NUMBER,
      data
   })
}