import { SET_SERVICES_LIST } from "../reduxConstants";

const plateformServiceReducer = (data = [], action) => {

  switch (action.type) {

    case SET_SERVICES_LIST:
      data = action.data;
      return data;

    default:
      return data;
      
  }
};

export default plateformServiceReducer;
