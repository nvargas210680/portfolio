import React from "react";

const skill = ({ source, alt, title }) => {
  return (
    <div className="w-20 h-20 mx-auto">
      <img src={source} alt={alt} title={title} />
    </div>
  );
};

export default skill;
