import React from 'react'
import './contact.css'
import {theme} from '../../assets/theme.js'
import {mailIcon,phoneIcon,locationIcon} from '../../assets/icons.js'
// import { byPrefixAndName } from 'react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ll from '../../assets/linkedIn.png'

const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const form=event.target;
    const formData = new FormData(form);

    formData.append("access_key", "40f097a2-7164-441d-b3da-f3985539b480");

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
      alert(res.message);
      form.reset();
    }else{
        alert(`Something went wrong: ${res.message || ""}`);
    }
  };

  return (
    <div id="contact"className='contact'>
        <div className="contact-title">
            <h1>Contact Me</h1>
            <img src={theme} alt="Theme on contact" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Connect</h1>
                <p>I'm currently Currently looking for Werkstudent roles in software development. If you have an opportunity or a project in mind, send me a message. You can contact me anytime.</p>
                <div className="contact-details">
                    <a className="contact-detail" href="mailto:souravjchitnis@gmail.com">
                        <img src={mailIcon} alt="Mail Icon" />
                        <p>souravjchitnis@gmail.com</p>
                    </a>
                    <a className="contact-detail" href="tel:+919820200010">
                        <img src={phoneIcon} alt="Phone Icon" />
                        <p>Phone</p>
                    </a>
                    <a className="contact-detail" href="https://www.google.com/maps/place/Kaiserslautern,+Germany/@50.7753,7.1402/data=!3m1!4b1!4m5!3m4!1s0x47a84e3f0f8c8f5f:0x7f1c3b3e1d1a7b9f!8m2!3d50.7753!4d7.1402!3m4!1s0x47a84e3f0f8c8f5f:0x7f1c3b3e1d1a7b9f!8m2!3d50.7753!4d7.1402?hl=en" target="_blank">
                        <img src={locationIcon} alt="Location Icon" />
                        <p>Kaiserslautern, Germany</p>
                    </a>
                    
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message"rows="8" placeholder="Enter your message here"></textarea>
                <button type="submit" className='contact-button'>Send</button>
            </form>
        </div>
    
    </div>
  )
}

export default Contact