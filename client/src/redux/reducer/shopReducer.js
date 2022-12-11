import {
  ADD_TO_HAIR,
  REMOVE_FROM_HAIR,
  ADD_TO_BEARD,
  REMOVE_FROM_BEARD,
  ADD_TO_HEAD_MASSAG,
  REMOVE_FROM_HEAD_MASSAG,
  ADD_TO_HAIR_COLOR,
  REMOVE_FROM_HAIR_COLOR,
} from "../reduxConstants";

const shopData = (data = 0, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case ADD_TO_HAIR:
      data = action.data + data;
      console.log("shop reducer", action.data);
      return data;
    case REMOVE_FROM_HAIR:
      data = data - action.data;
      return data;
    case ADD_TO_BEARD:
      data = action.data + data;
      // console.log("shop reducer", action.data);
      return data;
    case REMOVE_FROM_BEARD:
      data = data - action.data;
      return data;
    case ADD_TO_HEAD_MASSAG:
      data = action.data + data;
      // console.log("shop reducer", action.data);
      return data;
    case REMOVE_FROM_HEAD_MASSAG:
      data = data - action.data;
      return data;
    case ADD_TO_HAIR_COLOR:
      data = action.data + data;
      // console.log("shop reducer", action.data);
      return data;
    case REMOVE_FROM_HAIR_COLOR:
      data = data - action.data;
      return data;
    default:
      return data;
  }
};

export default shopData;
