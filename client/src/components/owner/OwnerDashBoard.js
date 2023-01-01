import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet,Link } from "react-router-dom";
import "../../styles/ownerDash.css";
import ownerCustomerAction from "../../redux/action/ownerCustomerAction";

const OwnerDashBoard = () => {
  const dispatch = useDispatch();
  
  const ownerData = useSelector( (state)=> state.userReducer)

  useEffect(() => {
    // dispatch(getOwnerShopDataAction(ownerData.shop_id));
  }, []);

  return (
    <>
      <div className="owner-canvas">

        
        <div className='owner-canvas-side-panel'>
                    
                    <ul className='admin-canvas-panel'>
                      <Link to="/owner/myShop" ><li className='admin-canvas-panel-sec'>MyShop</li></Link>
                      <Link to="/owner/customers" onClick={()=>dispatch(ownerCustomerAction(ownerData.shop_id))}><li className='admin-canvas-panel-sec'>Customer</li></Link>
                      <Link to="/owner/services" ><li className='admin-canvas-panel-sec'>My Services</li></Link>
                    </ul>
                    
             
        </div>

        <div className="ownercanvas-right-panel"> 
          <Outlet />
        </div>

      </div>
    </>
  );
};

export default OwnerDashBoard;
