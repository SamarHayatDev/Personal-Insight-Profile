import React from "react";

const Skills = () => {
  // Array of skills
  const skillsList = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JAVASCRIPT",
    "REACT JS",
    "WordPress",
    "Elementor",
    "CMS",
    "GIT",
    "UI/UX",
    "Figma",
    "Visual Studio Code",
  ];

  return (
    <div className="card">
      <h3>Skills & Tools:</h3>
      <div className="flex flex-wrap gap-2">
        {skillsList.map((skill, index) => (
          <button key={index} className="btn">
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
