import React, { useContext } from 'react';
import './about.css';
import me from '../../assets/prof.jpeg';
import { ThemeContext } from '../../context';

// import { PiCaretDoubleDownBold } from 'react-icons/pi';
// import { FaAward } from 'react-icons/fa';
// import { FiUsers } from 'react-icons/fi';
// import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section id="about">
      <div className="a">
        <h5>Get To Know</h5>
        <h2>ABOUT ME</h2>
        <div className="bar"></div>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <img src={me} alt="About Me" className="about__me-image" />
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>CLients</h5>
              <small>0 worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 completed</small>
            </article>
          </div> */}

          <p style={{ color: darkMode ? '' : 'var(--color-bg)' }}>
            Hey there! I'm a frontend developer focused on transforming concepts
            into stunning web encounters. I'm in a constant cycle of learning
            and crafting.
            <br />
            <br />I am wholeheartedly open and enthusiastic about embracing
            fresh opportunities, collaborating on diverse projects, and taking
            on new challenges that come my way. As a frontend developer, I am
            driven by the desire to continuously learn, innovate, and contribute
            to creating exceptional digital experiences. I am more than ready to
            bring my skills, passion, and expertise to the table. <br />
            <br />
            Let's embark on a journey of mutual growth and success!
          </p>

          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
