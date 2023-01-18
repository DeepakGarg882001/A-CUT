import React, { useEffect } from "react";
import "../../styles/appointmentlayout.css";
import { useDispatch,useSelector } from "react-redux";
import {getMyAppointmentAction} from "../../redux/action/myAppointmentsAction";
import Swal from "sweetalert2";
const AppointmentLayout = ({ data }) => {
  const url = process.env.REACT_APP_SERVER_URL;
  const userData=useSelector((state)=>state.userReducer);
  const dispatch = useDispatch();
  const deleteEntry = async (id) => {
    const makeReq = await fetch(`${url}/deleteCustomerAppointments`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id:id }),
    });

    const response = await makeReq.json();
    console.log("res", response);
    if (response.message) {
      console.log(response.message);
      dispatch(getMyAppointmentAction(userData._id));
    }
    // Swal.fire("Successfully remove your entry");
  };
 

  const Services = ({ services }) => {
    return <p>{services.service_name}</p>;
  };

  console.log("cust data", data);

  return (
    <>
      <div className="appoint_main">
        <div>
          <h5>Shop Name : </h5>
          <p>{data.shop_name}</p>
        </div>
        <div>
          <h5>Date : </h5>
          <p>{data.date}</p>
        </div>
        <div>
          <h5>Services : </h5>
          {data.services.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <Services services={data} />
              </React.Fragment>
            );
          })}
        </div>
        <div>
          <h5>Total Price : </h5>
          <p>{data.total_price} RS</p>
        </div>
        <div>
          <h5>Timing : </h5>
          <p>
            {data.starting_time} - {data.ending_time}
          </p>
        </div>

        <div>
          <div> Location </div>
          <p>{data.shop_address}</p>
        </div>
        <div>
          <div id="can_appointment"><button onClick={()=>deleteEntry(data._id)}>Cancel</button></div>
        </div>
      </div>
    </>
  );
};

export default AppointmentLayout;
