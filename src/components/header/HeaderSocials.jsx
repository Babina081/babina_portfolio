import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
