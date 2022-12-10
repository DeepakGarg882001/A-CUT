import { combineReducers } from "redux";

import Current_User_Reducer from "./reducer/Current_User_Reducer";
import shopDataReducer  from "./reducer/shopReducer";

const RootReducer = combineReducers({
    Current_User_Reducer,
    shopDataReducer,
});
export default RootReducer;
