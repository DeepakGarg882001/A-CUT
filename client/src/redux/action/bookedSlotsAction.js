import { GET_BOOKED_SLOTS ,CLEAR_BOOKED_SLOTS} from "../reduxConstants";


 export const bookedSlotsAction =(data)=>{
    return({
        type:GET_BOOKED_SLOTS,
        data
    })
}

export const clearBookedSlotAction = ()=>{
    return({
        type:CLEAR_BOOKED_SLOTS
    })
}
