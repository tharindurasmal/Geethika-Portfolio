import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
function Hero() {
  return (
    <div className='hero' id='home'>
        <img src={profile_img} alt="" className='profile_img'/>
        <h1><span>I'm Geethika Seewandi,</span> AI Enthusiast & Developer | Full Stack Engineer | Web & Mobile Developer</h1>
        <p>Hello! 👋 I'm a Software Engineer currently working remotely with DDI LABS and Gazeru.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero