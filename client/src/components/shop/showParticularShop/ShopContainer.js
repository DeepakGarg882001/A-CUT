import React from "react";
import shopimage from "../../../Assets/home1.jpg";
const ShopContainer = ({data}) => {
  return (
    <>
    <div className="individual-shop">
        <h3>{data.shop_name}</h3>
        <img src={shopimage} alt="img" />
        <button className="btn">Book Now</button>
      </div>
     
    </>
  );
};

export default ShopContainer;
