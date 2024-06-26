import React from "react";
import "./testimonials.css";
import subject from "../../assets/Subject.png";
import subject1 from "../../assets/Subject1.png";
import subject2 from "../../assets/Subject2.png";
import subject3 from "../../assets/Subject3.png";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: subject,
    name: "babina gurung",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animinisi.",
  },
  {
    avatar: subject1,
    name: "babina gurung",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animinisi.",
  },
  {
    avatar: subject2,
    name: "babina gurung",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animinisi.",
  },
  {
    avatar: subject3,
    name: "babina gurung",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animinisi.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="a">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <div className="bar"></div>
      </div>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="cclient__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
