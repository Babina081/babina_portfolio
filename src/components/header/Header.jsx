import React, { useContext } from 'react';
import './header.css';
import CTA from './CTA';
// import me from '../../assets/profile.jpeg';
import HeaderSocial from './HeaderSocials';
import { BsMouse2 } from 'react-icons/bs';
import { ThemeContext } from '../../context';
// import Typewriter from 'typewriter-effect';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            `Babina Gurung `,
            3000,
            `Gurung Babina `,
            3000,
          ]}
          className="type_animation"
          wrapper="h1"
          speed={0}
          style={{
            fontSize: '5rem',
            display: 'inline-block',
            color: darkMode ? '' : 'var(--color-bg)',
            textTransform: 'uppercase',
            fontWeight: 'bolder',
          }}
          repeat={Infinity}
          cursor={true}
        />
        {/* <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('hello')
              .callFunction(() => {
                alert('done!');
              })
              .pauseFor(2000)
              .deleteAll()
              .typeString('hello')
              .start();
          }}
        /> */}
        {/* <h1 style={{ color: darkMode ? '' : 'var(--color-bg)' }}>
          BABINA GURUNG
        </h1> */}
        <h5 className="text-light" style={{ color: darkMode ? '' : '#000' }}>
          " I'm a Front-End Developer "
        </h5>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>

        {/* <div className="me">
          <img src={me} alt="me" />
        </div> */}

        <a href="#about" className="scroll__down">
          Scroll Down <BsMouse2 />
        </a>
      </div>
    </header>
  );
};

export default Header;
