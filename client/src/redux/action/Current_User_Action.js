import {GET_Current_User_Data,REMOVE_Current_User_Data} from "../reduxConstants";

export const Get_Current_User = (data)=>{
    return{
        type:GET_Current_User_Data,
        data
    }
}

export const LogOut_User =()=>{
    return{
        type:REMOVE_Current_User_Data,
    }

}