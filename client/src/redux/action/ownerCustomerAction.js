import { GET_OWNER_CUSTOMER_DATA } from "../reduxConstants";


const ownerCustomerAction = (data)=>{
    return({
        type:GET_OWNER_CUSTOMER_DATA,
        data
    })

}

export default ownerCustomerAction;