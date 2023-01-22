import React ,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import AppointmentLayout from "./AppointmentLayout";
import "../../styles/myappointments.css";
import { clearAppointmentedShopData } from "../../redux/action/myAppointmentShopAction";
import { removeUniqueAppointmentData } from "../../redux/action/uniqueAppointmentDataAction";
// import SearchBar from '../../components/shop/showAllShops/SearchBar.js';

const MyAppointments = () => {
  const dispatch = useDispatch();
  const appointmentList = useSelector((state) => state.myAppointmentReducer);

  console.log("appointmentList", appointmentList);
   
  useEffect(()=>{
    dispatch(clearAppointmentedShopData());
    dispatch(removeUniqueAppointmentData());
  },[]);

  return (
    <>
      <div className="appointment-canvas">
        <div className="appointment-canvas-tittle">
          <p className="appointment-canvas-tittle-text"> My Appointments </p>
        </div>
        
       

        <div className="appointment-canvas-body">
          {appointmentList.length !== 0 ? (
            appointmentList.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <AppointmentLayout data={data} number={index%2}/>
                </React.Fragment>
              );
            })
          ) : (
            <div className="no_slot">
              <p>Does Not Booked Any Services Yet !! Hurry up</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyAppointments;
