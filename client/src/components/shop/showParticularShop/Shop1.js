import React,{useState,useEffect} from "react";
import "../../../styles/shop1.css";
import * as geolib from 'geolib';
import DaySchedule from "./DaySchedule";
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
  const ShopData = useSelector( (state)=> state.particularShopReducer);
  const userLocation  = useSelector( (state)=> state.userLocationReducer);

  const distance =  geolib.getPreciseDistance(userLocation,ShopData.shop_location);
  const [distanceFromUser,setDistanceFromUser] = useState(distance);

  const convertDistance =()=>{
  if(distanceFromUser>499){
    setDistanceFromUser(`${geolib.convertDistance(distanceFromUser,'km').toFixed(1)} km`);
  }else{
    setDistanceFromUser(`${geolib.convertDistance(distanceFromUser,'m')} meter`);
  }
  

   }
  useEffect( ()=>{
    convertDistance();

  },[]);


  console.log("use selector data", result);
  const userName = userData.name;

  const [initialFormData, setInitialFormData] = useState({
    date: new Date().toJSON().slice(0, 10),
    slots: [],
    shop_id:ShopData._id,
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
    Swal.fire("Successfully booking the details");
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
