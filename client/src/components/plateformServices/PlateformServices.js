import React from 'react'
import hair_cut from "../../Assets/hair_cut.png";

const Services = ({data}) => {
  return (
    <>
      <div>
         <div>
            <img src={hair_cut} style={{width:"170px"}}alt="serviceImg"/>
         </div>
         <div>
            <p>{data.service_name}</p>
         </div>
         <div>
            <p><span>20Rs</span><span> - </span><span>60Rs</span></p>
         </div>

      </div>

    
    </>
  )
}

export default Services;