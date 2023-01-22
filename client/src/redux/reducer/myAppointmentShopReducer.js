import { SET_APPOINTMENTED_SHOP_DATA, CLEAR_APPOINTMENTED_SHOP_DATA   } from "../reduxConstants";


const myAppointmentShopReducer = (data=[],action)=>{
   
    switch(action.type){
        case SET_APPOINTMENTED_SHOP_DATA: 
             data= action.data;
             return data;
        
        case CLEAR_APPOINTMENTED_SHOP_DATA:
             data=[]; 
             return data;

        default : return data;
    }


}

export default myAppointmentShopReducer;