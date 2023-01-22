import React, { useEffect, useState } from "react";
import "../../styles/appointmentlayout.css";
import { useDispatch, useSelector } from "react-redux";
import { getMyAppointmentAction } from "../../redux/action/myAppointmentsAction";
import { SiGooglemaps } from "react-icons/si";
import { BiRupee } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getAppointmentedShopData } from "../../redux/action/myAppointmentShopAction";
import { setUniqueAppointmentData } from "../../redux/action/uniqueAppointmentDataAction";
const AppointmentLayout = ({ data, number }) => {
  
  const navigate = useNavigate();
  console.log(data);
  const [activeBtn, setActiveBtn] = useState(false);
  const url = process.env.REACT_APP_SERVER_URL;
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const deleteEntry = async (id) => {
    setActiveBtn(true);
    const makeReq = await fetch(`${url}/deleteCustomerAppointments`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id: id }),
    });

    const response = await makeReq.json();
    console.log("res", response);
    if (response.message) {
      console.log(response.message);
      dispatch(getMyAppointmentAction(userData._id));
      //  Swal.fire(response.message);
    }

    setActiveBtn(false);
  };

  const Services = ({ services }) => {
    return <p className="appointment-layout-data-text">{services.service_name}</p>;
  };
  
  const todayDate = new Date().getTime();
  const appointmentDate = Date.parse(data.date);

  // useEffect(()=>{
  //   console.log(todayDate);
  //   console.log(appointmentDate);
  //   if(todayDate>appointmentDate && data!==[]){
  //     console.log(todayDate>appointmentDate);
  //     setActiveBtn(true);
  //   }
  // },[appointmentDate]);
   
  return (
    <>
      <div
        className="appointment-layout-sec"
        style={{ backgroundColor: number === 0 ? "#dedede99" : "white" }}
      >
        <div className="appointment-layout-row">
          <div className="under-appointment-layout-row">
            <p className="appointment-layout-shop-name">{data.shop_name}</p>
          </div>
          <div className="under-appointment-layout-row">
            <p className="appointment-layout-date">{data.date}</p>
          </div>
        </div>

        <div className="appointment-layout-row">
          <div className="under-appointment-layout-row">
            <p className="appointment-layout-heading">Counter No </p>
            <p className="appointment-layout-data-text">{data.counter_number} </p>
          </div>
          <div className="under-appointment-layout-row">
            <p className="appointment-layout-heading">Services </p>
            <span className="appointment-layout-services">
            {data.services.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <Services services={data} />
                </React.Fragment>
              );
            })}
            </span>
          </div>
          <div className="under-appointment-layout-row">
            <p className="appointment-layout-heading">Total Price </p>
            <p className="appointment-layout-data-text">
              <BiRupee /> {data.total_price}
            </p>
          </div>
          <div className="under-appointment-layout-row">
            <p className="appointment-layout-heading">Timing </p>
            <p className="appointment-layout-data-text">
              {data.starting_time} - {data.ending_time}
            </p>
          </div>
        </div>

        <div className="appointment-layout-address-sec">
          <SiGooglemaps className="appointment-layout-address-icon" />
          <p className="appointment-layout-heading">{data.shop_address}</p>
        </div>

        <div
          className="appointment-layout-row-bottom"
          style={{ backgroundColor: number === 0 ? "white" : "#dedede99" }}
        >
          <div className="appointment_layout_btn-sec">
            <button
              className="appointment_layout_btn"
              onClick={() => deleteEntry(data._id)}
              disabled={activeBtn}
            >
              {" "}
              Cancel{" "}
            </button>
          </div>
          <div className="appointment_layout_btn-sec">
            <button onClick={()=> {
              navigate("/appointment/detail");
              dispatch(getAppointmentedShopData(data.shop_id));
              dispatch(setUniqueAppointmentData(data));
              }} className="appointment_layout_btn"> Show More </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentLayout;
