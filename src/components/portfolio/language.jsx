import React from 'react';

const Language = (props) => {
  const {langauges}=props;
  return (
    <div className="language__info">
       {props.languages.map((language, index) => (
        <div className="language__box" key={index}>
          <h3 className="language__title">{language}</h3>
        </div>
      ))}
      </div>
    
    /* <div className="language__box">
        <h3 className="language__title">PHP</h3>
      </div>
      <div className="language__box">
        <h3 className="language__title">Nodejs</h3>
      </div>
      <div className="language__box">
        <h3 className="language__title">Nodejs</h3>
      </div>
      <div className="language__box">
        <h3 className="language__title">Nodejs</h3>
      </div> */
   
  );
};

export default Language;
