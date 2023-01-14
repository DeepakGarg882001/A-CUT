import React from 'react'
import hair_cut from "../../Assets/hair_cut.png";
import '../../styles/platformServices.css';

const Services = ({data}) => {

  

  return (
    <>
      <div className='platform-service' >
         <div className='service-img'>
            <img src={hair_cut} alt="serviceImg"/>
         </div>
         <div className='platform-service-name' >
            <p>{data.service_name}</p>
         </div>
         <div className=' platform-service-price'>
            <p><span>20Rs</span><span> - </span><span>60Rs</span></p>
         </div>
      </div>
    </>
  )
}

export default Services;