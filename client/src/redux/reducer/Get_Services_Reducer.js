import { SET_SERVICES_LIST } from "../reduxConstants";

const Service_Reducer = (data = [], action) => {
  switch (action.type) {
    case SET_SERVICES_LIST:
      data = action.data;
      return data;

    default:
      return data;
  }
};

export default Service_Reducer;
