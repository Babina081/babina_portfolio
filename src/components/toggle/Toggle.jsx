import React, { useContext } from "react";
import "./toggle.css";
import sun from "../../assets/sun.jpg";
import moon from "../../assets/moon.png";
import { ThemeContext } from "../../context";
// import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';

import { motion } from "framer-motion";
import { useState } from "react";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    theme.dispatch({ type: "TOGGLE" });
    setIsOn(!isOn);
  };

  // const handleClick = () => {
  //   theme.dispatch({ type: "TOGGLE" });
  // };
  return (
    // <div className="t">
    //   <img src={sun} alt="" className="t-icon" />
    //   <img src={moon} alt="" className="t-icon" />

    //   <div
    //     className="t-button"
    //     onClick={handleClick}
    //     style={{
    //       left: theme.state.darkMode ? 0 : 25,
    //     }}
    //   ></div>
    // </div>
    <div className="t">
      <div className="switch " data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </div>
  );
};
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Toggle;
