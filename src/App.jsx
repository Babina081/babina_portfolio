import React, { useContext } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
// import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Academic from './components/academic/Academic';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';
import Learning from './components/Learning/Learning';
import Courses from './components/Courses/Courses';
// import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? '' : '#F3FDE8',
        color: darkMode && 'white',
        width: '100%',
      }}
    >
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
