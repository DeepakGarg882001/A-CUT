import { SET_UNIQUE_APPOINTMENT_DATA, CLEAR_UNIQUE_APPOINTMENT_DATA} from "../reduxConstants"


export const setUniqueAppointmentData = (data)=>{
    return({
        type:SET_UNIQUE_APPOINTMENT_DATA,
        data
    })

}



export const removeUniqueAppointmentData = ()=>{
    return({
        type:CLEAR_UNIQUE_APPOINTMENT_DATA,
    })

}