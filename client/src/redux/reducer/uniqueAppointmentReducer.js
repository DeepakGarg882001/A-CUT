
import { SET_UNIQUE_APPOINTMENT_DATA, CLEAR_UNIQUE_APPOINTMENT_DATA } from "../reduxConstants";


const uniqueAppointmentReducer = (data=[],action)=>{
   
    switch(action.type){
        case SET_UNIQUE_APPOINTMENT_DATA: 
            data= action.data;
            return data;

        case CLEAR_UNIQUE_APPOINTMENT_DATA: 
             data=[];
             return data;
      
        default : return data;
    }

}

export default uniqueAppointmentReducer;