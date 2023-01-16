import { GET_ALL_SHOPS_DATA,SEARCH_ALL_SHOPS_DATA } from "../reduxConstants"

export const getAllShopAction = (data)=>{
    return({
        type:GET_ALL_SHOPS_DATA,
        data
    })
}
export const searchAllShopAction = (query)=>{
    return({
        type:SEARCH_ALL_SHOPS_DATA,
        query,
    })
}

// exports {getAllShopAction,searchAllShopAction};