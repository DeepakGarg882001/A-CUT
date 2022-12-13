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
    userId: 1,
    name: userName,
    selectServices: {
      services: new Set([]),
      price: new Set([]),
    },
    result: result,
  });

  const prices = {
    hair: 50,
    beard: 30,
    headMassag: 70,
    hairColor: 100,
  };
  const sub = () => {
    // console.log("use state",{userName,hair,beard,result});
    console.log("Yes");
    console.log(initialFormData);
    // initialFormData.selectServices.services = Array.from(initialFormData.selectServices.services);
    fetch(`${url}/bookAppointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(initialFormData),
    }).then((res) => {
      console.warn("res", res); 
    });
  };
  const changeList = (serviceName, price, checked) => {
    console.log(initialFormData);
    console.log("working");
    if (checked === true) {
      initialFormData.selectServices.services.add(serviceName);
      initialFormData.selectServices.price.add(price);
      dispatch(addToHair(prices.hair));
      initialFormData.result = result;
    } else {
      initialFormData.selectServices.services.delete(serviceName);
      initialFormData.selectServices.price.delete(price);
      dispatch(removeFromHair(prices.hair));
      initialFormData.result = result;
    }
    setInitialFormData((prevData) => {
      return { ...initialFormData };
    });
    console.log(initialFormData);
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
            <h3>9 AM to 10AM</h3>
            <h3>10 AM to 11AM</h3>
            <h3>11 AM to 12AM</h3>
            <h3>12 PM to 01PM</h3>
            <h3>01 PM to 02PM</h3>
            <h3>02 PM to 03PM</h3>
            <h3>03 PM to 04PM</h3>
            <h3>04 PM to 05PM</h3>
            <h3>05 PM to 06PM</h3>
            <h3>06 PM to 07PM</h3>
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
                      changeList("Beard", prices.hair, e.target.checked);
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
                      changeList("Head", prices.head, e.target.checked);
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
                      changeList(
                        "Hair color",
                        prices.hairColor,
                        e.target.checked
                      );
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
              {/* <h3>See your booking :- </h3> */}
              <div className="user-details">
                <h3>
                  <span>Time Slot :-</span>
                </h3>
                <h3>
                  <span>Time Duration :-</span>
                </h3>
                <h3>Total amount you have to pay :-<span>Total Price : {result}</span></h3>
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