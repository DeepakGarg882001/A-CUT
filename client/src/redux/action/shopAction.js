import {GET_SHOP_DATA,REMOVE_SHOP_DATA,UPDATE_SHOP_DATA} from "../reduxConstants";

export const getShopData=(data)=>{
    return {
        type:GET_SHOP_DATA,
        data
    }
}
export const removeShopData=(data)=>{
    return {
        type:REMOVE_SHOP_DATA,
    }
}