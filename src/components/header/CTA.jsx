import React from 'react';
import CV from '../../components/myResume.pdf';
import { FaRegCopy } from 'react-icons/fa';
import { FaRegPaperPlane } from 'react-icons/fa';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV <FaRegCopy />
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Connect <FaRegPaperPlane />
      </a>
    </div>
  );
};

export default CTA;
