import React, { useState, useReducer } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../../../styles/myShop.css";
import { useDispatch, useSelector } from "react-redux";
import EditPhoto from "./EditPhoto";
import EditServices from "./EditServices";
import AddService from "./AddService";
import { getOwnerShopDataAction } from "../../../redux/action/ownerShopAction";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import {
  MdOutlineDelete,
  MdOutlineEditNote,
  MdOutlineStarPurple500,
  MdOutlineStarHalf,
  MdOutlineStarOutline,
} from "react-icons/md";
import AddCounter from "./AddCounter";
import ShowCounters from "./ShowCounters";
import ShopTime from "./ShopTime";
const MyShop = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();

  const ShopData = useSelector((state) => state.ownerShopReducer);
  const shopServices = ShopData.length !== 0 ? ShopData.shop_services : [];

  const [activeForm, setActiveForm] = useState(true);
  const navigate = useNavigate();

  const userLocation = useSelector((state) => state.userLocationReducer);

  const reducer = (shopLocation) => {
    return (shopLocation = userLocation);
  };

  const [shopLocation, changeLocation] = useReducer(
    reducer,
    ShopData.shop_location
  );
  console.log(shopLocation);
  console.log(userLocation);

  // initial Shop Data from server
  const initialData = {
    owner_name: ShopData.owner_name,
    shop_name: ShopData.shop_name,
    shop_mobile: ShopData.shop_mobile,
    shop_address: ShopData.shop_address,
    _id: ShopData._id,
  };

  // call a fn to update Shop Details
  const updateShopDetails = async (values) => {
    const { owner_name, shop_name, shop_mobile, shop_address, _id } = values;
    const makeReq = await fetch(`${url}/updateShopDetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        owner_name,
        shop_name,
        shop_mobile,
        shop_address,
        shop_location: shopLocation,
        _id,
      }),
      credentials: "include",
    });

    const response = await makeReq.json();
    console.log(response);
    if (response.message) {
      console.log(response.message);
      dispatch(getOwnerShopDataAction(ShopData._id));
    }
  };

  // call a fn to Delete the Shop Account Permanently
  const removeShop = async () => {
    const makeReq = await fetch(`${url}/deletShop`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ _id: ShopData._id }),
      credentials: "include",
    });

    const response = await makeReq.json();

    if (response.message) {
      console.log(response.message);
      dispatch(getOwnerShopDataAction(ShopData._id));
      navigate("/owner/createShop");
    }
  };

  // return the Body of Page
  return (
    <>
      <div className="myShop-canvas">
        <Formik
          initialValues={initialData}
          onSubmit={(values) => {
            updateShopDetails(values);
          }}
        >
          <Form className="myShop-canvas-form">
            <div className="myShop-canvas-fn-btn">
              <div
                style={{ display: activeForm === true ? "flex" : "none" }}
                onClick={() => setActiveForm(false)}
                className="myShop-fn-btn-edit"
              >
                <MdOutlineEditNote className="myShop-fn-btn-edit-icon" /> Edit
              </div>
              <div
                style={{ display: activeForm === true ? "none" : "flex" }}
                onClick={() => setActiveForm(true)}
              >
                <button type="submit" className="myShop-fn-btn-save">
                  Save Details
                </button>
              </div>
            </div>
            <div className="myShop-canvas-form-top">
              <div className="myShop-img-sec">
                <EditPhoto data={ShopData} />
              </div>

              <div className="myShop-name-sec">
                <Field
                  name="shop_name"
                  type="text"
                  disabled={activeForm}
                  className="myShop-form-input-field myshop-name"
                />
                <p>
                  <ErrorMessage name="shop_name" />
                </p>
              </div>
            </div>

            <div className="myShop-canvas-form-middle">
              <div className="myShop-middle-top">
                <div>
                  <div className="myShop-details-sec">
                    <div className="myShop-details-sec-name">
                      <AiOutlineUser
                        className="myShop-details-sec-label"
                        title="owner name"
                      />
                      <Field
                        name="owner_name"
                        type="text"
                        className="myShop-form-input-field"
                        disabled={activeForm}
                      />
                    </div>
                    <p>
                      <ErrorMessage name="owner_name" />
                    </p>
                  </div>

                  <div className="myShop-details-sec">
                    <div className="myShop-details-sec-name">
                      <a href={`tel:${ShopData.shop_mobile}`} target="_self">
                        <IoCallOutline
                          className="myShop-details-sec-label"
                          title="contact number"
                        />
                      </a>
                      <Field
                        name="shop_mobile"
                        type="text"
                        disabled={activeForm}
                        className="myShop-form-input-field"
                      />
                    </div>
                    <p>
                      <ErrorMessage name="owner_name" />
                    </p>
                  </div>
                </div>
                <div>
                  <div className="myShop-middle-bottom">
                    <MdOutlineStarPurple500 className="myShop-rating-icon" />
                    <MdOutlineStarPurple500 className="myShop-rating-icon" />
                    <MdOutlineStarPurple500 className="myShop-rating-icon" />
                    <MdOutlineStarHalf className="myShop-rating-icon" />
                    <MdOutlineStarOutline className="myShop-rating-icon" />
                  </div>
                </div>
              </div>
              <div className="myShop-middle-bottom">
                <div className="myShop-details-sec-name">
                  <a
                    href={ shopLocation!==""? `https://www.google.com/maps/search/?api=1&query=${shopLocation.latitude}%2C${shopLocation.longitude}`: ""}
                  >
                    <SiGooglemaps
                      className="myShop-details-sec-label"
                      title="Address"
                    />
                  </a>
                  <Field
                    name="shop_address"
                    type="text"
                    disabled={activeForm}
                    className="myShop-form-input-field myShop-address"
                  />
                </div>
                <p>
                  <ErrorMessage name="shop_address" />
                </p>
              </div>
            </div>
          </Form>
        </Formik>
        <div className="myShop-map-sec">
          <div className="myShop-map-loc-btn" onClick={() => changeLocation()}>
            Choose Current Location
          </div>
          <iframe
            width="100%"
            height="100%"
            title="shop_location"
            src={`https://maps.google.com/maps?q=${shopLocation.latitude},${shopLocation.longitude}&z=14&output=embed`}
          ></iframe>
        </div>

        <div className="myShop-component-frame">
          <div className="myShop-heading-box">
            <h2 className="myShop-heading-text"> My Services </h2>
          </div>
          <div className="myShop-component-body">
            {shopServices !== [] ? (
              shopServices.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <EditServices data={data} id={ShopData._id} />
                  </React.Fragment>
                );
              })
            ) : (
              <div>
                <h3>you does not provide any Service</h3>
              </div>
            )}
          </div>
        </div>

        <div className="myShop-component-frame">
          <div className="myShop-heading-box">
            <h2 className="myShop-heading-text"> Add New Service </h2>
          </div>
          <div className="myShop-component-body">
            <AddService data={ShopData} />
          </div>
        </div>

        <div className="myShop-component-frame">
          <div className="myShop-heading-box">
            <h2 className="myShop-heading-text"> My Counters </h2>
          </div>
          <div className="myShop-component-body">
            <ShowCounters data={ShopData} />
          </div>
        </div>

        <div className="myShop-component-frame">
          <div className="myShop-heading-box">
            <h2 className="myShop-heading-text"> Add New Counter </h2>
          </div>
          <div className="myShop-component-body">
            <AddCounter data={ShopData} />
          </div>
        </div>

        <div className="myShop-component-frame">
          <div className="myShop-heading-box">
            <h2 className="myShop-heading-text"> Shop Timing </h2>
          </div>
          <div className="myShop-component-body">
            <ShopTime data={ShopData} />
          </div>
        </div>

        <div>
          <button onClick={removeShop}>
            <MdOutlineDelete /> Delet Shop{" "}
          </button>
        </div>

      </div>
    </>
  );
};

export default MyShop;
