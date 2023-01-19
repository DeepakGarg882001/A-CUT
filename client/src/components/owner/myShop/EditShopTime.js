import React from "react";
import "../../../styles/editshoptime.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineFileDownloadDone } from "react-icons/md";

const EditShopTime = ({ data, ShopData }) => {
  const initialData = {
    open_hour: "",
    open_mint: "",
    open_formate: "",
    close_hour: "",
    close_mint: "",
    close_formate: "",
  };

  const minutes = [];
  const hours = [];

  for (let i = 0; i < 12; i++) {
    hours.push(i);
  }
  for (let k = 0; k < 4; k++) {
    minutes.push(k);
  }

  const giveHours = (number) => {
    return <option value={number + 1}> {number + 1} </option>;
  };

  const giveMinutes = (number) => {
    switch (number) {
      case 0:
        return <option value={"00"}> {"00"} </option>;

      case 1:
        return <option value={"15"}> {"15"} </option>;

      case 2:
        return <option value={"30"}> {"30"} </option>;

      case 3:
        return <option value={"45"}> {"45"} </option>;

      default:
        break;
    }
  };

  return (
    <>
      <div >
        <Formik initialValues={initialData}>
          <Form  className="main_time_class">
            <div className="editshop_time" >
              <div></div>
              <div >
                <p>{data.day}</p>
              </div>
              <div>
                <label>Open Time : </label>
                <div className="shoptime_option">
                  <Field as="select" name="open_hour">
                    {hours.length !== 0
                      ? hours.map((data, index) => {
                        return (
                          <React.Fragment key={index}>
                            {giveHours(data)}
                          </React.Fragment>
                        );
                      })
                      : null}
                  </Field>

                  <Field as="select" name="open_mint">
                    {hours.length !== 0
                      ? hours.map((data, index) => {
                        return (
                          <React.Fragment key={index}>
                            {giveMinutes(data)}
                          </React.Fragment>
                        );
                      })
                      : null}
                  </Field>

                  <Field as="select" type="open_formate">
                    <option value={"AM"}> AM </option>
                    <option value={"PM"}> PM </option>
                  </Field>
                </div>
              </div>
              <div>
                <label>Close Time: </label>
                <div className="shoptime_option">
                  <Field as="select" name="close_hour">
                    {hours.length !== 0
                      ? hours.map((data, index) => {
                        return (
                          <React.Fragment key={index}>
                            {giveHours(data)}
                          </React.Fragment>
                        );
                      })
                      : null}
                  </Field>

                  <Field as="select" name="close_mint">
                    {hours.length !== 0
                      ? hours.map((data, index) => {
                        return (
                          <React.Fragment key={index}>
                            {giveMinutes(data)}
                          </React.Fragment>
                        );
                      })
                      : null}
                  </Field>

                  <Field as="select" type="close_formate">
                    <option value={"AM"}> AM </option>
                    <option value={"PM"}> PM </option>
                  </Field>
                </div>
              </div>
              <div className="edit_button">
                <div>
                 <button id="button_abc">
                  <AiOutlineEdit 
                  />
                 Edit
                  
                 </button> 
                </div>
                <div>
                  <button id="button_abc">
                                        <MdOutlineFileDownloadDone/>

                    update
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

export default EditShopTime;
