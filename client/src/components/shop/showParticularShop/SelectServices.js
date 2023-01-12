import React from 'react'
import {BiRupee} from "react-icons/bi";
import { useDispatch,useSelector } from 'react-redux';
import CheckedInput from './CheckedInput';

const SelectServices = ({data,time}) => {
     
    const dispatch = useDispatch();
    const bookedSlots = useSelector( (state)=> state.bookedSlotsReducer);
    const {openTime,closeTime} = time;

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
                                  <CheckedInput bookedSlots={bookedSlots} closeTime={closeTime} data={data} />
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