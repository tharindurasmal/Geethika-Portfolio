import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div className='mywork' id='work'>
        <div className="mywork-title">
            <h1>My latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((Work,index)=>{
                return <img key={index}src={Work.w_img}/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork