import { SET_ALL_SHOPS_DATA } from "../reduxConstants";


const allShopDataReducer = (data=[],action)=>{

    switch(action.type){
        case SET_ALL_SHOPS_DATA: data = action.data;
            return data;
        
        default : return data;
    }

}

export default allShopDataReducer;