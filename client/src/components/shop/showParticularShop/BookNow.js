import React from 'react'
import { useSelector } from 'react-redux';
import {BiRupee} from "react-icons/bi";


const BookNow = () => {
 
    const bookingData = useSelector( (state) => state.bookShopSlotDataReducer);
    console.log("booking data is",bookingData);
    
    
  return (
    <>
       <div>

          <div>
            <p> Services : </p>
             <div>
                {bookingData.services!==[]? bookingData.services.map((data,index)=>{
                    return(
                        <React.Fragment key={index}>
                         <p>{data.service_name}</p>
                        </React.Fragment>
                    )
                }) : null}
             </div>
          </div>
          <div>
            <p> Total Price : <span><BiRupee />{bookingData.total_price}</span></p>
          </div>
          <div>
            <p> Total Duration : <span>{bookingData.total_duration} mint </span></p>
          </div>

       </div>
    </>
  )
}

export default BookNow;