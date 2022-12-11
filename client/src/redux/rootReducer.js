import { combineReducers } from "redux";

import userReducer from "./reducer/userReducer";
import particularShopReducer  from "./reducer/particularShopReducer";
import plateformServiceReducer from "./reducer/getPlateformServicesReducer";

const RootReducer = combineReducers({
    userReducer,
    particularShopReducer,
    plateformServiceReducer,
    
})


export default RootReducer;
