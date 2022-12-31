import {
    SERVICE_IS_CLICKED
    } from "../reduxConstants";


export const selectServiceAction = (data) =>{
   return({
      type:SERVICE_IS_CLICKED,
      data
   })
}

