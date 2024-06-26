import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const ExperienceList = (props) => {
  return (
    <article className="experience__details">
      <div className="experience__detail">
        <p>
          <BsPatchCheckFill className="experience__details-icon" /> {props.name}
        </p>
        {/* <small className="text-light">{props.skill}%</small> */}
      </div>
      <div className="progress-line" data-percent={`${props.skill}%`}>
        <span style={{ width: `${props.skill}%` }}></span>
      </div>
    </article>
  );
};

export default ExperienceList;
