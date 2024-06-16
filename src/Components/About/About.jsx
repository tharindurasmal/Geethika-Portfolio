import React from 'react'
import './About.css'
import profile_image from '../../assets/about_profile.jpeg'
function About() {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About me</h1><hr />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_image} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! 👋 I'm a Software Engineer currently working remotely with DDI LABS and Gazeru. I'm passionate about building innovative software solutions and have a strong foundation in technologies such as Angular, Flutter, Python, Asure,Hibernate, Amazon Web Services (AWS), Docker, CircleCI, and more. Prior to joining DDI LABS, I had the privilege of interning at Grubtech, where I honed my skills in software development and gained hands-on experience with React.js and Spring Boot.</p>
                    <p>My journey into the world of software began during my freelance period, where I worked on diverse projects, leveraging technologies like MongoDB, Express.js, Node.js, and AngularJS.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Java</p><hr style={{width:"80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Flutter</p><hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Angular</p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Python</p><hr style={{width:"90%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            
            <div className="about-achievement">
                <h1>55+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENT</p>
            </div>
        </div>
    </div>
  )
}

export default About