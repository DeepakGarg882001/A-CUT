import {GET_SHOP_DATA,REMOVE_SHOP_DATA} from "../reduxConstants";

export const getParticularShopData=(data)=>{
    return {
        type:GET_SHOP_DATA,
        data
    }
}


export const removeParticularShopData=()=>{
    return {
        type:REMOVE_SHOP_DATA,
        
    }
}