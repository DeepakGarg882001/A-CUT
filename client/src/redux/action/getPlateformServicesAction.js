import { GET_SERVICES_LIST } from "../reduxConstants";


const getPlateformServiceListAction =() =>{
    return({
        type:GET_SERVICES_LIST
    })
}

export default getPlateformServiceListAction;