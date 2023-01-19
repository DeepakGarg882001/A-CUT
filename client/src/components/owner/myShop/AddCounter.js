import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { getOwnerShopDataAction } from "../../../redux/action/ownerShopAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddCounter = ({ data }) => {

  const url = process.env.REACT_APP_SERVER_URL;
 const dispatch = useDispatch();
  const initialValues = {
    counter_number: "",
    counter_head: "",
    _id: data._id,
  };

  const validation = "";

  const addNewCounter = async (values) => {

    const { counter_number } = values;

    let counterLength = data.shop_counters.length;
    let shopCounters = data.shop_counters;
    for (let j = 0; j < counterLength; j++) {
      if (counter_number === shopCounters[j].counter_number) {
       return toast.error("This Counter Number Already Exist");
      }
    }

    const makeReq = await fetch(`${url}/addShopCounter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(values),
    });

    const response = await makeReq.json();

    if (response.message) {
      toast.success(response.message);
      dispatch(getOwnerShopDataAction(data._id));
    }
  };
  return (
    <>
      <div>
          <Formik
            initialValues={initialValues}
            validation={validation}
            onSubmit={(values) => {
              addNewCounter(values);
            }}
          >
            <Form>
              <div>
                <label>Counter Number : </label>
                <Field type="number" placeholder="1" name="counter_number" />
                <p>
                  <ErrorMessage name="counter_number" />
                </p>
              </div>

              <div>
                <label>Counter Head : </label>
                <Field type="text" placeholder="Ram" name="counter_head" />
                <p>
                  <ErrorMessage name="counter_head" />
                </p>
              </div>

              <button type="submit">Create</button>
            </Form>
          </Formik>
      </div>
    </>
  );
};

export default AddCounter;
