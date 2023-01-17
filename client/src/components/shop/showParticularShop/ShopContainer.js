import React from "react";
// import shopimage from "../../../Assets/home1.jpg";
import shopimage from "../../../Assets/hair_cut.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getParticularShopData } from "../../../redux/action/particularShopAction";
import "../../../styles/shopContainer.css";

const ShopContainer = ({ data }) => {

  const image_url = process.env.REACT_APP_IMAGE_URL;
  const crrAvtar = data.image ? `${image_url}/${data.image.filePath}` : "";
  const dispatch = useDispatch();


  return (
    <>
      <div className="individual-shop">
        <Link to="/showShopDetails" onClick={() => dispatch(getParticularShopData(data._id))}>
          <h3 className="shop_na">{data.shop_name}</h3>
          <div 
          className="shop_details" 
          >
          {crrAvtar!==""? <img src={crrAvtar} 
          className="shop_details"
           alt="shop_img" /> :
          <div  className="" >Does not have any Images</div>
          }
          </div>
         
          <button className="btn">Book Now</button>
        </Link>
      </div>

    </>
  );
};

export default ShopContainer;
