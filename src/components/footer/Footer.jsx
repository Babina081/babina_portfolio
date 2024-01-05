import React from 'react';
import './footer.css';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        Babina Gurung
      </a>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#academic">Academics</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/" target='blank'>
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/gurung.babina/" target='blank'>
          <FiInstagram />
        </a>
        <a
        href="https://www.linkedin.com/in/babina-gurung-8303631b8/"
        target="blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Babina081" target="blank">
        <FaGithub />
      </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Babina Gurung. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
