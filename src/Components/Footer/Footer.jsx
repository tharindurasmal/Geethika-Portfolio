import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import YouTubeSubscribeButton from '../Subscribe/YouTubeSubscribeButton';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            </div>
            <div className="footer-top-right">
                <div className="footer-subsc">
                    <YouTubeSubscribeButton />
                </div>
            </div>
        </div>
            <hr className='line'/>
            <div className="footer-bottom">
                <p className='footer-bottom-left'>&copy; 2024 Geethika Seewandi. All right reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        
    </div>
  )
}

export default Footer