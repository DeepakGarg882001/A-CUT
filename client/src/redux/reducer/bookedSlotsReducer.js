import { SET_BOOKED_SLOTS, CLEAR_BOOKED_SLOTS } from "../reduxConstants";

const bookedSlotsReducer = (data = [], action) => {
  switch (action.type) {

    case SET_BOOKED_SLOTS:
      data = action.data;
      return data;

    case CLEAR_BOOKED_SLOTS:
      data = [];
      return data;

    default:
      return data;
      
  }
};

export default bookedSlotsReducer;
