import { SET_OWNER_SHOP_DATA,REMOVE_OWNER_SHOP_DATA } from "../reduxConstants";

const ownerShopReducer = (data = [], action) => {
    
  switch (action.type) {

    case SET_OWNER_SHOP_DATA:
      data = action.data;
      return data;

    case REMOVE_OWNER_SHOP_DATA:
       data=[];
       return data;

    default:
      return data;
  }
};

export default ownerShopReducer;
