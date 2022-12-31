import {
  SERVICE_IS_CLICKED,
} from "../reduxConstants";

const bookShopSlotDataReducer = (
  data = [{
    counter_number: 1,
    date: "",
    services: {},
    total_duration: 0,
    time_slot: [],
    total_price:0,
  }],
  action
) => {
  
  switch (action.type) {
     
    case SERVICE_IS_CLICKED : 
     if(action.data.active===true){
          data.services = [...data.services,{service_name:action.data.service_name}];
          data.total_price = data.total_price + action.data.price;

      }else{
          data.services = data.services.filter( (e) => e.service_name !== action.data.service_name);
          data.total_price = data.total_price - action.data.price;

      }
      console.log("data from reducer is :",data);
      let updatedData = {...data}
      return updatedData;

    default:
      return data;
  }
};

export default bookShopSlotDataReducer;
