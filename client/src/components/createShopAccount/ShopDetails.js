import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import Chip from "@mui/material/Chip";
import Swal from "sweetalert2";
import getPlateformServiceListAction from "../../redux/action/getPlateformServicesAction";


const ShopDetails = () => {
  const user = useSelector((state) => state.Current_User_Reducer);
  const services = useSelector((state) => state.Service_Reducer);
  const url = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();
  const [myServices, setMyServices] = useState([]);

  const initialFormData = {
    owner_name: user.name,
    owner_id: user._id,
    shop_name: "",
    shop_mobile: "",
    shop_address: "",
    shop_services: myServices,
  };

  const formValidation = yup.object().shape({
    shop_name: yup
      .string()
      .min(2, "Incorrect")
      .required(" Please Enter Your Shop Name "),
    shop_mobile: yup
      .string()
      .min(10)
      .max(10)
      .required(" Please Provide Your Shop Contact Number "),
    shop_address: yup
      .string()
      .min(20)
      .max(200)
      .required("Please Provide Your Shop Address"),
  });

  const changeMyService = ({ type, name }) => {
    if (type) {
      setMyServices((myServices) => [...myServices, { service_name: name }]);
      console.log(myServices);
    } else if (!type) {
      setMyServices((data) =>
        data.filter((chips) => chips.service_name !== name)
      );
      console.log(myServices);
    }
  };

  const postDataToServer = async (values) => {
    const makeReq = await fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const response = await makeReq.json();

    if (response.error) {
      if (response.error.name) {
        Swal.fire("Sorry", `${response.error.name}`, "error");
      } else {
        Swal.fire("Sorry", `${response.error}`, "error");
      }
    }
    if (response.message) {
      Swal.fire(" Successfully Created ! ", "", "success");
    }
  };

  useEffect(() => {
    dispatch(getPlateformServiceListAction());
  }, []);

  return (
    <>
      <div>
        <Formik
          initialValues={initialFormData}
          validationSchema={formValidation}
          onSubmit={(values) => {
            postDataToServer(values);
          }}
        >
          <Form>
            <div>
              <Field
                name="shop_name"
                type="text"
                placeholder="Enter Shop Name"
              />
              <ErrorMessage name="shop_name" />
            </div>
            <div>
              <Field
                name="shop_mobile"
                type="number"
                placeholder="Enter Shop Contact number"
              />

              <p>
                <ErrorMessage name="shop_mobile" />
              </p>
            </div>
            <div>
              <Field
                name="shop_address"
                type="text"
                placeholder="Enter Shop Address"
              />
              <p>
                <ErrorMessage name="shop_address" />
              </p>
            </div>
            {/* {myServices
              ? myServices.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Chip label={data.service_name} />
                    </React.Fragment>
                  );
                })
              : null} */}

            {services
              ? services.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <input
                        type="checkbox"
                        value={data.service_name}
                        onClick={(e) =>
                          changeMyService({
                            type: e.target.checked,
                            name: data.service_name,
                          })
                        }
                      />
                      <label>{data.service_name} </label>
                    </React.Fragment>
                  );
                })
              : null}

            <div>
              <button type="submit"> Proceed </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ShopDetails;
