import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getParticularShopData } from '../../../redux/action/particularShopAction';

const ShopLayout = ({data}) => {
  
  const dispatch= useDispatch();
  

  return (
    <>
       <div>
         <Link to ="/showShopDetails" onClick={()=> dispatch(getParticularShopData(data._id))}>
          <div><h2>{data.shop_name}</h2></div>
          <div></div>
          </Link>
       </div>

    </>
  )
}

export default ShopLayout;