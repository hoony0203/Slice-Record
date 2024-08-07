import React from "react";
import { skills } from "../../data/stackSkills";

const Skills = () => {
  return (
    <div>
      {skills.map((skill, i) => {
        return (
          <div className="skill" key={i}>
            <label className="skill-label">
              <h3>{skill.name}</h3>
            </label>
            <progress
              className="skill-progress"
              value={`${skill.progressValue}`}
              max="100"></progress>
            <div className="progress-value">{skill.progressValue}</div>
            <div className="skill-script">
              <p>{skill.script}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
