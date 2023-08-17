import React, { useContext } from 'react';
import './header.css';
import CTA from './CTA';
// import me from '../../assets/profile.jpeg';
import HeaderSocial from './HeaderSocials';
import { BsMouse2 } from 'react-icons/bs';
import { ThemeContext } from '../../context';

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1 style={{ color: darkMode ? '' : 'var(--color-bg)' }}>
          BABINA GURUNG
        </h1>
        <h5 className="text-light" style={{ color: darkMode ? '' : '#000' }}>
          " I'm a Front-End Developer "
        </h5>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>

        {/* <div className="me">
          <img src={me} alt="me" />
        </div> */}

        <a href="#contact" className="scroll__down">
          Scroll Down <BsMouse2 />
        </a>
      </div>
    </header>
  );
};

export default Header;
