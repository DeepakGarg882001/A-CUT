import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getOwnerShopDataAction } from "../../../redux/action/ownerShopAction";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { toast } from "react-toastify";
import "../../../styles/editcounter.css";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete, MdOutlineFileDownloadDone } from "react-icons/md";

const EditCounter = ({ data, _id, ShopData }) => {
  const url = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();
  const [activeCounter, setActiveCounter] = useState(true);

  const initialValues = {
    counter_number: data.counter_number,
    counter_head: data.counter_head,
    _id: _id,
    counter_id: data._id,
  };

  const validation = "";

  const addNewCounter = async (values) => {
    console.log(values);

    const { counter_number } = values;

    let counterLength = ShopData.shop_counters.length;
    let shopCounters = ShopData.shop_counters;
    for (let j = 0; j < counterLength; j++) {
      if (counter_number === shopCounters[j].counter_number) {
        if (data._id === shopCounters[j]._id) {
          continue;
        } else {
          return toast.error("This Counter Number Already Exist");
        }
      }
    }

    const makeReq = await fetch(`${url}/updateShopCounter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(values),
    });

    const response = await makeReq.json();

    if (response.message) {
      console.log(response.message);
      toast.success(response.message);
      dispatch(getOwnerShopDataAction(_id));
    }
  };

  const deletCounter = async () => {

    const makeReq = await fetch(`${url}/deletShopCounter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ counter_id: data._id, _id }),
    });

    const response = await makeReq.json();

    if (response.message) {
      console.log(response.message);
      toast.success(response.message);
      dispatch(getOwnerShopDataAction(_id));
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
            <div className="edit_counter">
              <div>
                <label>Counter Number : </label>
                <Field className="text_area"
                  type="number"
                  placeholder="1"
                  name="counter_number"
                  disabled={activeCounter}
                />
                <p>
                  <ErrorMessage name="counter_number" />
                </p>
              </div>

              <div>
                <label>Counter Head : </label>
                <Field className="text_area"
                  type="text"
                  placeholder="Ram"
                  name="counter_head"
                  disabled={activeCounter}
                />
                <p>
                  <ErrorMessage name="counter_head" />
                </p>
              </div>

              <div >
                <div>
                  <button >

                    EDIT
                     <AiOutlineEdit /> 

                    <div
                      style={{ display: activeCounter === true ? "flex" : "none" }}
                      onClick={() => setActiveCounter(false)}
                    >

        </div> 
                  </button>
                 </div>

                <div>
                  <button 
                    type="submit"
                    style={{ display: activeCounter === true ? "none" : "flex" }}
                    onClick={() => setActiveCounter(true)}>
                    <MdOutlineFileDownloadDone />
                    update

                  </button >
                </div>


                <div onClick={() => deletCounter()} >
                  <button >

                    <MdOutlineDelete />
                    del
                  </button>
                </div>
              </div>
            </div>

          </Form>
        </Formik>
      </div>
    </>
  );
};

export default EditCounter;
