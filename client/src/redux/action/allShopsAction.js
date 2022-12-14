import { GET_ALL_SHOPS_DATA } from "../reduxConstants"

const getAllShopAction = (data)=>{
    return({
        type:GET_ALL_SHOPS_DATA,
        data
    })
}

export default getAllShopAction;