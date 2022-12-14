import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../../../styles/myShop.css";
import { useDispatch, useSelector } from "react-redux";
import EditPhoto from "./EditPhoto";
import EditServices from "./EditServices";
import AddService from "./AddService";
import { getOwnerShopDataAction } from "../../../redux/action/ownerShopAction";
import {useNavigate} from "react-router-dom";

const MyShop = () => {
  const url = process.env.REACT_APP_SERVER_URL;

  const dispatch = useDispatch();
  const ShopData = useSelector((state) => state.ownerShopReducer);
  const shopServices = ShopData.length != 0 ? ShopData.shop_services : [];
  const [activeForm, setActiveForm] = useState(true);
 const navigate = useNavigate();
  const initialData = {
    owner_name: ShopData.owner_name,
    shop_name: ShopData.shop_name,
    shop_mobile: ShopData.shop_mobile,
    shop_address: ShopData.shop_address,
    shop_rating: ShopData.shop_rating,
    shop_location: {
      latitude: "",
      longitude: "",
    },
    _id: ShopData._id,
  };

  const updateShopDetails = async (values) => {
    const makeReq = await fetch(`${url}/updateShopDetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const response = await makeReq.json();
    console.log(response);
    if (response.message) {
      console.log(response.message);
      dispatch(getOwnerShopDataAction(ShopData._id));
    }
  };

  const removeShop = async () => {
    const makeReq = await fetch(`${url}/deletShop`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: ShopData._id }),
    });

    const response = await makeReq.json();

    if (response.message) {
      console.log(response.message);
      dispatch(getOwnerShopDataAction(ShopData._id));
      navigate("/owner/createShop");
    }
  };

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
            <div className="myShop-canvas-form-top">
              <div className="myShop-img-sec">
                <EditPhoto data={ShopData} />
              </div>

              <div className="myShop-name-sec">
                <Field
                  name="shop_name"
                  type="text"
                  className="myShop-form-input-field myshop-name"
                />
                <p>
                  <ErrorMessage name="shop_name" />
                </p>
              </div>
            </div>

            <div className="myShop-canvas-form-middle">
              <div className="myShop-details-sec">
                <div className="myShop-details-sec-name">
                  <p className="myShop-details-sec-label">Owner Name : </p>
                  <Field
                    name="owner_name"
                    type="text"
                    className="myShop-form-input-field"
                  />
                </div>
                <p>
                  <ErrorMessage name="owner_name" />
                </p>
              </div>

              <div className="myShop-details-sec">
                <div className="myShop-details-sec-name">
                  <p className="myShop-details-sec-label">Contact : </p>
                  <Field
                    name="shop_mobile"
                    type="text"
                    className="myShop-form-input-field"
                  />
                </div>
                <p>
                  <ErrorMessage name="owner_name" />
                </p>
              </div>

              <div className="myShop-details-sec">
                <div className="myShop-details-sec-name">
                  <p className="myShop-details-sec-label">Location Latitude : </p>
                  <Field
                    name="shop_location.latitude"
                    type="text"
                    className="myShop-form-input-field"
                  />
                </div>
                <p>
                  <ErrorMessage name="owner_name" />
                </p>
              </div>
              <div className="myShop-details-sec">
                <div className="myShop-details-sec-name">
                  <p className="myShop-details-sec-label">Location Longitude : </p>
                  <Field
                    name="shop_location.longitude"
                    type="text"
                    className="myShop-form-input-field"
                  />
                </div>
                <p>
                  <ErrorMessage name="owner_name" />
                </p>
              </div>
              <div className="myShop-details-sec">
                <div className="myShop-details-sec-name">
                  <p className="myShop-details-sec-label">Address : </p>
                  <Field
                    name="shop_address"
                    type="text"
                    className="myShop-form-input-field"
                  />
                </div>
                <p>
                  <ErrorMessage name="owner_name" />
                </p>
              </div>
            </div>
          </Form>
        </Formik>

        <div className="myShop-canvas-form-bottom">
          {shopServices != [] ? (
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
          <div>
            <AddService data={ShopData} />
          </div>
        </div>
        <div>
          <button onClick={removeShop}> Delet Shop </button>
        </div>
      </div>
    </>
  );
};

export default MyShop;
