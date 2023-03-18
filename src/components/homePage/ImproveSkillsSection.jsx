import React from "react";

const ImproveSkillsSection = () => {
  const list = [
    "Learn new recipes",
    "Experiment with food",
    "Write your own recipes",
    "know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];
  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/image/gallery/img_10.jpg" alt="img" />
      </div>

      <div className="col typography">
        <h1 className="title"> Improve Your culinary Skills</h1>
        {list.map((item, index) => (
          <p key={index} className="skill-item">{item}</p>
        ))}
        <button className="btn">signUp now</button>
      </div>
    </div>
  );
};

export default ImproveSkillsSection;
