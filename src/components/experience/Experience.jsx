import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { PiCaretDoubleDownBold } from 'react-icons/pi';
import {skills,backend_skills} from '../../skills';
import Experience_list from './Experience_list';


const Experience = () => {
  return (
    <section id="experience">
      <div className="a">
        <h5>What Skill I Am Equipped With</h5>
        <h2>MY SKILLS</h2>
        <div className="bar"></div>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="a">
            <h3>Frontend Developer</h3>
            <div className="bar"></div>
          </div>
          <div className="experience__content">

{skills.map((list)=>{
  return < Experience_list key={list.id} name={list.name} skill={list.skill}/>
})}
            {/* <article className="experience__details">
              <div className="experience__detail">
                <p>
                  <BsPatchCheckFill classname="experience__details-icon" /> HTML
                </p>
                <small className="text-light">90%</small>
              </div>
              <div className="progress-line" data-percent="90%">
                <span style={{ width: '90%' }}></span>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__detail">
                <p>
                  <BsPatchCheckFill classname="experience__details-icon" /> CSS
                </p>
                <small className="text-light">90%</small>
              </div>
              <div className="progress-line" data-percent="90%">
                <span style={{ width: '90%' }}></span>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__detail">
                <p>
                  <BsPatchCheckFill classname="experience__details-icon" />{' '}
                  JavaScript
                </p>
                <small className="text-light">60%</small>
              </div>
              <div className="progress-line" data-percent="60%">
                <span style={{ width: '60%' }}></span>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__detail">
                <p>
                  <BsPatchCheckFill classname="experience__details-icon" />{' '}
                  Bootstrap
                </p>
                <small className="text-light">50%</small>
              </div>
              <div className="progress-line" data-percent="50%">
                <span style={{ width: '50%' }}></span>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__detail">
                <p>
                  <BsPatchCheckFill classname="experience__details-icon" />{' '}
                  Tailwind
                </p>
                <small className="text-light">40%</small>
              </div>
              <div className="progress-line" data-percent="40%">
                <span style={{ width: '40%' }}></span>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__detail">
                <p>
                  <BsPatchCheckFill classname="experience__details-icon" />{' '}
                  React
                </p>
                <small className="text-light">70%</small>
              </div>
              <div className="progress-line" data-percent="70%">
                <span style={{ width: '70%' }}></span>
              </div>
            </article> */}
          </div>
        </div>
        {/* end of frontend */}

        <div className="experience__backend">
          <div className="a">
            <h3>Backend Developer</h3>
            <div className="bar"></div>
          </div>
          <div className="experience__content">
            {backend_skills.map((list=>{
             return < Experience_list key={list.id} name={list.name} skill={list.skill}/>
            }))}
            {/* <article className="experience__details">
              <div className="experience__detail">
                <p>
                  <BsPatchCheckFill classname="experience__details-icon" /> Node
                  JS
                </p>
                <small className="text-light">20%</small>
              </div>
              <div className="progress-line" data-percent="20%">
                <span style={{ width: '20%' }}></span>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__detail">
                <p>
                  <BsPatchCheckFill classname="experience__details-icon" />{' '}
                  MongoDB
                </p>
                <small className="text-light">20%</small>
              </div>
              <div className="progress-line" data-percent="20%">
                <span style={{ width: '20%' }}></span>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__detail">
                <p>
                  <BsPatchCheckFill classname="experience__details-icon" /> PHP
                </p>
                <small className="text-light">40%</small>
              </div>
              <div className="progress-line" data-percent="40%">
                <span style={{ width: '40%' }}></span>
              </div>
            </article>
            <article className="experience__details">
              <div className="experience__detail">
                <p>
                  <BsPatchCheckFill classname="experience__details-icon" />{' '}
                  ExpressJS
                </p>
                <small className="text-light">30%</small>
              </div>
              <div className="progress-line" data-percent="30%">
                <span style={{ width: '30%' }}></span>
              </div>
            </article> */}
          </div>
        </div>
        {/* end of backend */}
      </div>
    </section>
  );
};

export default Experience;
