import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiRupee } from "react-icons/bi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {bookedSlotsAction} from "../../../redux/action/bookedSlotsAction";
import {  toast } from 'react-toastify';


const BookNow = ({ shopData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userReducer);
  const bookingData = useSelector((state) => state.bookShopSlotDataReducer);
  const url = process.env.REACT_APP_SERVER_URL;

  const postDataToServer = async () => {

    if (!userData.token || userData.userRole.role !== "customer"  ) {
      Swal.fire("","Please Login First","info");
      navigate("/login");
    } else {
        
      const {services,total_price,total_duration,counter_number,time_slot,date} = bookingData;
      
      if( !date || total_duration===0 || !counter_number || total_price===0 || time_slot.length===0 || services.length===0 ){
        return Swal.fire("","Please Chooose The Slot and Services Properly","warning")
      }

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
      };

      console.log(values);
      const makeRequest = await fetch(`${url}/bookAppointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const response = await makeRequest.json();
      console.log(response);

      if(response.message){
        dispatch(bookedSlotsAction({
          shop_id:shopData._id,
          date:bookingData.date,
          counter_number:bookingData.counter_number
        }));
        toast.success(response.message);
      }
    }
  };

  return (
    <>
    
      <div>
        <div>
          <p> Services : </p>
          <div>
            {bookingData.services !== []
              ? bookingData.services.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <p>{data.service_name}</p>
                    </React.Fragment>
                  );
                })
              : null}
          </div>
        </div>
        <div>
          <p>
            {" "}
            Total Price :{" "}
            <span>
              <BiRupee />
              {bookingData.total_price}
            </span>
          </p>
        </div>
        <div>
          <p>
            {" "}
            Total Duration : <span>{bookingData.total_duration} mint </span>
          </p>
        </div>
        <div>
          <p>
            Date : <span>{bookingData.date}</span>
          </p>
        </div>

        <div>
          <p onClick={() => postDataToServer()}>Confirm</p>
        </div>
      </div>
    </>
  );
};

export default BookNow;
