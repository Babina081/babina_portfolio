import React, { useContext } from 'react';
import './portfolio.css';

import Language from './language.jsx';
import IMG1 from '../../assets/project2.png';
import { ThemeContext } from '../../context';
import { FiGithub } from 'react-icons/fi';
import { FaRegPlayCircle } from 'react-icons/fa';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import { PiCaretDoubleDownBold } from 'react-icons/pi';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'FOOD CLUB (TASTE THE BEST)',
    description:
      'This project marks my first step into college assignments. I created a basic localhost website with two parts: one for admins and another for users. ',
    github: 'www.github.com',
    demo: 'www.google.com',
  },
  {
    id: 2,
    image: IMG1,
    title: 'asaja',
    description: 'asgajsajshajshajhsjh',
    github: 'www.github.com',
    demo: 'www.google.com',
  },
  {
    id: 3,
    image: IMG1,
    title: 'ada',
    github: 'www.github.com',
    demo: 'www.google.com',
  },
];

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section id="portfolio">
      <div className="a">
        <h5>Works Recently Accomplished By Me</h5>
        <h2>MY PROJECTS</h2>
        <div className="bar"></div>
      </div>

      {/* <Swiper
        className="container whole_group"
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
      > */}
      <div className=" container whole_group">
        {data.map(({ image, title, description, github, demo }, index) => {
          return (
            <div key={index} className="portfolio__container">
              <div className="portfolio__group1">
                <img src={image} alt="" />
              </div>
              <div className="portfolio__group2">
                <h3 style={{ color: 'var(--color-primary)' }}>{title}</h3>
                <p>{description}</p>
                <h3 style={{ color: 'var(--color-primary)' }}>Tools Used</h3>
                <Language></Language>

                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github <FiGithub />
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo <FaRegPlayCircle />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
