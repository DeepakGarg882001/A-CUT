import { combineReducers } from "redux";

import Current_User_Reducer from "./reducer/Current_User_Reducer";
import ShopData_Reducer  from "./reducer/Shop_Reducer";
import Service_Reducer from "./reducer/Get_Services_Reducer";
import shopDataReducer from "./reducer/shopReducer";

const RootReducer = combineReducers({
    Current_User_Reducer,
    ShopData_Reducer,
    Service_Reducer,  
    shopDataReducer,
})


export default RootReducer;
