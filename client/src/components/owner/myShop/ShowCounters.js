import React from 'react'
import EditCounter from './EditCounter';

const ShowCounters = ({data}) => {
     const counters = data.shop_counters.length!==0? data.shop_counters:[];
     const shop_id = data._id;
     const ShopData = data;
    return (
      <>
      <div>
          {
            counters.length!==0? counters.map((data,index)=>{
              return(
                <React.Fragment key={index}>
                  <EditCounter data={data} _id={shop_id} ShopData={ShopData}/>
                </React.Fragment>
              )
            })
            : null
          }
  
      </div>
          
      </>
    )
  }

export default ShowCounters;