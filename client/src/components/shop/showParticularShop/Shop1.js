import React from "react";
import { useState } from "react";
import "../../../styles/shop1.css";
import img1 from "../../../Assets/shop1.jpg";
import img2 from "../../../Assets/shop2.jpg";
import img3 from "../../../Assets/shop3.jpg";
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

const Shop1 = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();

  const result = useSelector((state) => state.bookShopSlotDataReducer);
  const userData = useSelector((state) => state.userReducer);

  console.log("use selector data", result);
  const userName = userData.name;

  const [initialFormData, setInitialFormData] = useState({
    date: new Date().toJSON().slice(0, 10),
    slots: [],
    customerDetails: {
      name: userName,
      service: "",
      price: 0,
      status: false,
      slot: -1,
    },
  });

  const prices = {
    hair: 50,
    beard: 30,
    headMassag: 70,
    hairColor: 100,
  };
  const sub = () => {
    if(userName){
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
    }else{
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
          <h2>Shop Name</h2>
          <div className="owner-detail">
            <div className="owner-name">
              <h3>
                <span>Owner name</span>
              </h3>
              <h3>
                <span>Address</span>
              </h3>
            </div>
            <div className="rating">
              <h3>
                <span>Mobile Number</span>
              </h3>
              <h3>
                <span>Rating</span>
              </h3>
            </div>
            <div className="shop-timing">
              <h3>
                <span>
                  Shop Timing <tr /> ➤ <tr /> 9:00 AM TO 7:00 PM
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="booking-details">
          <div className="schdule-time">
            <h2 className="h2">Schedule</h2>
            <div className="schdule">
              <form className="schdule-form">
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="1"
                    onChange={handle}
                  />
                    <label for="html">9:00-9:30</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="2"
                    onChange={handle}
                  />
                    <label for="html">9:30-10:00</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="3"
                    onChange={handle}
                  />
                    <label for="html">10:00-10:30</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="4"
                    onChange={handle}
                  />
                    <label for="html">10:30-11:00</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="5"
                    onChange={handle}
                  />
                    <label for="html">11:00-11:30</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="6"
                    onChange={handle}
                  />
                    <label for="html">11:30-12:00</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="7"
                    onChange={handle}
                  />
                    <label for="html">12:00-12:30</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="8"
                    onChange={handle}
                  />
                    <label for="html">12:30-13:00</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="9"
                    onChange={handle}
                  />
                    <label for="html">13:00-13:30</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="10"
                    onChange={handle}
                  />
                    <label for="html">13:30-14:00</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="11"
                    onChange={handle}
                  />
                    <label for="html">14:00-14:30</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="12"
                    onChange={handle}
                  />
                    <label for="html">14:30-15:00</label>
                </div>
                 
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="13"
                    onChange={handle}
                  />
                    <label for="html">15:00-15:30</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="14"
                    onChange={handle}
                  />
                    <label for="html">15:30-16:00</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="15"
                    onChange={handle}
                  />
                    <label for="html">16:00-16:30</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="16"
                    onChange={handle}
                  />
                    <label for="html">16:30-17:00</label>
                </div>
                 {" "}
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="17"
                    onChange={handle}
                  />
                    <label for="html">17:00-17:30</label>
                </div>
                 
                <div className="check">
                  <input
                    type="radio"
                    id="html"
                    name="slot"
                    value="18"
                    onChange={handle}
                  />
                    <label for="html">17:30-18:00</label>
                </div>
              </form>
            </div>
          </div>
          <div className="shop-services">
            <div className="select-services">
              <form id="form-shop">
                <h3>Select the services you want</h3>
                <div className="service">
                  <input
                    type="checkbox"
                    id="hair"
                    name="hair"
                    value="hair"
                    // value={hair}
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
                    type="checkbox"
                    id="beard"
                    name="beard"
                    // value={beard}
                    onChange={(e) => {
                      if (e.target.checked) {
                        dispatch(addToBeard(prices.beard));
                        initialFormData.customerDetails.price = prices.beard;
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
                    type="checkbox"
                    id="head_massag"
                    name="head_massag"
                    value="head_massag"
                    onChange={(e) => {
                      if (e.target.checked) {
                        dispatch(addToHeadMassag(prices.headMassag));
                        initialFormData.customerDetails.price = prices.headMassag;
                        initialFormData.customerDetails.service = "head_massag";
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
                    type="checkbox"
                    id="hair_color"
                    name="hair_color"
                    value="hair_color"
                    onChange={(e) => {
                      if (e.target.checked) {
                        dispatch(addToHairColor(prices.hairColor));
                        initialFormData.customerDetails.price = prices.hairColor;
                        initialFormData.customerDetails.service = "head_color";
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
            </div>
            <div className="my-details">
              <div className="user-details">
                <h3>
                  <span>Time Slot : {initialFormData.customerDetails.slot} </span>
                </h3>
                <h3>
                  <span>Total Payment : {result}</span>
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
