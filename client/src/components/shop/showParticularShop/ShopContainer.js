import React from "react";
const ShopContainer = (props) => {
  return (
    <>
    <div className="individual-shop">
        <h3>{props.name}</h3>
        <img src={props.img} alt="img" />
        <button className="btn">Book Now</button>
      </div>
     
    </>
  );
};

export default ShopContainer;
