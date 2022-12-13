import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnerShopDataAction } from "../../redux/action/ownerShopAction";
import { Outlet,Link } from "react-router-dom";

const OwnerDashBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnerShopDataAction());
  }, []);

  return (
    <>
      <div>

        
        {/* <div className='admin-canvas-side-panel'>
                    
                    <ul className='admin-canvas-panel'>
                      <Link to="/admin/admin_home" ><li className='admin-canvas-panel-sec'>Home</li></Link>
                      <Link to="/admin/service_list" ><li className='admin-canvas-panel-sec'>Services</li></Link>
                      <Link to="/admin/search_acc" ><li className='admin-canvas-panel-sec'>Account</li></Link>
                      <Link to="/admin/report_marked" ><li className='admin-canvas-panel-sec'>Report</li></Link>
                    </ul>
                    
             
        </div> */}

        <div>
          <Outlet />
        </div>

      </div>
    </>
  );
};

export default OwnerDashBoard;
