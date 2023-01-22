import React from 'react';
import { useSelector } from 'react-redux';
import "../../styles/appointmentDetails.css";
import {MdOutlineDirections} from "react-icons/md";
const AppointmentDetails = () => {

  const shopData = useSelector( (state)=> state.myAppointmentShopReducer);
  const Data = useSelector( (state) => state.uniqueAppointmentReducer);
  console.log(shopData);
  console.log(Data);

  return (
    <>
     <div className='apnt-details-canvas'>
         
         <div className='apnt-details-canvas-body'>

         <div>

         </div>

         <div>
              {Data.length!==0? Data.services.map((data,index)=>{
                return(
                  <React.Fragment key={index}>
                  <div>
                          <p>{data.service_name}</p>
                          <p>{data.original_price}</p>
                          <p>{data.offer}</p>

                  </div>
                  </React.Fragment>
                )
              }) : null}
                 
         </div>

         <div className='apnt-details-last-row'>
             <div className='under-apnt-details-last-row'>
               <button id="apnt-details-cancel-btn" className='apnt-details-btn'>Cancel </button>
             </div>
             <div className='under-apnt-details-last-row' >
             <a
                    href={`https://www.google.com/maps/search/?api=1&query=${shopData.shop_location.latitude}%2C${shopData.shop_location.longitude}`}
                  >
               <button className='apnt-details-btn' id="apnt-details-direction-btn"><MdOutlineDirections/> View Directions </button>
               </a>
             </div>
         </div>

         </div>


     </div>
    </>
  )
}

export default AppointmentDetails;