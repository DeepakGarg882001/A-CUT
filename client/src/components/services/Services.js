import React from 'react'

const Services = ({data}) => {
  return (
    <>
      <div>
         <div>
            <img src={`${data.imgPath}`}/>
         </div>
         <div>
            <p>hair cut</p>
         </div>
         <div>
            <p><span>20Rs</span><span> - </span><span>60Rs</span></p>
         </div>

      </div>

    
    </>
  )
}

export default Services;