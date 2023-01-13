import React from "react";

const AppointmentLayout = ({data}) => {
 
    const Services = ({services})=>{
        return(
            <p>
              {services.service_name}
            </p>
        )
    }


  return (
    <>
      <div>
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
            data.services.map((data,index)=>{
              return(
                <React.Fragment key={index}>
                 <Services services={data}/>
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
          <p>A3 Style Maker</p>
        </div>

        <div>
          <div> Cancel </div>
          <div> Location </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentLayout;
