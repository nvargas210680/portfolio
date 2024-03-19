import React from "react";
import ProjectItem from "./ProjectItem";
import newstriveoppImg from "../assets/newstriveopp.jpg";
import artmicrocementoImg from "../assets/artmicrocemento.jpg";
import bikesalesImg from "../assets/bikesales.jpg";
import foregoforeclosureImg from "../assets/foregoforeclosure.jpg";
import { useRef } from "react";

const Projects = () => {
  const projectsRef = useRef(null);
  const artMicrocementoClick = () => {
    window.open("https://www.artmicrocemento.com/", "_blank");
  };
  const striveOppClick = () => {
    window.open("https://github.com/nvargas210680/StriveOpp", "_blank");
  };
  const foregoClick = () => {
    window.open("https://www.foregoforeclosure.ca/", "_blank");
  };
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e">Projects</h1>
      <p className="text-center py-8">
        My expertise spans a wide array of technologies, allowing me to create robust and innovative web applications. In recent projects, I've utilized JavaScript, React JS, Node JS, and Express JS
        to build dynamic user interfaces and efficient server-side functionalities. For the ForegoForeclosure real estate platform, I employed JavaScript, Node.js, Next.js, and Supabase to connect
        distressed homeowners with potential buyers seamlessly. In the StriveOpp Scholarship Project, we leveraged JavaScript, ReactVite, Firebase, Jira, and more to provide users with personalized
        matching tools for scholarships and grants. Additionally, for the ArtMicrocemento website, I integrated advanced interactions using Framer Motion, enhancing user experiences, and organized
        content effectively with React Accordion. These projects showcase my adeptness in using a diverse range of technologies and libraries to deliver impactful solutions.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={newstriveoppImg} onClick={striveOppClick} title="StriveOpp App" />
        <ProjectItem img={artmicrocementoImg} onClick={artMicrocementoClick} title="Art Microcemento" />
        <ProjectItem img={bikesalesImg} title="Bike Sales Dashboard" />
        <ProjectItem img={foregoforeclosureImg} onClick={foregoClick} title="ForegoForeclosure" />
      </div>
    </div>
  );
};

export default Projects;
