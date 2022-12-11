import React from "react";
import { BsPlusLg } from "react-icons/bs";
import "../../../styles/AllServices.css";
import { Link } from "react-router-dom";

const AllServices = () => {
  return (
    <>
      <div className="all-services-canvas">

        <Link to="/admin/add_service">
          <div className="all-service-add-service-sec">
            <button className="add-service-btn">
              <BsPlusLg />
            </button>
          </div>
        </Link>


      </div>
    </>
  );
};

export default AllServices;
