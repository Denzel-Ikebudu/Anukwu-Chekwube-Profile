import React from 'react'
import './Contact.css'
import linkedin_logo from '../Assets/linkedIn.png'
import call_icon from '../Assets/call-icon.png'
import mail_icon from '../Assets/gmai-icon.png'

const Contact = () => {
  return (
    <div className='contact' id='contact-section'>
        <h2>CONTACT <span>ME</span></h2>
        <p>If you have any questions or 
            would like to work together, feel free to reach out!</p>
        <div className='contact-info'>

            <div className='contact-item'>
                <a href="mailto:immaginationbiog@gmail.com">
                    <img src={mail_icon} />
                    <p>Immagination</p>
                </a>
            </div>

            <div className='contact-item'>
                 <a href="tel:0802 747 2551">
                    <img src={call_icon} alt="" />
                    <p>0802 747 2551</p>
                </a>
            </div>

            <div className='contact-item'>
                <a href="https://www.linkedin.com/in/chekwube-immanuel-anukwu-607325245">
                    <img src={linkedin_logo} alt="" />
                    <p>Anukwu Chekwube</p>
                </a>
            </div>
        </div>
        <p>Copyright &copy; 2025 My Profile.
            <br/> 
            All rights reserved</p>
    </div>
  )
}

export default Contact
