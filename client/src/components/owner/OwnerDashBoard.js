import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnerShopDataAction } from "../../redux/action/ownerShopAction";
import { Outlet,Link } from "react-router-dom";
import "../../styles/ownerDash.css";
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
                      <Link to="/admin/admin_home" ><li className='admin-canvas-panel-sec'>MyShop</li></Link>
                      <Link to="/admin/service_list" ><li className='admin-canvas-panel-sec'>Customer</li></Link>
                      <Link to="/admin/search_acc" ><li className='admin-canvas-panel-sec'>My Services</li></Link>
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
