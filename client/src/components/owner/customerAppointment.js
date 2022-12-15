import React from "react";
import "../../styles/customerAppointment.css";
const customerAppointment = () => {
  const data=[];
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
              <th className="th">Time Duration</th>
              <th className="th">Total payment</th>
              <th className="th">Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="td">1</td>
              <td className="td">Joginder</td>
              <td className="td">hair,beard,hair color,head massag</td>
              <td className="td">9 AM</td>
              <td className="td">45 min</td>
              <td className="td">80</td>
              <td className="td">incomplete</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default customerAppointment;
