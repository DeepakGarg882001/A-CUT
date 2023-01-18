import React from 'react'
import EditShopTime from './EditShopTime';
const ShopTime = ({data}) => {
 
  const shopTimes = data.shop_time.length!==0? data.shop_time:[];
  const ShopData= data;
  return (
    <>
        <div>
          {
            shopTimes.length!==0? shopTimes.map((data,index)=>{
             return(
              <React.Fragment key={index}>
               <EditShopTime data={data} ShopData={ShopData}/>
              </React.Fragment>
             )
            }): null
          }
        </div>
    </>
  )
}

export default ShopTime;