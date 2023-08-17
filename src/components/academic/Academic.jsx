import React from 'react';
import './academic.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';

const data = [
  {
    date: '2017 - 2022',
    college: 'Pokhara Engineering College',
    degree: 'Bachelor in Computer Engineering',
    location: 'Phire,Pokhara',
    affiliated: 'Pokhara University',
  },
  {
    date: '2015-2017',
    college: 'St. Marys Higher Secondary School ',
    degree: '+2 Level',
    location: 'Nayagaun, Pokhara',
    affiliated: 'Government of Nepal',
  },
  {
    date: '2005-2015',
    college: 'Gyanodaya Bal Batika School',
    degree: 'School Leaving Certificate (SLC)',
    location: 'Sanepa, Lalitpur',
    affiliated: 'Government of Nepal',
  },
];
const Academic = () => {
  return (
    <section id="academic">
      <div className="a">
        <h5>Lookover My Educational History</h5>
        <h2>ACADEMIC CERTIFICATES</h2>
        <div className="bar"></div>
      </div>

      <div className="container academic__container">
        <VerticalTimeline
          className="vertical__timeline "
          lineColor="var(--color-primary)"
          animate={true}
        >
          {data.map(({ date, college, location, affiliated, degree }) => {
            return (
              <VerticalTimelineElement
                contentStyle={{
                  border: '1px solid var(--color-primary)',
                }}
                // contentArrowStyle={{
                //   borderRight: '7px solid var(--color-primary) ',
                // }}
                className="vertical-timeline-element--education"
                iconStyle={{
                  background: 'var(--color-primary)',
                  color: 'var(--color-white)',
                }}
                icon={<FaGraduationCap />}
                date={date}
              >
                <h2
                  style={{
                    color: 'var(--color-bg-variant) ',
                    fontStyle: 'bold',
                    fontWeight: 800,
                  }}
                >
                  {college}
                </h2>
                <h5 style={{ color: '--color-primary', fontStyle: 'italic' }}>
                  {affiliated}
                </h5>
                <h6 style={{ color: 'var(--color-primary)' }}>
                  <ImLocation2 />
                  {location}
                </h6>
                <div className="bar"></div>
                <p>{degree}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Academic;
