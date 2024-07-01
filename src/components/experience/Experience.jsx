import React from "react";
import "./experience.css";
// import { BsPatchCheckFill } from 'react-icons/bs';
// import { PiCaretDoubleDownBold } from 'react-icons/pi';
import { skills, backend_skills } from "../../data/skills";
import ExperienceList from "./Experience_list";
import { TechCarousel } from "./TechCarousel";

const Experience = () => {
  return (
    <section id="experience">
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" class="bg" />
        <circle cx="50" cy="50" r="30" pathLength="1" class="indicator" />
      </svg>
      <div className="a">
        <h5>What Skill I Am Equipped With</h5>
        <h2>MY SKILLS</h2>
        <div className="bar"></div>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="a">
            <h3>Frontend</h3>
            <div className="bar"></div>
          </div>
          <div className="experience__content">
            {skills.map((list) => {
              return (
                <ExperienceList
                  key={list.id}
                  name={list.name}
                  skill={list.skill}
                />
              );
            })}
          </div>
        </div>
        {/* end of frontend */}

        <div className="experience__backend">
          <div className="a">
            <h3>Backend</h3>
            <div className="bar"></div>
          </div>
          <div className="experience__content">
            {backend_skills.map((list) => {
              return (
                <ExperienceList
                  key={list.id}
                  name={list.name}
                  skill={list.skill}
                />
              );
            })}
          </div>
        </div>

        {/* end of backend */}
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          height: "160px",
          padding: "2px",
          margin: "auto",
          marginTop: "40px",
          overflowX: "scroll",
        }}
      >
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="skill-icon">
              <img
                src={skill.img}
                alt={skill.name}
                style={{
                  height: "140px",
                  width: "140px",
                  objectFit: "contain",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          );
        })}
      </div>
      <TechCarousel />
    </section>
  );
};

export default Experience;
