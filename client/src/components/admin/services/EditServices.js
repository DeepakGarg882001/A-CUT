import React, { useState } from "react";
import "../../../styles/AllServices.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CiEdit } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import { MdKeyboardArrowDown,MdOutlineKeyboardArrowUp,MdOutlineDeleteOutline } from "react-icons/md";
import SubServices from "./subServices/SubServices";
import { useNavigate } from "react-router";
import getPlateformServiceListAction from "../../../redux/action/getPlateformServicesAction";
import { useDispatch } from "react-redux";

const EditServices = ({ data }) => {

  const [activeInput, setActiveInput] = useState(true);
  const [showAccordian, setShowAccordian] = useState(false);
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateService = async (values)=>{
    console.log(values);

    const makeReq =await fetch(`${url}/updateService`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(values)
    })
     
    const response = await makeReq.json();

    if(response.message){
      console.log(response.message);
       dispatch(getPlateformServiceListAction());
       navigate("/admin/service_list");
    }

   }

  

  const deletService = async(id)=>{
    console.log(id);
    const makeReq =await fetch(`${url}/deletService`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({_id:id})
    })
     
    const response = await makeReq.json();

    if(response.message){
       console.log(response.message);
       dispatch(getPlateformServiceListAction());
       navigate("/admin/service_list");
    }

  }

  return (
    <>
      <div className="all-service-list-head">
        <Formik
          initialValues={{
            _id:data._id,
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
