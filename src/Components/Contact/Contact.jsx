import React from 'react'
import './Contact.css'
import theme_partern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin_icon from '../../assets/linkedin.png'
import swal from 'sweetalert';
const Contact = () => {
    //web3form

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f7c54076-6cc6-4be3-8348-5a394146e754");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            swal({
                title: "Success!",
                text: "Your message has been sent successfully.",
                icon: "success",
                button: "Aww yiss!",
              });
        }
      };



  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1><hr />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable, you can contact anytime</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <a href="https://www.linkedin.com/in/geethika-sewwandi-36b2b41a8/"><img src={linkedin_icon} alt="" /></a><a href="https://www.linkedin.com/in/geethika-sewwandi-36b2b41a8/"><p>Geethika Sewwandi</p></a>
                    </div>
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p><a href="mailto:geethikasew97@gmail.com">geethikasew97@gmail.com</a></p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Ratnapura District, Sabaragamuwa Province, Sri Lanka</p>
                    </div>
                
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Mail</label>
                <input type="email" placeholder='Enter Your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
    
  )
}

export default Contact