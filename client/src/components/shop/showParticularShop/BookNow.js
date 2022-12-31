import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';


const BookNow = () => {
 
    const bookingData = useSelector( (state) => state.bookShopSlotDataReducer);
    console.log(bookingData);
    // const selectedServices = bookingData.services.length!==0? bookingData.services : [];
    
    useEffect(()=>{
        console.log(bookingData);
    },[bookingData]);
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

       </div>
    </>
  )
}

export default BookNow;