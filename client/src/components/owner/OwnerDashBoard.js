import React ,{useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getOwnerShopDataAction } from '../../redux/action/ownerShopAction';
import { Outlet } from 'react-router';

const OwnerDashBoard = () => {
  
  const dispatch= useDispatch();

  useEffect(()=>{
   dispatch(getOwnerShopDataAction());
  },[]);

  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default OwnerDashBoard;