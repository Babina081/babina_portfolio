import React from 'react'
// import {useContext} from 'react';
import './portfolio.css';


// import { ThemeContext } from '../../context';
// core version + navigation, pagination modules:
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Mousewheel, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectList from './ProjectList.jsx';
import projects from '../../projects.js';


const Portfolio = () => {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
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
        {projects.map((list ) => {
          return (
          <ProjectList key={list.id}
          title={list.title}
          description={list.description}
          img={list.img}
          languages={list.languages}
          gitpage={list.gitpage}
          demo={list.demo}
          ></ProjectList>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
