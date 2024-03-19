// import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Art Microcemento",
    duration: "3 months",
    details:
      "Project Brief:\nArt Microcemento is a dynamic showcase website developed for a client based in Madrid, Spain. The primary objective was to create an engaging platform to display the client's projects and highlight their expertise in microcement applications.\n\nUtilizing React Vite as the foundation, the website boasts a fast and efficient user experience. To enhance the visual appeal and interactivity, we integrated cutting-edge libraries such as Framer Motion for smooth animations and React Accordion for streamlined content organization.\n\nThe concept behind the website is to provide visitors with a visually stunning and user-friendly interface where they can explore the diverse range of microcement projects completed by Art Microcemento.\n\nThrough the use of modern web technologies and meticulous design, the Art Microcemento website serves as a compelling portfolio for the client, showcasing their craftsmanship and innovation in the field of microcement applications.",
  },
  {
    year: 2023,
    title: "Forego Foreclosure",
    duration: "4 months",
    details:
      "Project Brief:\nForegoForeclosure is a cutting-edge real estate web application designed to bridge the gap between homeowners facing foreclosure and potential buyers. As a dedicated freelancer working on this project, the focus is on creating a seamless and user-friendly platform that connects distressed homeowners with buyers looking for real estate opportunities.\n The technologies employed in this project include JavaScript, Node.js, Next.js, Supabase, and Mapbox, Figma",
  },
  {
    year: 2023,
    title: "StriveOpp Full Stack Developer",
    duration: " 3 months",
    details:
      "Project Brief:\nIn collaboration with a team of two, created a web application for StriveOpp company, oriented to scholarships and government grant seekers, providing them with matching pattern tools to find the scholarship that best suits their interest based on experience, professional background, and studies.\nTechnologies Used: JavaScript, ReactVite, NodeJS, Firebase, Jira, Typesense",
  },
  {
    year: 2023,
    title: "Bike Sales Dashboard",
    duration: "One week",
    details:
      "Project Brief: Bike Sales Dashboard Data Analyst Project\n\nObjectives:\n1. Analyze bike sales market demographics and budgets.\n2. Extract insights to guide target audience and pricing strategies.\n3. Create an interactive dashboard for data visualization.\n\nProject Phases:\n1. Data Collection: Gather historical bike sales data.\n2. Data Cleaning and Preparation: Organize and transform data.\n3. Exploratory Data Analysis (EDA):\n   - Analyze demographics, prices, and sales volume.\n   - Identify popular bike models and price points.\n4. Market Demographic Analysis:\n   - Visualize demographics using charts and maps.\n   - Identify target age groups, gender preferences, regions.\n5. Budget Analysis:\n   - Visualize price-sales relationship.\n   - Determine successful price ranges.\n6. Dynamic Dashboard Creation:\n   - Build interactive charts using visualization libraries.\n   - Implement filters for user exploration.\n7. Dashboard Testing and Validation: Ensure responsiveness and accuracy.\n8. Final Presentation and Insights:\n   - Summarize findings and recommendations.\n\nExpected Deliverables:\n- Cleaned bike sales dataset.\n- Exploratory Data Analysis report.\n- Market demographic and budget analysis reports.\n- Interactive dynamic dashboard.\n- Presentation summarizing insights.\n\nBenefits:\n- Guide marketing and pricing strategies.\n- Empower stakeholders with data-driven decisions.\n\nConclusion:\nThe Bike Sales Dashboard Data Analyst Project provides actionable insights for optimized marketing and pricing. The interactive dashboard aids decision-making for enhanced sales and customer satisfaction.",
  },
];

const Work = () => {
  return (
    <div id="work" className='"max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className="text-4xl font-bold text-center tect-[#001b5e mt-24 mb-24">Work</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
      ))}
    </div>
  );
};

export default Work;
