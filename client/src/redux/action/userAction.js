import {GET_CURRENT_USER_DATA,REMOVE_CURRENT_USER_DATA} from "../reduxConstants";

export const userDataAction = (data)=>{
    return{
        type:GET_CURRENT_USER_DATA,
        data
    }
}


export const logoutUserDataAction =()=>{
    return{
        type:REMOVE_CURRENT_USER_DATA,
    }

}