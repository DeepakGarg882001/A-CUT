import {  SET_SHOP_DATA ,REMOVE_SHOP_DATA} from "../reduxConstants";

const particularShopReducer = (data = [], action) => {

  switch (action.type) {
    case SET_SHOP_DATA:
        data = action.data;
      return data;

    case REMOVE_SHOP_DATA: data=[];
    return data;
    default:
      return data;
      
  }
};

export default particularShopReducer;
