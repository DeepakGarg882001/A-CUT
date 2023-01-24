import React from "react";
import { useSelector } from "react-redux";
import "../../styles/appointmentDetails.css";
import { MdOutlineDirections } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import {IoCallOutline} from "react-icons/io5";
import {AiFillStar} from "react-icons/ai";
import {HiOutlineUser} from "react-icons/hi";
const AppointmentDetails = () => {
  const image_url = process.env.REACT_APP_IMAGE_URL;

  const shopData = useSelector((state) => state.myAppointmentShopReducer);
  const Data = useSelector((state) => state.uniqueAppointmentReducer);
  const crrAvtar = shopData.image ? `${image_url}/${shopData.image.filePath}` : "";

  console.log(shopData);
  console.log(Data);

  const giveDate = (date) => {
    const day = new Date(date).toDateString();
    return day;
  };

  const giveTime = (date) => {
    const time = new Date(date).toLocaleTimeString();
    return time;
  };

  return (
    <>
      <div className="apnt-details-canvas">
        <div className="apnt-details-canvas-body">
          <div className="apnt-details-first-row">
            <div>
              <p className="apnt-details-first-row-text">
                {" "}
                Confirmed At : <span> {giveTime(Data.createdAt)} </span> on{" "}
                <span> {giveDate(Data.createdAt)} </span>{" "}
              </p>
            </div>
          </div>

          <div className="apnt-details-second-row">
            <div className="under-apnt-details-second-row">
              <div>
                <p className="apnt-details-shop-name">{shopData.shop_name}</p>
              </div>

              <div className="apnt-details-shop-details-sec">
                <div >

                <HiOutlineUser/>
                </div>
                <p> {shopData.owner_name} </p>
              </div>
              <div className="apnt-details-shop-details-sec">
                <p> <IoCallOutline/> </p>
                <p> {shopData.shop_mobile} </p>
              </div>
              <div className="apnt-details-shop-details-sec">
                <p> <AiFillStar /> </p>
                <p> {shopData.shop_rating} </p>
              </div>
              <div className="apnt-details-shop-details-sec">
            <p>{shopData.shop_address}</p>
          </div>
            </div>
            <div className="under-apnt-details-second-row">
             {crrAvtar !== "" ? <img src={crrAvtar}
                className="shop_img"
                alt="shop_img" /> :
                <div className="shop_details1" >Does not have any Images</div>
              }
            </div>
          </div>
          
          <div className="apnt-details-counter-row">
            {shopData.length !== 0
              ? shopData.shop_counters.map((data, index) => {
                  if (data.counter_number === Data.counter_number) {
                    return (
                      <React.Fragment key={index}>
                        <div className="apnt-details-counter-box">
                          <p>Counter No. : {Data.counter_number}</p>
                        </div>
                        <div className="apnt-details-counter-box">
                          <p>Counter Head : {data.counter_head}</p>
                        </div>
                      </React.Fragment>
                    );
                  }
                })
              : null}
          </div>

          <table className="apnt-details-table">
            <thead>
              <tr>
                <th className="apnt-details-table-head-col apnt-details-table-col ">
                  Sr. No
                </th>
                <th className="apnt-details-table-head-col apnt-details-table-col">
                  Service
                </th>
                <th className="apnt-details-table-head-col apnt-details-table-col">
                  Duration
                </th>
                <th className="apnt-details-table-head-col apnt-details-table-col">
                  {" "}
                  Price
                </th>
                <th className="apnt-details-table-head-col apnt-details-table-col">
                  Offer
                </th>
                <th className="apnt-details-table-head-col apnt-details-table-col">
                  Discounted Price
                </th>
              </tr>
            </thead>

            <tbody>
              {Data.length !== 0
                ? Data.services.map((data, index) => {
                    return (
                      <React.Fragment key={index}>
                        <tr>
                          <td className="apnt-details-table-col">
                            {index + 1}
                          </td>
                          <td className="apnt-details-table-col">
                            {data.service_name}
                          </td>
                          <td className="apnt-details-table-col">
                            {data.duration} mint{" "}
                          </td>
                          <td className="apnt-details-table-col">
                            <BiRupee /> {data.original_price}
                          </td>
                          <td className="apnt-details-table-col">
                            {data.offer} %{" "}
                          </td>
                          <td className="apnt-details-table-col">
                            <BiRupee /> {data.price}
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })
                : null}
              <tr>
                <td className="apnt-details-table-col"></td>
                <td className="apnt-details-table-col">Total </td>
                <td className="apnt-details-table-col">
                  {Data.total_duration} mint{" "}
                </td>
                <td className="apnt-details-table-col"></td>
                <td className="apnt-details-table-col"></td>
                <td className="apnt-details-table-col">
                  <BiRupee />
                  {Data.total_price}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="apnt-details-status-row">
            <div className="apnt-details-status-row-title">
              <p>
                Check In :{" "}
                <span className="apnt-details-status-row-data">
                  {" "}
                  {Data.checkIn_status}{" "}
                </span>{" "}
              </p>
            </div>
            <div className="apnt-details-status-row-title">
              <p>
                Check Out :
                <span className="apnt-details-status-row-data">
                  {" "}
                  {Data.checkOut_status}{" "}
                </span>{" "}
              </p>
            </div>
            <div className="apnt-details-status-row-title">
              <p>
                Payment :{" "}
                <span className="apnt-details-status-row-data">
                  {" "}
                  {Data.payment_status}{" "}
                </span>
              </p>
            </div>
          </div>

          <div className="apnt-details-last-row">
            <div className="under-apnt-details-last-row">
              <button id="apnt-details-cancel-btn" className="apnt-details-btn">
                Cancel{" "}
              </button>
            </div>
            <div className="under-apnt-details-last-row">
              {shopData.length !== 0 ? (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${shopData.shop_location.latitude}%2C${shopData.shop_location.longitude}`}
                >
                  <button
                    className="apnt-details-btn"
                    id="apnt-details-direction-btn"
                  >
                    <MdOutlineDirections /> View Directions{" "}
                  </button>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentDetails;
