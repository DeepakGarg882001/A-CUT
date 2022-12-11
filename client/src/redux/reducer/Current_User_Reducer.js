import { GET_CURRENT_USER_DATA, REMOVE_CURRENT_USER_DATA } from "../reduxConstants";

const Current_User_Reducer = ( data = [], action,) => {

    switch (action.type) {

        case GET_CURRENT_USER_DATA: data = action.data;
            return data;

        case REMOVE_CURRENT_USER_DATA: data = []
            return data;

        default: return data;

    }

}

export default Current_User_Reducer;