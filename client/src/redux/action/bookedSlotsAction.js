import { GET_BOOKED_SLOTS } from "../reduxConstants";


const bookedSlotsAction =(data)=>{
    return({
        type:GET_BOOKED_SLOTS,
        data
    })
}

export default bookedSlotsAction;