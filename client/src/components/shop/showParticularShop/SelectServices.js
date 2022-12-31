import React from 'react'
import {BiRupee} from "react-icons/bi";
import { selectServiceAction } from '../../../redux/action/bookShopSlotAction';
import { useDispatch,useSelector } from 'react-redux';
const SelectServices = ({data}) => {
     
    const dispatch = useDispatch();
    const bookingData = useSelector( (state) => state.bookShopSlotDataReducer);
   console.log(bookingData);
    const services = data.length !==0? data.shop_services : [];
    const currentPrice = (data)=>{
      return (data.price)-((data.price)/100)*data.offer;
    }
  return (
    <>
        <div>
            
            { services.length!==0? services.map((data,index)=>{
                return(
                    <React.Fragment key={index}>
                         <div>
                             <div>
                                 <p>{data.service_name}</p>
                                 <input 
                                 type="checkbox"
                                 onClick={(e)=> dispatch(selectServiceAction({
                                    active:e.target.checked,
                                    service_name:data.service_name,
                                    price:currentPrice(data),

                                 })) }

                                 />
                             </div>
                             <div>
                             <del><BiRupee />{data.price}</del>
                             <p> {currentPrice(data)}</p>
                            </div>
                         </div>
                    </React.Fragment>
                )
            }) : (
                <div>
                 <p> Does Not Provide any Services yet </p>
                </div>
            )}

        </div>
    </>
  )
}

export default SelectServices;