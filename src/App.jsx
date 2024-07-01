import React, { useContext, useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
// import Services from './components/services/Services';
import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from './components/testimonials/Testimonials';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Academic from "./components/academic/Academic";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Learning from "./components/Learning/Learning";
import Courses from "./components/Courses/Courses";
// import { BrowserRouter } from 'react-router-dom';
import { scroll } from "framer-motion";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    const progressWheel = document.querySelector(".progress");

    // Initialize scroll behavior
    scroll((progress) => {
      progressWheel.style.strokeDasharray = `${progress}, 1`;
    });

    // Clean up function if needed (though not usually necessary for event listeners)
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <div
      style={{
        backgroundColor: darkMode ? "" : "#F3FDE8",
        color: darkMode && "white",
        width: "100%",
      }}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        className="progress-wheel"
      >
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <circle cx="50" cy="50" r="30" pathLength="1" className="progress" />
      </svg>
      <Toggle></Toggle>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Learning></Learning>
      <Courses></Courses>
      {/* <Services></Services> */}
      <Academic></Academic>
      <Portfolio></Portfolio>
      {/* <Testimonials></Testimonials> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
