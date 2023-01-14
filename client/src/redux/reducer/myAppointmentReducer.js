import { SET_MY_APPOINTMENTS, DELETE_MY_APPOINTMENTS } from "../reduxConstants";



const myAppointmentReducer = (data = [], action) => {

    switch (action.type) {
        case SET_MY_APPOINTMENTS:
            data = action.data;
            return data;

        case DELETE_MY_APPOINTMENTS:
            data = [];
            return data;

        default: return data;
    }
}

export default myAppointmentReducer;