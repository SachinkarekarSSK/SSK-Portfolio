import React, { useRef } from "react";
import Navbar from "./Components/navbar";
import Introduction from "./Components/introduction";
import AboutMe from "./Components/AboutMe";
import ProjectSection from "./Components/ProjectSection";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const HomePage = () => {

  const homeRef = useRef('')
  const aboutRef = useRef('')
  const contactRef = useRef('')
  const projectRef = useRef('')

 

  return (
    <>
    {/* <button onClick={handleclick}>click me to go contact page</button> */}
      <Navbar homeref={homeRef} aboutref={aboutRef} contref={contactRef} projectref={projectRef} />
      <Introduction ref={homeRef}/>
      <AboutMe ref={aboutRef} />
      <ProjectSection ref={projectRef} />
      <Contact ref={contactRef}/>
      <Footer />
    </>
  );
};

export default HomePage
