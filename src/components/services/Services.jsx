import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <div className="a">
        <h5>What I Can Do</h5>
        <h2>MY PORTFOLIO</h2>
        <div className="bar"></div>
      </div>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          
          </ul>
        </article>
        {/* end of ui/ux */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
           
          </ul>
        </article>
        {/* end of web development */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          
          </ul>
        </article>
        {/* end of Content Creation */}
      </div>
    </section>
  );
};

export default Services;
