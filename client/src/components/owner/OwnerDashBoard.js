import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import "../../styles/ownerDash.css";
import ownerCustomerAction from "../../redux/action/ownerCustomerAction";

const OwnerDashBoard = () => {
  const dispatch = useDispatch();

  const ownerData = useSelector((state) => state.userReducer);
 

  useEffect(() => {
    window.scrollTo({top:0,behavior:"smooth"});
    // dispatch(getOwnerShopDataAction(ownerData.shop_id));
  }, []);

  return (
    <>
      <div className="owner-canvas">
        <div className="owner-canvas-side-panel">
          <ul className="admin-canvas-panel">
            <Link to="/owner/myShop">
              <li className="admin-canvas-panel-sec">MyShop</li>
            </Link>
            <Link
              to="/owner/customers"
              onClick={() =>
                dispatch(
                  ownerCustomerAction({
                    shop_id: ownerData.shop_id,
                    counter_number: 1,
                    date: new Date().toDateString(),
                  })
                )
              }
            >
              <li className="admin-canvas-panel-sec">Customer</li>
            </Link>
            <Link to="/owner/services">
              <li className="admin-canvas-panel-sec">My Services</li>
            </Link>
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
