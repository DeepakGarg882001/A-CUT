import React from 'react'
import { useSelector } from 'react-redux';
import AppointmentLayout from './AppointmentLayout';

const MyAppointments = () => {

   const appointmentList = useSelector( (state)=> state.myAppointmentReducer);

   console.log("appointmentList",appointmentList);

  return (
   <>
       <div>
       <h3>appointmeent details</h3>

               {appointmentList!==[]? appointmentList.map((data,index)=>{
                  return(
                     <React.Fragment key={index}>

                      <AppointmentLayout data={data} />

                     </React.Fragment>
                  )
               }):(<div>
                  <p>Does Not Booked Any Services Yet</p>
               </div>)}

               


       </div>


   </>
  )
}

export default MyAppointments