import React from 'react'

const Languages = (props) => {
  return (
    <div className="language__info">
       {props.languages.map((language, index) => (
        <div className="language__box" key={index}>
          <h3 className="language__title">{language}</h3>
        </div>
      ))}
      </div>
  )
}

export default Languages