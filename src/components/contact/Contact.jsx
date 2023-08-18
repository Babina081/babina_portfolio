import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { GrMap } from 'react-icons/gr';

import { BsWhatsapp, BsPinMap } from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { TiArrowRightOutline } from 'react-icons/ti';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_wkb59bl',
      'template_oiztpml',
      form.current,
      'p_6MlZTEMQIpi_1il'
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="a">
        <h5>Let's Initiate our Converstion</h5>
        <h2>CONTACT ME</h2>
        <div className="bar"></div>
      </div>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>babitamoo333@gmail.com</h5>
            <a href="mailto:babitamoo333@gmail.com" target="_blank">
              Write Me <TiArrowRightOutline />
            </a>
          </article>
          <article className="contact__option">
            <BsPinMap className="contact__option-icon" />
            <h4>Location</h4>
            <h5>Nayagaun-15, Pokhara</h5>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+977 9812345678</h5>
            <a
              href="https://api.whatsapp.com/send?phone+9779846842387"
              target="_blank"
            >
              Write Me <TiArrowRightOutline />
            </a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="name" placeholder="Your Email" required />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="form__btn btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
