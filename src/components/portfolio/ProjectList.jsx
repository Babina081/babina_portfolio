import React from 'react'
import { FaRegPlayCircle } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import Language from './Language'

const ProjectList = (props) => {
  return (
    <div key={props.id} className="portfolio__container">
    <div className="portfolio__group1">
      <img src={props.img} alt="" />
    </div>
    <div className="portfolio__group2">
      <h3 style={{ color: 'var(--color-primary)' }}>{props.title}</h3>
      <p>{props.description}</p>
      <h3 style={{ color: 'var(--color-primary)' }}>Tools Used</h3>
      <Language languages={props.languages}/>
      {/* <ul>
      {props.languages.map((language, index) => (
        <li key={index}>{language}</li>
      ))}
    </ul> */}

      <div className="portfolio__item-cta">
        <a href={props.gitpage} className="btn" target="blank">
          Github <FiGithub />
        </a>
        <a href={props.demo} className="btn btn-primary" target="blank">
          Live Demo <FaRegPlayCircle />
        </a>
      </div>
    </div>
  </div>
  )
}

export default ProjectList