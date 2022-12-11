import { GET_SHOP_DATA, REMOVE_SHOP_DATA } from "../reduxConstants";

const ShopData_Reducer = (data = [], action) => {
  switch (action.type) {
    case GET_SHOP_DATA:
        data = action.data;
      return data;
    case REMOVE_SHOP_DATA:
      data = [];
      return data;
    default:
      return data;
  }
};

export default ShopData_Reducer;
