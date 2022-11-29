import { GET_Current_User_Data, REMOVE_Current_User_Data } from "../reduxConstants";

const Current_User_Reducer = (action, data = []) => {

    switch (action.type) {

        case GET_Current_User_Data: data = action.data;
            return data;

        case REMOVE_Current_User_Data: data = []
            return data;

        default: return data;

    }

}

export default Current_User_Reducer;