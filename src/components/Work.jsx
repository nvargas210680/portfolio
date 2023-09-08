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
  {
    "year": 2023,
    "title": "Bike Sales Dashboard",
    "duration": "",
    "details": "Project Brief: Bike Sales Dashboard Data Analyst Project\n\nObjectives:\n1. Analyze bike sales market demographics and budgets.\n2. Extract insights to guide target audience and pricing strategies.\n3. Create an interactive dashboard for data visualization.\n\nProject Phases:\n1. Data Collection: Gather historical bike sales data.\n2. Data Cleaning and Preparation: Organize and transform data.\n3. Exploratory Data Analysis (EDA):\n   - Analyze demographics, prices, and sales volume.\n   - Identify popular bike models and price points.\n4. Market Demographic Analysis:\n   - Visualize demographics using charts and maps.\n   - Identify target age groups, gender preferences, regions.\n5. Budget Analysis:\n   - Visualize price-sales relationship.\n   - Determine successful price ranges.\n6. Dynamic Dashboard Creation:\n   - Build interactive charts using visualization libraries.\n   - Implement filters for user exploration.\n7. Dashboard Testing and Validation: Ensure responsiveness and accuracy.\n8. Final Presentation and Insights:\n   - Summarize findings and recommendations.\n\nExpected Deliverables:\n- Cleaned bike sales dataset.\n- Exploratory Data Analysis report.\n- Market demographic and budget analysis reports.\n- Interactive dynamic dashboard.\n- Presentation summarizing insights.\n\nBenefits:\n- Guide marketing and pricing strategies.\n- Empower stakeholders with data-driven decisions.\n\nConclusion:\nThe Bike Sales Dashboard Data Analyst Project provides actionable insights for optimized marketing and pricing. The interactive dashboard aids decision-making for enhanced sales and customer satisfaction."
  }
  
  
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
