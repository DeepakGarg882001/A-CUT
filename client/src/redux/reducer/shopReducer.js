import {GET_SHOP_DATA,REMOVE_SHOP_DATA} from "../reduxConstants";
 const shopData=(data=[],action)=>{
    console.log(data);
    switch (action.type) {
        case GET_SHOP_DATA:
            console.log("shop reducer",action.data);
            return data;
        case REMOVE_SHOP_DATA:
            data=[];
            return data;  
        default:
            break;
    }
 }

 export default shopData;