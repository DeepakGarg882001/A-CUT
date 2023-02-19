import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { bookedSlotsAction } from "../../../redux/action/bookedSlotsAction";
import { toast } from "react-toastify";
import { getMyAppointmentAction } from "../../../redux/action/myAppointmentsAction";

const BookNow = ({ shopData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userReducer);
  const bookingData = useSelector((state) => state.bookShopSlotDataReducer);
  const ShopData = useSelector((state) => state.particularShopReducer);
  const [activeBtn,setActiveBtn] =useState(false);
  const url = process.env.REACT_APP_SERVER_URL;
  const none = "none";

  const postDataToServer = async () => {
    if (!userData.token || userData.userRole.role !== "customer") {
      Swal.fire("", "Please Login First", "info");
      navigate("/login");
    } else {
      const {
        services,
        total_price,
        total_duration,
        counter_number,
        time_slot,
        date,
      } = bookingData;

      if (
        !date ||
        total_duration === 0 ||
        !counter_number ||
        total_price === 0 ||
        time_slot.length === 0 ||
        services.length === 0
      ) {
        return Swal.fire(
          "",
          "Please Chooose The Slot and Services Properly",
          "warning"
        );
      }
  
      setActiveBtn(true);
      const values = {
        customer_id: userData._id,
        customer_name: userData.name,
        services: bookingData.services,
        total_price: bookingData.total_price,
        total_duration: bookingData.total_duration,
        shop_name: shopData.shop_name,
        shop_id: shopData._id,
        counter_number: bookingData.counter_number,
        time_slot: bookingData.time_slot,
        date: bookingData.date,
        shop_address: ShopData.shop_address,
        starting_time:bookingData.starting_time,
        ending_time:bookingData.ending_time,
      };


      const makeRequest = await fetch(`${url}/bookAppointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const response = await makeRequest.json();

      if (response.message) {
        dispatch(
          bookedSlotsAction({
            shop_id: shopData._id,
            date: bookingData.date,
            counter_number: bookingData.counter_number,
          })
        );
        toast.success(response.message);
        dispatch(getMyAppointmentAction(userData._id));
        navigate("/myAppointment");

      }
      setActiveBtn(false);

    }
  };
  

  return (
    <>
      <div>
        <div>
          <div className="service-table">
            <h3 className="service-table-head">Selected Services</h3>
            <table>
              <thead>
                <tr>
                  <th style={{padding:'0px' }} className="th">Services</th>
                  <th style={{padding:'0px' }} className="th">Total Duration</th>
                  <th style={{padding:'0px' }} className="th">Total Price</th>
                  <th style={{padding:'0px' }} className="th">Time Slot</th>
                  <th style={{padding:'0px' }} className="th">Date</th>
                  <th style={{padding:'0px' }} className="th">Counter Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td">
                    {bookingData.services !== []
                      ? bookingData.services.map((data, index) => {
                          return (
                            <React.Fragment key={index}>
                              <p>
                                {data.service_name} {","}
                              </p>
                            </React.Fragment>
                          );
                        })
                      : { none }}
                  </td>
                  <td className="td">{bookingData.total_duration} mint </td>
                  <td className="td">{bookingData.total_price} Rs</td>
                  <td className="td">
                    {bookingData.starting_time} -
                    {bookingData.ending_time}
                   
                  </td>
                  <td className="td">{bookingData.date}</td>
                  <td className="td">{bookingData.counter_number}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="service-btn">
          <button onClick={() => postDataToServer()} disabled={activeBtn}>Confirm Your Slot</button>
        </div>
      </div>
    </>
  );
};

export default BookNow;
