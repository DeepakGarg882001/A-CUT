import { GET_MY_APPOINTMENTS } from "../reduxConstants";


export const getMyAppointmentAction = (data)=>{
    return({
        type:GET_MY_APPOINTMENTS,
        data
    })
}