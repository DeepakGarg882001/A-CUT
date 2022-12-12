import React, { useState } from "react";
import "../../../styles/AllServices.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CiEdit } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import { MdKeyboardArrowDown,MdOutlineKeyboardArrowUp,MdOutlineDeleteOutline } from "react-icons/md";
import SubServices from "./subServices/SubServices";
const EditServices = ({ data }) => {

  const [activeInput, setActiveInput] = useState(true);
  const [showAccordian, setShowAccordian] = useState(false);
  
  const updateService = async (values)=>{
    console.log(values);

  } 

  const deletService = async(id)=>{
    console.log(id);

  }

  return (
    <>
      <div className="all-service-list-head">
        <Formik
          initialValues={{
            service_name: data.service_name,
          }}
          onSubmit={(values)=>{
            updateService(values);
          }}
        >
          <Form className="all-services-list-head-form">
            <Field
              className="all-services-list-head-field"
              readOnly={activeInput}
              name="service_name"
              placeholder=" Please Enter Service Name "
            />

            <div
              style={{ display: activeInput === true ? "flex" : "none" }}
              className="all-services-list-head-btn"
              onClick={() => setActiveInput(false)}
            >
              <CiEdit />
            </div>
            <button
              style={{ display: activeInput === true ? "none" : "flex" }}
              className="all-services-list-head-btn"
              type="submit"
              onClick={() => setActiveInput(true)}
            >
              <TiTickOutline />
            </button>
            <div 
              onClick={() => deletService(data._id)}
              className="all-services-list-head-btn"
            >
              <MdOutlineDeleteOutline />
            </div>
            <div 
              style={{display: showAccordian === true ? "none" : "flex" }}
              onClick={() => setShowAccordian(true)}
              className="all-services-list-head-btn"
            >
              <MdKeyboardArrowDown />
            </div>
            <div 
              style={{display: showAccordian === true ? "flex" : "none" }}
              onClick={() => setShowAccordian(false)}
              className="all-services-list-head-btn"
            >
              <MdOutlineKeyboardArrowUp />
            </div>
          </Form>
        </Formik>
      </div>

      <div style={{display: showAccordian === true ? "flex" : "none" }}>
            <SubServices data={data}/>
      </div>
    </>
  );
};

export default EditServices;
