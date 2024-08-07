import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import resume_icon from '../../assets/resume-logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div className='hero' id='home'>
        <img src={profile_img} alt="" className='profile-img'/>
        <h1><span>I'm Geethika Seewandi,</span> AI Enthusiast & Developer | Full Stack Engineer | Web & Mobile Developer</h1>
        <p>Hello! 👋 I'm a Software Engineer currently working remotely with DDI LABS and Gazeru.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">
            <a href="../../assets/resume.pdf" download>
              My resume<img src={resume_icon} alt="" /></a>
            </div>
        </div>
    </div>    
  )
}

export default Hero