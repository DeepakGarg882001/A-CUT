import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';


const BookNow = () => {
 
    const bookingData = useSelector( (state) => state.bookShopSlotDataReducer);
    console.log("booking data is",bookingData);
    // const selectedServices = bookingData.services.length!==0? bookingData.services : [];
    
    // useEffect(()=>{
    //     console.log(bookingData);
    // },[]);
  return (
    <>
       <div>

          <div>
            <p> Services : </p>
             <div>
                {bookingData.services.length!==0? bookingData.services.map((data,index)=>{
                    return(
                        <React.Fragment key={index}>
                         <p>{data.service_name}</p>
                        </React.Fragment>
                    )
                }) : null}
             </div>
          </div>
          <div>
            <p> Total Price : <span>{bookingData.total_price}</span></p>
          </div>

       </div>
    </>
  )
}

export default BookNow;