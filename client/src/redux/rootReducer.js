import { combineReducers } from "redux";

import userReducer from "./reducer/userReducer";
import particularShopReducer  from "./reducer/particularShopReducer";
import plateformServiceReducer from "./reducer/getPlateformServicesReducer";
import bookShopSlotDataReducer from "./reducer/bookShopSlotReducer";
import ownerShopReducer from "./reducer/ownerShopReducer";
import allShopDataReducer from "./reducer/allShopsReducer";
import ownerCustomerReducer from "./reducer/ownerCustomerReducer";


const RootReducer = combineReducers({
    userReducer,
    particularShopReducer,
    plateformServiceReducer,
    bookShopSlotDataReducer,
    ownerShopReducer,
    allShopDataReducer,
    ownerCustomerReducer,
    
})


export default RootReducer;
