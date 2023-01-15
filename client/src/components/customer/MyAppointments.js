import React from 'react'
import { useSelector } from 'react-redux';
import AppointmentLayout from './AppointmentLayout';
import "../../styles/myappointments.css";
import { BsSearch } from "react-icons/bs";


const MyAppointments = () => {

   const appointmentList = useSelector((state) => state.myAppointmentReducer);

   console.log("appointmentList", appointmentList);

   return (
      <>
         <div>
            <div className="appointment_tittle">-: Appointment Details :-
            </div>
            <input type="text" placeholder="Search Your Booking slot" id="appointment_search" />
            
            <span id="appointment_search" className="search_slot"> <BsSearch />Search Here </span>

            {appointmentList.length !== 0 ? appointmentList.map((data, index) => {
               return (
                  <React.Fragment key={index}>

                     <AppointmentLayout data={data} />

                  </React.Fragment>
               )
            }) : (<div>
               <p>Does Not Booked Any Services Yet</p>
            </div>)}




         </div>


      </>
   )
}

export default MyAppointments