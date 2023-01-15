import { GET_MY_APPOINTMENTS,DELETE_MY_APPOINTMENTS } from "../reduxConstants";



export const getMyAppointmentAction = (data)=>{
    return({
        type:GET_MY_APPOINTMENTS,
        data:data,
    })
}
// export const deleteMyAppointmentAction = (id)=>{
//     return({
//         type:DELETE_MY_APPOINTMENTS,
//         data:id,
//     }) 
// }