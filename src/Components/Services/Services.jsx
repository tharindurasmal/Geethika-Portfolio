import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
function Services() {
  return (
    <div className='services' id='services'>
        <div className="services-title">
            <h1>My Services</h1> <hr />
        </div>
        <div className="services-container">
            {Services_Data.map((Services,index)=>{
                return <div key={index} className='services-format'>
                    <h3>{Services.s_no}</h3>
                    <h2>{Services.s_name}</h2>
                    <p>{Services.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services