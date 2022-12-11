import React from "react";
import "../../styles/shop1.css";
import img1 from "../../Assets/shop1.jpg";
import img2 from "../../Assets/shop2.jpg";
import img3 from "../../Assets/shop3.jpg";
import {
  addToHair,
  removeFromHair,
  addToBeard,
  removeFromBeard,
  addToHeadMassag,
  removeFromHeadMassag,
  addToHairColor,
  removeFromHairColor,
} from "../../redux/action/shopAction.js";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";

const Shop1 = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();
  const result = useSelector((state) => state.shopDataReducer);
  const userData = useSelector((state) => state.Current_User_Reducer);
  console.log("use selector data", result);
  const userName = userData.name;

  let waitingList = 0;
  const initialFormData = {
    name: userName,
    services: {
      hair: "",
      beard: "",
      headMassag: "",
      hairColor: "",
    },
    result,
  };
  const prices = {
    hair: 50,
    beard: 30,
    headMassag: 70,
    hairColor: 100,
  };



  return (
    <>
      <header id="header">
        <h2>Near Government School (Jant-Pali Mahendergarh)</h2>
        <div className="waiting-list">
          <h3>
            Waiting List: <span>{waitingList}</span>{" "}
          </h3>
        </div>
        <div className="designer">
          <h3>Designs you can select here...</h3>
          <div className="designs">
            <div className="design">
              <img src={img1} alt="img" />
            </div>
            <div className="design">
              <img src={img2} alt="img" />
            </div>
            <div className="design">
              <img src={img3} alt="img" />
            </div>
          </div>
          <div className="designs">
            <div className="design">
              <img src={img1} alt="img" />
            </div>
            <div className="design">
              <img src={img2} alt="img" />
            </div>
            <div className="design">
              <img src={img3} alt="img" />
            </div>
          </div>
          <h3>Enter the details for booking </h3>
          
            <form id="form-shop">
              <h3>Select the services you want</h3>
              <div className="service">
                <input
                  type="checkbox"
                  id="hair"
                  name="hair"
                  value="hair"
                  onChange={(e) => {
                    console.log("nit",e.target.checked);
                    if (e.target.checked==true) {
                      dispatch(addToHair(prices.hair));
                    } else {
                      dispatch(removeFromHair(prices.hair));
                    }
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
                  value="beard"
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(addToBeard(prices.beard));
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
              <span>Total Price : {result}</span>
              <button className="btn" type="submit">Submit</button>
            </form>
        </div>
      </header>
    </>
  );
};

export default Shop1;
