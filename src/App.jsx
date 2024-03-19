// import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import ProjectItem from "./components/ProjectItem";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Skills />
      <Work />
      <Projects />
      <ProjectItem />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
