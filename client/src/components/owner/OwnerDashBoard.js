import React ,{useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getOwnerShopDataAction } from '../../redux/action/ownerShopAction';

const OwnerDashBoard = () => {
  
  const dispatch= useDispatch();

  useEffect(()=>{
   dispatch(getOwnerShopDataAction());
  },[]);

  return (
    <div>OwnerDashBoard</div>
  )
}

export default OwnerDashBoard;