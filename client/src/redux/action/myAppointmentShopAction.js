import { GET_APPOINTMENTED_SHOP_DATA, CLEAR_APPOINTMENTED_SHOP_DATA  } from "../reduxConstants"


export const getAppointmentedShopData = (data)=>{
    return({
        type:GET_APPOINTMENTED_SHOP_DATA,
        data
    })
}

export const clearAppointmentedShopData = ()=>{
    return({
        type:CLEAR_APPOINTMENTED_SHOP_DATA
    })
}