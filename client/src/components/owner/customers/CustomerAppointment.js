import React from "react";
import "../../../styles/customerAppointment.css";
import { useSelector } from "react-redux";

const CustomerAppointment = () => {
  const Customers = useSelector((state) => state.ownerCustomerReducer);
  console.log("customeers",Customers);
  const btn={
    notPaid:"pending..",
    paid:"done"
  }
 
  return (
    <>
      <div className="cus-appointment">
        <h2>Customer Application</h2>
        <div className="cust-table">
          <table>
            <thead>
              <tr>
                <th className="th">Sr. No</th>
                <th className="th">Name</th>
                <th className="th">Services</th>
                <th className="th">Time Slot</th>
                <th className="th">Duration</th>
                <th className="th">Total Price</th>
                <th className="th">Date</th>
                <th className="th">Payment Status</th>
                {/* <th className="th">CheckIn Status</th> */}
              </tr>
            </thead>
            <tbody>
                {Customers.length !== 0 ? (
                  Customers.map((data, index) => {
                    return (
                      <React.Fragment key={index}>
                        <tr>
                          <td className="td">{index + 1}</td>
                          <td className="td">{data.customer_name}</td>
                          <td className="td">{data.services.length!==0? data.services.map((data,index)=>{
                            return(
                              <React.Fragment key={index}>
                               <span>{data.service_name}, </span>
       
                              </React.Fragment>
                            )
                          }):"no services"}</td>
                          <td className="td">{data.starting_time} - {data.ending_time} </td>
                          <td className="td">{data.total_duration} mint </td>
                          <td className="td">Rs {data.total_price} </td>
                          <td className="td"> {data.date} </td>
                          {/* <td className="td" style={{color: data.payment_status==="Not Paid"? "red":"green"}} >{data.payment_status} </td> */}
                          {/* <td className="td" style={{color: data.checkIn_status==="none"? "gray":"green"}} >{data.checkIn_status} </td> */}
                          <td className="td"  style={{color: btn.notPaid==="pending.."? "red":"green"}}>{btn.notPaid} {" "}<button onClick={()=>{btn.notPaid=btn.paid}}>Mark as Done</button> </td>
                          {/* <td className="td" style={{color: data.checkIn_status==="none"? "gray":"green"}} >{data.checkIn_status} </td> */}
                        </tr>
                      </React.Fragment>
                    );
                  })
                ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CustomerAppointment;
