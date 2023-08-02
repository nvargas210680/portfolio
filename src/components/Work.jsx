// import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Full Stack Developer",
    duration: " 6 months",
    details:
      "StriveOpp Scholarship Project:\nIn collaboration with a team of two, created a web application for StriveOpp company, oriented to scholarships and government grant seekers, providing them with matching pattern tools to find the scholarship that best suits their interest based on experience, professional background, and studies.\nTechnologies Used: JavaScript, ReactVite, NodeJS, Firebase, Jira, Typesense",
  },
  {
    year: 2023,
    title: "Full Stack Developer",
    duration: "6 months",
    details:
      "Park n’ Bike Project:\nIn collaboration with a team of 3, created an application that simplifies Calgary's cycle-path network to enable riders the ability to take a leisurely bike ride with ease on set out pathways. Developed using MERN stack, using Auth0 for authentication.\nTechnologies Used: JavaScript, ReactJS, NodeJS, ExpressJS, REST API, Git, MongoDB, Mapbox, Canva",
  },
];

const Work = () => {
  return (
    <div id="work" className='"max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className="text-4xl font-bold text-center tect-[#001b5e">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
