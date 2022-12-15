import { SET_OWNER_CUSTOMER_DATA } from "../reduxConstants";

const ownerCustomerReducer = (data=[],action)=>{
   
    switch(action.type){
       case SET_OWNER_CUSTOMER_DATA: data =action.data;
              return data;
    
        default: return data;
    }

}

export default ownerCustomerReducer;