import React from "react";
import "../../styles/customerAppointment.css";
import { useSelector } from "react-redux";

const CustomerAppointment = () => {
  const Customers = useSelector((state) => state.ownerCustomerReducer);
  console.log(Customers);
 
  return (
    <>
      <div className="cus-appointment">
        <h2>Customer Application</h2>
        <div className="cust-table">
          <table>
            <thead>
              <tr>
                <th className="th">S. No</th>
                <th className="th">Name</th>
                <th className="th">Services</th>
                <th className="th">Time slot</th>
                <th className="th">Total payment</th>
                <th className="th">Status</th>
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
                          <td className="td">{data.service}</td>
                          <td className="td">{data.slot} </td>
                          <td className="td">Rs {data.total_price} </td>
                          <td className="td">Incomplete</td>
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
