import { combineReducers } from "redux";

import Current_User_Reducer from "./reducer/Current_User_Reducer";
// import { shopData } from "./reducer/shopReducer";
const shopData={
    name:"cnk"
}
const RootReducer = combineReducers({
    Current_User_Reducer,
    shopData,
    
})


export default RootReducer;
