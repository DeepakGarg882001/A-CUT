import { combineReducers } from "redux";

import userReducer from "./reducer/userReducer";
import particularShopReducer  from "./reducer/particularShopReducer";
import plateformServiceReducer from "./reducer/getPlateformServicesReducer";
import bookShopSlotDataReducer from "./reducer/bookShopSlotReducer";
import ownerShopReducer from "./reducer/ownerShopReducer";
import allShopDataReducer from "./reducer/allShopsReducer";
import ownerCustomerReducer from "./reducer/ownerCustomerReducer";
import userLocationReducer from "./reducer/userLocationReducer";
import bookedSlotsReducer from "./reducer/bookedSlotsReducer";


const RootReducer = combineReducers({
    userReducer,
    particularShopReducer,
    plateformServiceReducer,
    bookShopSlotDataReducer,
    ownerShopReducer,
    allShopDataReducer,
    ownerCustomerReducer,
    userLocationReducer,
    bookedSlotsReducer,
    
})


export default RootReducer;
