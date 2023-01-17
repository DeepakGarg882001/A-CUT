import React from "react";
import shopimage from "../../../Assets/home1.jpg";
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
            <div className="xyz">
            {crrAvtar!==""? <img src={crrAvtar} 
          className="shop_img"
           alt="shop_img" /> :
          <div  className="shop_details1" >Does not have any Images</div>
          }
            </div>
          
          </div>
         
          <button className="btn">Book Now</button>
        </Link>
      </div>

    </>
  );
};

export default ShopContainer;
