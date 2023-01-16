import React from "react";
import shopimage from "../../../Assets/home1.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getParticularShopData } from "../../../redux/action/particularShopAction";
import "../../../styles/shopContainer.css"
const ShopContainer = ({data}) => {
  
  const dispatch = useDispatch();


  return (
    <>
    <div className="individual-shop">
       <Link to="/showShopDetails" onClick={()=>dispatch(getParticularShopData(data._id))}>
        <h3 className="shop_na">{data.shop_name}</h3>
        <img src={shopimage} alt="img" />
        <button className="btn">Book Now</button>
        </Link>
      </div>
     
    </>
  );
};

export default ShopContainer;
