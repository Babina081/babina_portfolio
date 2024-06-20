import React from "react";
import { mentors } from "../../data/mentors";

const Learning = () => {
  return (
    <section id="learing">
      <div className="a">
        <h5>Phase of learning</h5>
        <h2>MY LEARNING</h2>
        <div className="bar"></div>
      </div>
      <div className="container experience__container">
        {mentors.map((mentor) => (
          <div key={mentor.id}>{mentor.name}</div>
        ))}
      </div>
    </section>
  );
};

export default Learning;
