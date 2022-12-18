import { USER_LOCATION_POINTS } from "../reduxConstants";

const userLocationAction =(data)=>{
    console.log(data);
    return({
        type:USER_LOCATION_POINTS,
        data
    })

}

export default userLocationAction;