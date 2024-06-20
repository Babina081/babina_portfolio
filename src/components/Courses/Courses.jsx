import React from "react";
import { courses } from "../../data/courses";

const Courses = () => {
  return (
    <section id="learing">
      <div className="a">
        <h5>I learned from</h5>
        <h2>DYNAMIC COURSES</h2>
        <div className="bar"></div>
      </div>
      <div className="container experience__container">
        {courses.map((course) => (
          <div key={course.id}>{course.name}</div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
