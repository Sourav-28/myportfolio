import React from 'react'
// import './contactMePage.css'                     // ❌ OLD: remove this import
import s from './ContactMePage.module.css'          // ✅ NEW: CSS Module import

import { theme } from '../../assets/theme.js'
import { mailIcon, phoneIcon, locationIcon } from '../../assets/icons.js'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    formData.append('access_key', '40f097a2-7164-441d-b3da-f3985539b480')

    const json = JSON.stringify(Object.fromEntries(formData))
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: json,
    }).then((r) => r.json())

    if (res.success) {
      alert(res.message)
      form.reset()
    } else {
      alert(`Something went wrong: ${res.message || ''}`)
    }
  }

  return (
    // className='contact'                         // ❌ OLD
    <div id="contact" className={s.root}>          {/* ✅ NEW */}
      {/* <div className="contact-title"> */}       {/* ❌ OLD */}
      <div className={s.title}>                    {/* ✅ NEW */}
        <h1>Contact Me</h1>
        <img src={theme} alt="Theme on contact" />
      </div>

      {/* <div className="contact-section"> */}     {/* ❌ OLD */}
      <div className={s.section}>                  {/* ✅ NEW */}
        {/* <div className="contact-left"> */}      {/* ❌ OLD */}
        <div className={s.left}>                   {/* ✅ NEW */}
          <h1>Let's Connect</h1>
          <p>
            I'm currently looking for Werkstudent roles in software development. If you have an
            opportunity or a project in mind, send me a message. You can contact me anytime.
          </p>

          {/* <div className="contact-details"> */} {/* ❌ OLD */}
          <div className={s.details}>              {/* ✅ NEW */}
            {/* <a className="contact-detail" ...> */} {/* ❌ OLD */}
            <a className={s.detail} href="mailto:souravjchitnis@gmail.com"> {/* ✅ NEW */}
              <img src={mailIcon} alt="Mail Icon" />
              <p>souravjchitnis@gmail.com</p>
            </a>

            <a className={s.detail} href="tel:+919820200010"> {/* ✅ NEW */}
              <img src={phoneIcon} alt="Phone Icon" />
              <p>Phone</p>
            </a>

            <a
              className={s.detail}                                            
              href="https://www.google.com/maps/place/Kaiserslautern,+Germany/@50.7753,7.1402/data=!3m1!4b1!4m5!3m4!1s0x47a84e3f0f8c8f5f:0x7f1c3b3e1d1a7b9f!8m2!3d50.7753!4d7.1402!3m4!1s0x47a84e3f0f8c8f5f:0x7f1c3b3e1d1a7b9f!8m2!3d50.7753!4d7.1402?hl=en" target="_blank"
            //   rel="noopener noreferrer"
            >
              <img src={locationIcon} alt="Location Icon" />
              <p>Kaiserslautern, Germany</p>
            </a>
          </div>
        </div>

        {/* <form className="contact-right"> */}     {/* ❌ OLD */}
        <form onSubmit={onSubmit} className={s.right}> {/* ✅ NEW */}
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />

          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message here" />

          {/* <button className='contact-button'> */} {/* ❌ OLD */}
          <button type="submit" className={s.button}>  {/* ✅ NEW */}
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
