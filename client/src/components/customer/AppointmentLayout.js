import React from "react";
import "../../styles/appointmentlayout.css";
import { useSelector } from "react-redux";


const AppointmentLayout = ({ data }) => {


  const Services = ({ services }) => {
    return (
      <p>
        {services.service_name}
      </p>
    )
  }

  console.log("cust data", data);

  return (
    <>
      <hr />
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
          {
            data.services.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <Services services={data} />
                </React.Fragment>
              )
            })
          }
        </div>
        <div>
          <h5>Total Price : </h5>
          <p>{data.total_price}</p>
        </div>
        <div>
          <h5>Timing : </h5>
          <p>{Date}</p>
        </div>

        <div>
          <div> Location </div>
          <p>{data.shop_address}</p>
        </div>
        <div>
          <div><button>delete</button></div>
        </div>
      </div>

    </>
  );
};

export default AppointmentLayout;
