import {GET_CURRENT_USER_DATA,REMOVE_CURRENT_USER_DATA} from "../reduxConstants";

export const Get_Current_User = (data)=>{
    return{
        type:GET_CURRENT_USER_DATA,
        data
    }
}

export const LogOut_User =()=>{
    return{
        type:REMOVE_CURRENT_USER_DATA,
    }

}