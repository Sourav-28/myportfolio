import React from 'react';
import s from './ContactMePage.module.css';
import { theme } from '../../assets/theme.js';
import { mailIcon, phoneIcon, locationIcon } from '../../assets/icons.js';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    formData.append('access_key', '40f097a2-7164-441d-b3da-f3985539b480');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then((r) => r.json());

    if (res.success) {
      alert(res.message);
      form.reset();
    } else {
      alert(`Something went wrong: ${res.message || ''}`);
    }
  };

  return (
    <div id="contact" className={s.root}>
      <div className={s.title}>
        <h1>Contact Me</h1>
        <img src={theme} alt="Theme on contact" />
      </div>

      <div className={s.section}>
        <div className={s.left}>
          <h1>Let's Connect</h1>
          <p>
            I'm currently looking for Werkstudent roles in software development. If you have an
            opportunity or a project in mind, send me a message. You can contact me anytime.
          </p>

          <div className={s.details}>
            <a className={s.detail} href="mailto:souravjchitnis@gmail.com">
              <img src={mailIcon} alt="Mail Icon" />
              <p>souravjchitnis@gmail.com</p>
            </a>

            <a className={s.detail} href="tel:+919820200010">
              <img src={phoneIcon} alt="Phone Icon" />
              <p>Phone</p>
            </a>

            <a
              className={s.detail}
              href="https://www.google.com/maps/search/?api=1&query=Kaiserslautern%2C%20Germany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={locationIcon} alt="Location Icon" />
              <p>Kaiserslautern, Germany</p>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className={s.right}>
          <label className={s.label}>Your Name</label>
          <input className={s.input} type="text" name="name" placeholder="Enter your name" />

          <label className={s.label}>Your Email</label>
          <input className={s.input} type="email" name="email" placeholder="Enter your email" />

          <label className={s.label}>Write your message here</label>
          <textarea
            className={s.textarea}
            name="message"
            rows="8"
            placeholder="Enter your message here"
          />

          <button type="submit" className={s.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
