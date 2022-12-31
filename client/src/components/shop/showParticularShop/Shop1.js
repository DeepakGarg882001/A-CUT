import React, { useState, useEffect } from "react";
import "../../../styles/shop1.css";
import * as geolib from 'geolib';
import DaySchedule from "./DaySchedule";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  addToHair,
  removeFromHair,
  addToBeard,
  removeFromBeard,
  addToHeadMassag,
  removeFromHeadMassag,
  addToHairColor,
  removeFromHairColor,
} from "../../../redux/action/bookShopSlotAction.js";

import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { Link, useNavigate, useParams } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Shop1 = () => {
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpens(true);
  const handleClose1 = () => setOpens(false);
  const url = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();

  const result = useSelector((state) => state.bookShopSlotDataReducer);
  const userData = useSelector((state) => state.userReducer);
  const ShopData = useSelector((state) => state.particularShopReducer);
  const userLocation = useSelector((state) => state.userLocationReducer);

  const distance = geolib.getPreciseDistance(
    userLocation,
    ShopData.shop_location
  );
  const [distanceFromUser, setDistanceFromUser] = useState(distance);

  const convertDistance = () => {
    if (distanceFromUser > 499) {
      setDistanceFromUser(
        `${geolib.convertDistance(distanceFromUser, "km").toFixed(1)} km`
      );
    } else {
      setDistanceFromUser(
        `${geolib.convertDistance(distanceFromUser, "m")} meter`
      );
    }
  };
  useEffect(() => {
    convertDistance();
  }, []);

  console.log("use selector data", result);
  const userName = userData.name;

  const [initialFormData, setInitialFormData] = useState({
    date: new Date().toJSON().slice(0, 10),
    slots: [],
    shop_id: ShopData._id,
    customerDetails: {
      name: userName,
      service: "",
      price: 0,
      status: false,
      slot: 0,
    },
  });

  const prices = {
    hair: 50,
    beard: 30,
    headMassag: 70,
    hairColor: 100,
  };
  const sub = () => {
    if (userName ) {
      if(initialFormData.customerDetails.slot==0 ||initialFormData.customerDetails.price==0){
        return Swal.fire("Please fill the details properlly");
      }
      console.log("Yes");
      console.log(initialFormData);
      fetch(`${url}/bookAppointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(initialFormData),
      }).then((res) => {
        console.warn("res", res);
      });
      Swal.fire("Successfully booking the details");
    } else {
      Swal.fire("Please login for booking the details");
    }
  };
  const changeList = (serviceName, price, checked) => {
    // console.log(initialFormData);
    console.log("working");
    if (checked === true) {
      dispatch(addToHair(prices.hair));
      initialFormData.customerDetails.price = price;
      initialFormData.customerDetails.service = serviceName;
    } else {
      dispatch(removeFromHair(prices.hair));
      initialFormData.customerDetails.price = price;
    }
    setInitialFormData((prevData) => {
      return { ...initialFormData };
    });
    console.log(initialFormData);
  };
  const handle = (e) => {
    console.log("handle", e.target.value);
    initialFormData.customerDetails.slot = e.target.value;
    initialFormData.slots.push(e.target.value);
  };

  return (
    <>
      <header id="header">
        <div className="shop-details">
          <h2>{ShopData.shop_name}</h2>
          <div className="owner-detail">
            <div className="owner-name">
              <h3>
                <span>{ShopData.owner_name}</span>
              </h3>
              <h3>
                <span>{ShopData.shop_address}</span>
              </h3>
            </div>
            <div className="rating">
              <h3>
                <span>{ShopData.shop_mobile}</span>
              </h3>
              <h3>
                <span>Rating</span>
              </h3>
            </div>
            <div className="shop-timing">
              <h3>
                <span>
                  Shop Timing <span /> ➤ <span /> 9:00 AM TO 7:00 PM
                </span>
              </h3>
            </div>
          </div>
        </div>
        
        <div className="booking-details">
          <div className="schdule-time">
            
          <DaySchedule />
          </div>
          <div className="shop-services">
            <div className="select-services">
              <Button className="mui-bttn" variant="outlined" onClick={handleOpen1}>
                Click to select the services
                
              </Button>
              <Modal
                open={opens}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Select Service
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <form id="form-shop">
                      <div className="service">
                        <input
                          type="radio"
                          id="hair"
                          name="hair"
                          value="hair"
                          onChange={(e) => {
                            changeList("Hair", prices.hair, e.target.checked);
                          }}
                        />
                        <div>
                          <label for="service1"> Hair_cut</label>
                          <span>Price :{prices.hair}</span>
                        </div>
                      </div>

                      <div className="service">
                        <input
                          type="radio"
                          id="beard"
                          name="hair"
                          // value={beard}
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch(addToBeard(prices.beard));
                              initialFormData.customerDetails.price =
                                prices.beard;
                              initialFormData.customerDetails.service = "beard";
                            } else {
                              dispatch(removeFromBeard(prices.beard));
                            }
                          }}
                        />
                        <div>
                          <label for="service2"> Beard</label>
                          <span>Price :{prices.beard}</span>
                        </div>
                      </div>
                      {/* <br /> */}
                      <div className="service">
                        <input
                          type="radio"
                          id="head_massag"
                          name="hair"
                          value="head_massag"
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch(addToHeadMassag(prices.headMassag));
                              initialFormData.customerDetails.price =
                                prices.headMassag;
                              initialFormData.customerDetails.service =
                                "head_massag";
                            } else {
                              dispatch(removeFromHeadMassag(prices.headMassag));
                            }
                          }}
                        />
                        <div>
                          <label for="service3"> head_massag</label>
                          <span>Price :{prices.headMassag}</span>
                        </div>
                      </div>
                      <div className="service">
                        <input
                          type="radio"
                          id="hair_color"
                          name="hair"
                          value="hair_color"
                          onChange={(e) => {
                            if (e.target.checked) {
                              dispatch(addToHairColor(prices.hairColor));
                              initialFormData.customerDetails.price =
                                prices.hairColor;
                              initialFormData.customerDetails.service =
                                "head_color";
                            } else {
                              dispatch(removeFromHairColor(prices.hairColor));
                            }
                          }}
                        />

                        <div>
                          <label for="service4"> Hair_color</label>
                          <span>Price :{prices.hairColor}</span>
                        </div>
                      </div>
                      <br></br>
                    </form>
                  </Typography>
                </Box>
              </Modal>
            </div>
            <div className="my-details">
              <div className="user-details">
                <h3>
                  <span>
                    Time Slot : {initialFormData.customerDetails.slot}{" "}
                  </span>
                </h3>
                <h3>
                  <span>Total Payment : {initialFormData.customerDetails.price}</span>
                </h3>
              </div>
              <button onClick={sub} className="btn" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Shop1;

// import React, { useState } from 'react'
// import moment from 'moment';
// // import './App.css'

// const Shop1 = () => {
//   let intime = "12:00 Pm"
//   let outtime = "08:00 Pm"
//   const [result, setResult] = useState([])
//   console.log("Array", result)

//   function intervals(startString, endString) {
//     var start = moment(startString, 'hh:mm a');
//     var end = moment(endString, 'hh:mm a');
//     start.minutes(Math.ceil(start.minutes() / 30) * 30);

//     var current = moment(start);

//     while (current <= end) {
//       if (result.includes(current.format('hh:mm a'))) {
//         return null
//       }
//       else {
//         result.push(current.format('hh:mm a'));
//         current.add(30, 'minutes');
//       }
//     }

//     return result;
//   }

//   intervals(intime, outtime);
//   return (
//     <div className='slots'>
//       {
//         result && result.length > 0 ? result.map((time, index) => {
//           return (
//             <div key={index}>
//               <p>{time}</p>
//             </div>
//           )
//         }) : null
//       }
//     </div>
//   )
// }

// export default Shop1
