import React, { useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import "../../../styles/AllServices.css";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import getPlateformServiceListAction from "../../../redux/action/getPlateformServicesAction";
import EditServices from "./EditServices";
const AllServices = () => {

  const dispatch = useDispatch();
 
  const Services = useSelector( (state) => state.plateformServiceReducer);
 
  useEffect( ()=>{
    dispatch(getPlateformServiceListAction());
  },[]);

  return (
    <>
      <div className="all-services-canvas">
       
       <div>
        <Link to="/admin/add_service">
          <div className="all-service-add-service-sec">
            <button className="add-service-btn">
              <BsPlusLg />
            </button>
          </div>
        </Link>
       </div>
      
       <div className="all-services-page">
              
              <div className="all-service-canvas-head-sec">
                <h2> <span className="all-service-head-our">Our </span><span className="all-services-head-service">Services</span> </h2>
              </div>

              <div className="all-services-service-sec">
                {Services.length!==0? Services.map((data,index)=>{
                  return(
                    <React.Fragment key={index}>
                      <EditServices data={data} />
                    </React.Fragment>
                  )
                }) : (
                  <div>
                  <h2>No Services Yet</h2>
                </div>)}
              </div>


       </div>

      </div>
    </>
  );
};

export default AllServices;
