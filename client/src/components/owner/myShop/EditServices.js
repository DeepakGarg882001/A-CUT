import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { getOwnerShopDataAction } from "../../../redux/action/ownerShopAction";
import "../../../styles/myShop.css";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineFileDownloadDone } from "react-icons/md";

const EditServices = ({ data, id }) => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_SERVER_URL;
  const [activeService, setActiveService] = useState(true);

  const initialData = {
    service_name: data.service_name,
    price: data.price,
    offer: data.offer,
    service_id: data._id,
    _id: id,
    duration: data.duration,
  };

  const updateService = async (values) => {
    console.log(values);

    const makeReq = await fetch(`${url}/updateShopService`, {
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
      dispatch(getOwnerShopDataAction(id));
    }
  };
  useEffect(() => {
    dispatch(getOwnerShopDataAction(id));
  }, []);

  const deletService = async () => {
    const makeReq = await fetch(`${url}/deletShopService`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ service_id: data._id, _id: id }),
    });

    const response = await makeReq.json();

    if (response.message) {
      console.log(response.message);
      dispatch(getOwnerShopDataAction(id));
    }
  };

  return (
    <>
      <div className="myshop-service-sec">
        <Formik
          initialValues={initialData}
          onSubmit={(values) => {
            updateService(values);
          }}
        >
          <Form>
            <div>
              <div>
                {/* <label> Service Name : </label> */}
                <h2>{data.service_name}</h2>
              </div>
              <div>
                <div>
                  <label> Price : </label>
                  <Field
                    name="price"
                    type="number"
                    disabled={activeService}
                    className="myshop-service-sec-field"
                  />
                  <span>Rs</span>
                </div>
                <p>
                  <ErrorMessage name="price" />
                </p>
              </div>
              <div>
                <div>
                  <label> Offer : </label>
                  <Field
                    name="offer"
                    type="number"
                    disabled={activeService}
                    className="myshop-service-sec-field"
                  />
                  <span>%</span>
                </div>
                <p>
                  <ErrorMessage name="offer" />
                </p>
              </div>
              <div>
                <div>
                  <label> Duration : </label>
                  <Field
                    name="duration"
                    as="select"
                    type="number"
                    disabled={activeService}
                    className="myshop-service-sec-field"
                  >
                    <option value={Number(15)}> 15 </option>
                    <option value={Number(30)}> 30 </option>
                    <option value={Number(45)}> 45 </option>
                    <option value={Number(60)}> 60 </option>
                    <option value={Number(75)}> 75 </option>
                    <option value={Number(90)}> 90 </option>
                    <option value={Number(105)}> 105 </option>
                    <option value={Number(120)}> 120 </option>
                    <option value={Number(135)}> 135 </option>
                  </Field>
                  <span>mint</span>
                </div>
                <p>
                  <ErrorMessage name="duration" />
                </p>
              </div>
            </div>
            <div className="myshop-service-btn-sec">
              <div
                style={{ display: activeService === true ? "flex" : "none" }}
                onClick={() => setActiveService(false)}
              >
                <AiOutlineEdit />
              </div>
              <button
                type="submit"
                style={{ display: activeService === true ? "none" : "flex" }}
                onClick={() => setActiveService(true)}
              >
                <MdOutlineFileDownloadDone />
              </button>
              <div onClick={deletService}>
                <MdOutlineDelete />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default EditServices;
