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
         </div> 
      </div>
    </>
  )
}

export default Services;