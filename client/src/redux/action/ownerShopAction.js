import { GET_OWNER_SHOP_DATA } from "../reduxConstants";



export const getOwnerShopDataAction = (id)=>{
    return({
        type:GET_OWNER_SHOP_DATA,
        data:id
    })

}