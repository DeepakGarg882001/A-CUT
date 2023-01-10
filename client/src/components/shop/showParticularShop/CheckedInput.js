import React,{useState,useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { selectServiceAction } from '../../../redux/action/bookShopSlotAction';

const CheckedInput = ({bookedSlots,closeTime,data}) => {
    
    const [checkedValue,setCheckedValue] = useState(false);
    const bookingData = useSelector((state) => state.bookShopSlotDataReducer);

    const dispatch = useDispatch();
    const currentPrice = (data)=>{
        return (data.price)-((data.price)/100)*data.offer;
      }

    useEffect(()=>{
        
        let count =0;
        for(let l=0;l<bookingData.services.length;l++){
            if(bookingData.services[l].service_name===data.service_name){
                setCheckedValue(true);
                count++;
            }
        }
        
        if(count===0){
            setCheckedValue(false);
        }

    },[bookingData]);

  return (
    <>
      <input 
                                 type="checkbox"
                                 checked={checkedValue}
                                 onChange={(e)=> dispatch(selectServiceAction({
                                    active:e.target.checked,
                                    service_name:data.service_name,
                                    price:currentPrice(data),
                                    duration:data.duration,
                                    bookedSlots,
                                    closeTime,

                                 })) }

                                 />
    </>
  )
}

export default CheckedInput;