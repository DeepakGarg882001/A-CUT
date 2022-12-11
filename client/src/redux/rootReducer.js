import { combineReducers } from "redux";

import Current_User_Reducer from "./reducer/Current_User_Reducer";
import ShopData_Reducer  from "./reducer/Shop_Reducer";
import Service_Reducer from "./reducer/Get_Services_Reducer";

const RootReducer = combineReducers({
    Current_User_Reducer,
    ShopData_Reducer,
    Service_Reducer,
    
})


export default RootReducer;
