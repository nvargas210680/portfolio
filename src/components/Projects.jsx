import React from "react";
import ProjectItem from "./ProjectItem";
import newstriveoppImg from "../assets/newstriveopp.jpg";
import parknbikeImg from "../assets/parknbike.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e">Projects</h1>
      <p className="text-center py-8">
        The StriveOpp Scholarship Project was a collaborative effort with a team
        of two to create a web application for scholarship and government grant
        seekers. The application was designed to provide users with matching
        pattern tools, helping them find the most suitable scholarships based on
        their experience, professional background, and studies. The technologies
        used in the project included JavaScript, React, Cheerio for web
        scraping, Firebase Authentication for user authentication, and Firestore
        database for data storage. Additionally, Jira was utilized for project
        management.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={newstriveoppImg} title="StriveOpp App" />
        <ProjectItem img={parknbikeImg} title="Park n Bike App" />
      </div>
    </div>
  );
};

export default Projects;
