import { USER_LOCATION_POINTS } from "../reduxConstants";

const userLocationReducer =(data=[],action)=>{
   
    switch(action.type){
        case USER_LOCATION_POINTS: data = action.data;
                return data;
        
        default : return data;
    }

}

export default userLocationReducer;