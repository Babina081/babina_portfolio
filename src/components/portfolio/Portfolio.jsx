import React from 'react';
import './portfolio.css';

import Language from './language.jsx';
import IMG1 from '../../assets/project2.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'FOOD CLUB (TASTE THE BEST)',
    description:
      'This project marks my first step into college assignments. I created a basic localhost website with two parts: one for admins and another for users. This design lets administrators manage things, while users get to use the site. I put a lot of care into making sure both sides work well. This project demonstrates my starting skills and how much I care about making websites that are easy to use and serve their purpose.',
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
  // {
  //   id: 4,
  //   image: IMG1,
  //   title: 'adda',
  //   github: 'www.github.com',
  //   demo: 'www.google.com',
  // },
  // {
  //   id: 5,
  //   image: IMG1,
  //   title: 'adda',
  //   github: 'www.github.com',
  //   demo: 'www.google.com',
  // },
  // {
  //   id: 6,
  //   image: IMG1,
  //   title: 'adda',
  //   github: 'www.github.com',
  //   demo: 'www.google.com',
  // },
];


const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="a">
        <h5>Works Recently Accomplished By Me</h5>
        <h2>MY PROJECTS</h2>
        <div className="bar"></div>
      </div>

      {data.map(({ id, image, title, description, github, demo }) => {
        return (
          <div className="container portfolio__container">
            <img src={image} className="portfolio__item-image" alt={title} />

            <div className="portfolio__group2">
              <h2>{title}</h2>
              <p className="portfolio__desc">{description}</p>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
              <h2>Programming Language used</h2>
              <Language></Language>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Portfolio;
