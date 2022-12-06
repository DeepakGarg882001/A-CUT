import { combineReducers } from "redux";

import Current_User_Reducer from "./reducer/Current_User_Reducer";

const RootReducer = combineReducers({
    Current_User_Reducer,
    
})


export default RootReducer;
